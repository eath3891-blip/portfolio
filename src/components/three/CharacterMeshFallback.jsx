import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { calculateEyeTarget, dampAngle } from './EyeTracking';
import { calculateHeadTarget, dampHeadAngle } from './HeadTracking';

/**
 * Highly polished stylized 3D character representing Manoj Bhatt.
 * Features an Apple-studio clay/editorial aesthetic with independent
 * left/right eye rotation pivots, head inertia pivot, and breathing idle animation.
 */
export default function CharacterMeshFallback({ cursorRef }) {
  const rootRef = useRef();
  const torsoRef = useRef();
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  // Internal state tracking for damping without React re-renders
  const currentEyeRot = useRef({
    left: { yaw: 0, pitch: 0 },
    right: { yaw: 0, pitch: 0 }
  });

  const currentHeadRot = useRef({
    yaw: 0,
    pitch: 0,
    roll: 0
  });

  useFrame((state, delta) => {
    // 1. Idle breathing and subtle weight shift
    const time = state.clock.getElapsedTime();
    const breath = Math.sin(time * 1.5) * 0.025;
    const microSway = Math.cos(time * 0.75) * 0.01;

    if (rootRef.current) {
      rootRef.current.position.y = breath;
      rootRef.current.position.x = microSway;
    }

    if (torsoRef.current) {
      // Subtle chest expansion
      torsoRef.current.scale.y = 1 + Math.sin(time * 1.5) * 0.015;
    }

    // 2. Read normalized cursor coords from mutable ref (no React re-render)
    const normX = cursorRef?.current?.x ?? 0;
    const normY = cursorRef?.current?.y ?? 0;

    // 3. Head Tracking with organic inertia
    const headTarget = calculateHeadTarget(normX, normY);
    currentHeadRot.current.yaw = dampHeadAngle(currentHeadRot.current.yaw, headTarget.yaw, delta);
    currentHeadRot.current.pitch = dampHeadAngle(currentHeadRot.current.pitch, -headTarget.pitch, delta);
    currentHeadRot.current.roll = dampHeadAngle(currentHeadRot.current.roll, headTarget.roll, delta);

    if (headRef.current) {
      headRef.current.rotation.y = currentHeadRot.current.yaw;
      headRef.current.rotation.x = currentHeadRot.current.pitch;
      headRef.current.rotation.z = currentHeadRot.current.roll;
    }

    // 4. Eye Tracking with clamped limits & optical convergence
    const eyeTarget = calculateEyeTarget(normX, normY);

    currentEyeRot.current.left.yaw = dampAngle(currentEyeRot.current.left.yaw, eyeTarget.leftEye.yaw, 10, delta);
    currentEyeRot.current.left.pitch = dampAngle(currentEyeRot.current.left.pitch, -eyeTarget.leftEye.pitch, 10, delta);

    currentEyeRot.current.right.yaw = dampAngle(currentEyeRot.current.right.yaw, eyeTarget.rightEye.yaw, 10, delta);
    currentEyeRot.current.right.pitch = dampAngle(currentEyeRot.current.right.pitch, -eyeTarget.rightEye.pitch, 10, delta);

    if (leftEyeRef.current) {
      leftEyeRef.current.rotation.y = currentEyeRot.current.left.yaw;
      leftEyeRef.current.rotation.x = currentEyeRot.current.left.pitch;
    }

    if (rightEyeRef.current) {
      rightEyeRef.current.rotation.y = currentEyeRot.current.right.yaw;
      rightEyeRef.current.rotation.x = currentEyeRot.current.right.pitch;
    }
  });

  // Designer materials
  const skinMaterial = new THREE.MeshStandardMaterial({
    color: '#f0c7a8',
    roughness: 0.65,
    metalness: 0.05
  });

  const hairMaterial = new THREE.MeshStandardMaterial({
    color: '#1c1b20',
    roughness: 0.45,
    metalness: 0.1
  });

  const sweaterMaterial = new THREE.MeshStandardMaterial({
    color: '#17171c',
    roughness: 0.85,
    metalness: 0.02
  });

  const collarMaterial = new THREE.MeshStandardMaterial({
    color: '#2b2b34',
    roughness: 0.8,
    metalness: 0.05
  });

  const eyeWhiteMaterial = new THREE.MeshStandardMaterial({
    color: '#fcfcfc',
    roughness: 0.15,
    metalness: 0.05
  });

  const pupilMaterial = new THREE.MeshStandardMaterial({
    color: '#111317',
    roughness: 0.1,
    metalness: 0.2
  });

  const irisRingMaterial = new THREE.MeshStandardMaterial({
    color: '#2a3b4c', // Deep rich indigo-grey iris
    roughness: 0.2,
    metalness: 0.1
  });

  const glassesFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.2,
    metalness: 0.8
  });

  return (
    <group ref={rootRef} position={[0, -1.45, 0]} scale={1.38}>
      {/* Upper Torso / Designer Mockneck Sweater */}
      <group ref={torsoRef} position={[0, 0.45, 0]}>
        {/* Shoulders & Chest */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.55, 0.72, 1.1, 32]} />
          <primitive object={sweaterMaterial} attach="material" />
        </mesh>

        {/* Mockneck Collar */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.27, 0.29, 0.22, 32]} />
          <primitive object={collarMaterial} attach="material" />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.22, 0.24, 0.35, 32]} />
          <primitive object={skinMaterial} attach="material" />
        </mesh>
      </group>

      {/* Head Group (Controlled by HeadTracking) */}
      <group ref={headRef} position={[0, 1.48, 0]}>
        {/* Head Base */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.48, 36, 36]} />
          <primitive object={skinMaterial} attach="material" />
        </mesh>

        {/* Jaw / Chin refinement */}
        <mesh position={[0, -0.22, 0.12]} scale={[0.85, 0.7, 0.9]}>
          <sphereGeometry args={[0.34, 24, 24]} />
          <primitive object={skinMaterial} attach="material" />
        </mesh>

        {/* Modern Minimalist Hair */}
        <group position={[0, 0.16, -0.04]}>
          {/* Main hair cap */}
          <mesh scale={[1.04, 1.05, 1.08]}>
            <sphereGeometry args={[0.48, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
            <primitive object={hairMaterial} attach="material" />
          </mesh>
          {/* Modern swept volume */}
          <mesh position={[0.02, 0.36, 0.12]} scale={[0.9, 0.35, 0.8]}>
            <sphereGeometry args={[0.38, 24, 24]} />
            <primitive object={hairMaterial} attach="material" />
          </mesh>
        </group>

        {/* Subtle Designer Glasses Frame */}
        <group position={[0, 0.04, 0.44]}>
          {/* Left Rim */}
          <mesh position={[-0.17, 0, 0]}>
            <torusGeometry args={[0.13, 0.016, 16, 32]} />
            <primitive object={glassesFrameMaterial} attach="material" />
          </mesh>
          {/* Right Rim */}
          <mesh position={[0.17, 0, 0]}>
            <torusGeometry args={[0.13, 0.016, 16, 32]} />
            <primitive object={glassesFrameMaterial} attach="material" />
          </mesh>
          {/* Bridge */}
          <mesh position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.012, 0.012, 0.1, 16]} />
            <primitive object={glassesFrameMaterial} attach="material" />
          </mesh>
        </group>

        {/* Nose */}
        <mesh position={[0, -0.04, 0.48]} rotation={[0.2, 0, 0]}>
          <coneGeometry args={[0.065, 0.18, 16]} />
          <primitive object={skinMaterial} attach="material" />
        </mesh>

        {/* Left Eye Pivot (Independently controllable) */}
        <group ref={leftEyeRef} position={[-0.17, 0.04, 0.36]}>
          {/* Eyeball */}
          <mesh>
            <sphereGeometry args={[0.095, 24, 24]} />
            <primitive object={eyeWhiteMaterial} attach="material" />
          </mesh>
          {/* Iris Ring */}
          <mesh position={[0, 0, 0.078]} scale={[1, 1, 0.25]}>
            <sphereGeometry args={[0.052, 20, 20]} />
            <primitive object={irisRingMaterial} attach="material" />
          </mesh>
          {/* Pupil */}
          <mesh position={[0, 0, 0.088]} scale={[1, 1, 0.2]}>
            <sphereGeometry args={[0.028, 16, 16]} />
            <primitive object={pupilMaterial} attach="material" />
          </mesh>
          {/* Specular Glint */}
          <mesh position={[0.02, 0.02, 0.093]}>
            <sphereGeometry args={[0.009, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Right Eye Pivot (Independently controllable) */}
        <group ref={rightEyeRef} position={[0.17, 0.04, 0.36]}>
          {/* Eyeball */}
          <mesh>
            <sphereGeometry args={[0.095, 24, 24]} />
            <primitive object={eyeWhiteMaterial} attach="material" />
          </mesh>
          {/* Iris Ring */}
          <mesh position={[0, 0, 0.078]} scale={[1, 1, 0.25]}>
            <sphereGeometry args={[0.052, 20, 20]} />
            <primitive object={irisRingMaterial} attach="material" />
          </mesh>
          {/* Pupil */}
          <mesh position={[0, 0, 0.088]} scale={[1, 1, 0.2]}>
            <sphereGeometry args={[0.028, 16, 16]} />
            <primitive object={pupilMaterial} attach="material" />
          </mesh>
          {/* Specular Glint */}
          <mesh position={[0.02, 0.02, 0.093]}>
            <sphereGeometry args={[0.009, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Subtle refined smile */}
        <mesh position={[0, -0.22, 0.44]} rotation={[0.08, 0, 0]}>
          <torusGeometry args={[0.07, 0.009, 12, 24, Math.PI * 0.7]} />
          <meshStandardMaterial color="#c07860" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

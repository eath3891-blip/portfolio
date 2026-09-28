import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import CharacterMeshFallback from './CharacterMeshFallback';
import { calculateEyeTarget, dampAngle } from './EyeTracking';
import { calculateHeadTarget, dampHeadAngle } from './HeadTracking';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * Modular Character Controller:
 * Attempts to load the custom GLB model specified in PORTFOLIO_CONFIG.models.characterGlbPath.
 * Inspects node hierarchy for controllable eye and head bones/meshes.
 * If not present or incompatible, gracefully falls back to CharacterMeshFallback.
 */
export default function CharacterController({ cursorRef }) {
  const [modelState, setModelState] = useState({
    loaded: false,
    gltfScene: null,
    eyeLeftNode: null,
    eyeRightNode: null,
    headNode: null,
    hasEyes: false,
    error: null
  });

  const customModelRef = useRef();
  const currentEyeRot = useRef({ left: { yaw: 0, pitch: 0 }, right: { yaw: 0, pitch: 0 } });
  const currentHeadRot = useRef({ yaw: 0, pitch: 0, roll: 0 });

  useEffect(() => {
    const glbPath = PORTFOLIO_CONFIG.models.characterGlbPath;
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        let eyeL = null;
        let eyeR = null;
        let head = null;

        // Traverse hierarchy looking for eye/head identifiers
        gltf.scene.traverse((node) => {
          const name = node.name.toLowerCase();
          if (name.includes('eye_l') || name.includes('lefteye') || name.includes('eye.l')) {
            eyeL = node;
          }
          if (name.includes('eye_r') || name.includes('righteye') || name.includes('eye.r')) {
            eyeR = node;
          }
          if (name.includes('head') || name.includes('neck')) {
            if (!head) head = node;
          }
        });

        console.info('[3D Character] GLB loaded:', {
          hasEyeL: !!eyeL,
          hasEyeR: !!eyeR,
          hasHead: !!head
        });

        setModelState({
          loaded: true,
          gltfScene: gltf.scene,
          eyeLeftNode: eyeL,
          eyeRightNode: eyeR,
          headNode: head,
          hasEyes: !!(eyeL && eyeR),
          error: null
        });
      },
      undefined,
      (err) => {
        // Expected fallback when custom GLB is not yet supplied by user
        console.info('[3D Character] Model not found or pending upload. Using procedural designer character.');
        setModelState((prev) => ({ ...prev, loaded: false, error: err }));
      }
    );
  }, []);

  // Frame update for custom GLB if loaded with eyes
  useFrame((state, delta) => {
    if (!modelState.loaded || !modelState.gltfScene) return;

    const time = state.clock.getElapsedTime();
    if (customModelRef.current) {
      customModelRef.current.position.y = Math.sin(time * 1.5) * 0.02;
    }

    const normX = cursorRef?.current?.x ?? 0;
    const normY = cursorRef?.current?.y ?? 0;

    // Custom Head tracking
    if (modelState.headNode) {
      const headTarget = calculateHeadTarget(normX, normY);
      currentHeadRot.current.yaw = dampHeadAngle(currentHeadRot.current.yaw, headTarget.yaw, delta);
      currentHeadRot.current.pitch = dampHeadAngle(currentHeadRot.current.pitch, -headTarget.pitch, delta);
      
      modelState.headNode.rotation.y = currentHeadRot.current.yaw;
      modelState.headNode.rotation.x = currentHeadRot.current.pitch;
    }

    // Custom Eye tracking
    if (modelState.hasEyes) {
      const eyeTarget = calculateEyeTarget(normX, normY);
      currentEyeRot.current.left.yaw = dampAngle(currentEyeRot.current.left.yaw, eyeTarget.leftEye.yaw, 10, delta);
      currentEyeRot.current.left.pitch = dampAngle(currentEyeRot.current.left.pitch, -eyeTarget.leftEye.pitch, 10, delta);
      
      modelState.eyeLeftNode.rotation.y = currentEyeRot.current.left.yaw;
      modelState.eyeLeftNode.rotation.x = currentEyeRot.current.left.pitch;

      modelState.eyeRightNode.rotation.y = currentEyeRot.current.right.yaw;
      modelState.eyeRightNode.rotation.x = currentEyeRot.current.right.pitch;
    }
  });

  // If custom GLB with controllable nodes exists, render it
  if (modelState.loaded && modelState.gltfScene) {
    return (
      <group ref={customModelRef} position={[0, -1.2, 0]} scale={1.2}>
        <primitive object={modelState.gltfScene} />
      </group>
    );
  }

  // Fallback to high-polish procedural designer character
  return <CharacterMeshFallback cursorRef={cursorRef} />;
}

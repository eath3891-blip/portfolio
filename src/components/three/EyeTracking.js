/**
 * Eye Tracking Controller Math & Smoothing
 * 
 * Takes normalized cursor coordinates [-1, 1] and computes realistic,
 * clamped rotation angles for the left and right eye nodes.
 */

// Maximum physiological eye rotation limits in radians
export const EYE_LIMITS = {
  maxHorizontal: 0.38, // ~22 degrees
  maxVertical: 0.28,   // ~16 degrees
  responsiveness: 0.75  // Proportion of cursor tracking assigned to eyes vs head
};

/**
 * Computes target rotation angles with clamping
 * @param {number} normX - Mouse X normalized from -1 (left) to 1 (right)
 * @param {number} normY - Mouse Y normalized from -1 (bottom) to 1 (top)
 * @returns {{ leftEye: { x: number, y: number }, rightEye: { x: number, y: number } }}
 */
export function calculateEyeTarget(normX, normY) {
  // Clamp input
  const clampedX = Math.max(-1, Math.min(1, normX));
  const clampedY = Math.max(-1, Math.min(1, normY));

  // Compute base angles
  const targetYaw = clampedX * EYE_LIMITS.maxHorizontal * EYE_LIMITS.responsiveness;
  const targetPitch = clampedY * EYE_LIMITS.maxVertical * EYE_LIMITS.responsiveness;

  // Slight optical convergence for 3D realism
  const convergence = 0.03 * clampedX;

  return {
    leftEye: {
      yaw: targetYaw - convergence,
      pitch: targetPitch
    },
    rightEye: {
      yaw: targetYaw + convergence,
      pitch: targetPitch
    }
  };
}

/**
 * Frame-rate independent exponential smoothing (Damp)
 * @param {number} current - Current angle
 * @param {number} target - Target angle
 * @param {number} smoothing - Lambda smoothing factor (higher = faster)
 * @param {number} delta - Delta time in seconds
 */
export function dampAngle(current, target, smoothing = 8, delta = 0.016) {
  return current + (target - current) * (1 - Math.exp(-smoothing * delta));
}

/**
 * Head Tracking Controller Math & Inertia Smoothing
 * 
 * Computes subtle, delayed head orientation following cursor position.
 * Responsiveness is ~18% with higher inertia for an organic, human feel.
 */

export const HEAD_LIMITS = {
  maxYaw: 0.20,      // ~11.5 degrees horizontal
  maxPitch: 0.14,    // ~8 degrees vertical
  maxRoll: 0.04,     // ~2.3 degrees subtle head tilt
  smoothing: 3.8     // Slower smoothing factor for realistic physical inertia/lag
};

/**
 * Calculates clamped target rotation for head bone/group
 * @param {number} normX - Mouse X from -1 to 1
 * @param {number} normY - Mouse Y from -1 to 1
 * @returns {{ yaw: number, pitch: number, roll: number }}
 */
export function calculateHeadTarget(normX, normY) {
  const clampedX = Math.max(-1, Math.min(1, normX));
  const clampedY = Math.max(-1, Math.min(1, normY));

  // Subtle tilt (roll) toward movement direction
  const roll = -clampedX * HEAD_LIMITS.maxRoll;

  return {
    yaw: clampedX * HEAD_LIMITS.maxYaw,
    pitch: clampedY * HEAD_LIMITS.maxPitch,
    roll: roll
  };
}

/**
 * Exponential damp for head orientation
 */
export function dampHeadAngle(current, target, delta = 0.016) {
  return current + (target - current) * (1 - Math.exp(-HEAD_LIMITS.smoothing * delta));
}

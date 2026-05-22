import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group } from "three";

function RadarBlip({
  position,
  phase = 0,
}: {
  position: [number, number, number];
  phase?: number;
}) {
  const ref = useRef<Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    const s = 0.8 + 0.4 * Math.sin(t * 2.2 + phase);
    ref.current.scale.set(s, s, 1);
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <circleGeometry args={[0.09, 24]} />
        <meshBasicMaterial color="#FF6B6B" />
      </mesh>
    </group>
  );
}

export function RadarScene() {
  const sweepRef = useRef<Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!sweepRef.current) return;
    const angle = t * 0.7; // sweep speed
    sweepRef.current.rotation.z = angle;
  });

  const radius = 2.2;

  return (
    // Tilt the whole radar slightly so it's not perfectly flat
    <group rotation={[-0.6, 0, 0]} position={[0, -0.2, 0]}>
      {/* Base disk */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[radius, 72]} />
        <meshBasicMaterial color="#f8fbff" />
      </mesh>

      {/* Concentric rings */}
      {[0.6, 1.2, 1.8, 2.2].map((r) => (
        <mesh key={r} position={[0, 0, 0.001]}>
          <ringGeometry args={[r - 0.02, r, 64]} />
          <meshBasicMaterial color="#d3e3ff" transparent opacity={0.9} />
        </mesh>
      ))}

      {/* Cross-lines */}
      <Line
        points={[
          [-radius, 0, 0.002],
          [radius, 0, 0.002],
        ]}
        color="#d2e1ff"
        lineWidth={1}
      />
      <Line
        points={[
          [0, -radius, 0.002],
          [0, radius, 0.002],
        ]}
        color="#d2e1ff"
        lineWidth={1}
      />

      {/* Sweep beam */}
      <group ref={sweepRef} position={[0, 0, 0.01]}>
        <mesh position={[radius * 0.55, 0, 0]}>
          <planeGeometry args={[radius * 1.1, 0.45]} />
          <meshBasicMaterial
            color="#4DA3FF"
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* Trajectory arcs */}
      <Line
        points={[
          [-1.4, -0.6, 0.015],
          [-0.6, 0.3, 0.015],
          [0.4, 0.8, 0.015],
        ]}
        color="#4DA3FF"
        lineWidth={1}
      />
      <Line
        points={[
          [1.6, -0.5, 0.015],
          [0.9, 0.1, 0.015],
          [0.1, 0.7, 0.015],
        ]}
        color="#9ec7ff"
        lineWidth={1}
      />

      {/* Blips */}
      <RadarBlip position={[1.0, 0.7, 0.02]} phase={0} />
      <RadarBlip position={[-1.3, 0.3, 0.02]} phase={1} />
      <RadarBlip position={[0.2, -1.1, 0.02]} phase={2} />

      {/* Small label-ish blocks to hint at data */}
      <mesh position={[-2.5, -1.6, 0.03]}>
        <boxGeometry args={[0.8, 0.18, 0.03]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-2.5, -1.3, 0.03]}>
        <boxGeometry args={[0.5, 0.13, 0.03]} />
        <meshStandardMaterial color="#dbe7ff" />
      </mesh>

      <mesh position={[2.5, 1.6, 0.03]}>
        <boxGeometry args={[0.7, 0.18, 0.03]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[2.5, 1.3, 0.03]}>
        <boxGeometry args={[0.4, 0.13, 0.03]} />
        <meshStandardMaterial color="#ffd2d2" />
      </mesh>
    </group>
  );
}

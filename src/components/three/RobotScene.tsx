// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import type { Group, Mesh } from "three";

// export function RobotScene() {
//   const bowlerRef = useRef<Group | null>(null);
//   const batterRef = useRef<Group | null>(null);
//   const ballRef = useRef<Mesh | null>(null);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();

//     // Subtle idle motion for bowler and batter
//     if (bowlerRef.current) {
//       bowlerRef.current.position.z = Math.sin(t * 1.1) * 0.08;
//       bowlerRef.current.rotation.y = Math.sin(t * 0.8) * 0.15 - 0.15;
//     }

//     if (batterRef.current) {
//       batterRef.current.position.z = Math.cos(t * 1.2) * 0.05;
//       batterRef.current.rotation.y = Math.sin(t * 0.6) * 0.1 + 0.2;
//     }

//     // Ball trajectory: simple looping "delivery" from bowler to batter
//     if (ballRef.current) {
//       const phase = t * 0.6;
//       const normalized = (Math.sin(phase) + 1) / 2; // 0 → 1 → 0 loop

//       // x: from bowler (negative) to batter (positive)
//       const startX = -1.8;
//       const endX = 1.8;
//       const x = startX + (endX - startX) * normalized;

//       // y: small arc
//       const y = -0.7 + Math.sin(normalized * Math.PI) * 0.4;

//       // z: small wobble
//       const z = Math.cos(phase * 1.7) * 0.15;

//       ballRef.current.position.set(x, y, z);
//     }
//   });

//   return (
//     <group>
//       {/* Ground field */}
//       <mesh
//         rotation={[-Math.PI / 2, 0, 0]}
//         position={[0, -0.8, 0]}
//         receiveShadow
//       >
//         <planeGeometry args={[8, 5]} />
//         <meshStandardMaterial color="#e3f7e6" />
//       </mesh>

//       {/* Pitch strip */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.79, 0]}>
//         <planeGeometry args={[3.8, 1.1]} />
//         <meshStandardMaterial color="#f5f0d8" />
//       </mesh>

//       {/* Crease lines */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1.9, -0.78, 0]}>
//         <planeGeometry args={[0.04, 1.1]} />
//         <meshStandardMaterial color="#ffffff" />
//       </mesh>
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1.9, -0.78, 0]}>
//         <planeGeometry args={[0.04, 1.1]} />
//         <meshStandardMaterial color="#ffffff" />
//       </mesh>

//       {/* Wickets at batter end */}
//       <group position={[2.05, -0.5, 0]}>
//         {/* Stumps */}
//         <mesh castShadow position={[-0.06, 0.2, 0]}>
//           <boxGeometry args={[0.03, 0.4, 0.03]} />
//           <meshStandardMaterial color="#d1c6a3" />
//         </mesh>
//         <mesh castShadow position={[0, 0.2, 0]}>
//           <boxGeometry args={[0.03, 0.4, 0.03]} />
//           <meshStandardMaterial color="#d1c6a3" />
//         </mesh>
//         <mesh castShadow position={[0.06, 0.2, 0]}>
//           <boxGeometry args={[0.03, 0.4, 0.03]} />
//           <meshStandardMaterial color="#d1c6a3" />
//         </mesh>

//         {/* Bails */}
//         <mesh castShadow position={[0, 0.42, 0]}>
//           <boxGeometry args={[0.18, 0.03, 0.03]} />
//           <meshStandardMaterial color="#f0e8c2" />
//         </mesh>
//       </group>

//       {/* Bowler robot (blue team) */}
//       <group ref={bowlerRef} position={[-1.8, -0.4, 0]}>
//         {/* Torso */}
//         <mesh castShadow position={[0, 0.35, 0]}>
//           <boxGeometry args={[0.45, 0.7, 0.25]} />
//           <meshStandardMaterial color="#4DA3FF" />
//         </mesh>

//         {/* Chest panel */}
//         <mesh castShadow position={[0, 0.35, 0.135]}>
//           <boxGeometry args={[0.25, 0.25, 0.03]} />
//           <meshStandardMaterial color="#dbe7ff" />
//         </mesh>

//         {/* Head block */}
//         <mesh castShadow position={[0, 0.82, 0]}>
//           <boxGeometry args={[0.32, 0.24, 0.24]} />
//           <meshStandardMaterial color="#ffffff" />
//         </mesh>

//         {/* Visor */}
//         <mesh castShadow position={[0, 0.82, 0.13]}>
//           <boxGeometry args={[0.26, 0.1, 0.02]} />
//           <meshStandardMaterial color="#222222" />
//         </mesh>

//         {/* Antenna */}
//         <mesh castShadow position={[0, 0.97, 0]}>
//           <cylinderGeometry args={[0.015, 0.015, 0.12, 12]} />
//           <meshStandardMaterial color="#4DA3FF" />
//         </mesh>
//         <mesh castShadow position={[0, 1.05, 0]}>
//           <sphereGeometry args={[0.03, 16, 16]} />
//           <meshStandardMaterial color="#FF6B6B" />
//         </mesh>

//         {/* Left arm */}
//         <group position={[-0.32, 0.4, 0]}>
//           <mesh castShadow position={[0, 0.08, 0]}>
//             <boxGeometry args={[0.15, 0.28, 0.14]} />
//             <meshStandardMaterial color="#7fc3ff" />
//           </mesh>
//           <mesh castShadow position={[0, -0.12, 0]}>
//             <boxGeometry args={[0.12, 0.22, 0.12]} />
//             <meshStandardMaterial color="#dbe7ff" />
//           </mesh>
//         </group>

//         {/* Right arm in bowling pose */}
//         <group position={[0.32, 0.45, 0]}>
//           <mesh castShadow position={[0, 0.12, 0]}>
//             <boxGeometry args={[0.15, 0.32, 0.14]} />
//             <meshStandardMaterial color="#7fc3ff" />
//           </mesh>
//           <mesh castShadow position={[0, -0.04, 0]}>
//             <boxGeometry args={[0.12, 0.24, 0.12]} />
//             <meshStandardMaterial color="#dbe7ff" />
//           </mesh>
//         </group>

//         {/* Legs / tracks-ish feet */}
//         <mesh castShadow position={[-0.13, 0.02, 0]}>
//           <boxGeometry args={[0.15, 0.45, 0.16]} />
//           <meshStandardMaterial color="#2f76c0" />
//         </mesh>
//         <mesh castShadow position={[0.13, 0.02, 0]}>
//           <boxGeometry args={[0.15, 0.45, 0.16]} />
//           <meshStandardMaterial color="#2f76c0" />
//         </mesh>
//         {/* Simple foot plate */}
//         <mesh castShadow position={[0, -0.2, 0]}>
//           <boxGeometry args={[0.36, 0.06, 0.2]} />
//           <meshStandardMaterial color="#1f4f7d" />
//         </mesh>
//       </group>

//       {/* Batter robot (red team) */}
//       <group ref={batterRef} position={[1.8, -0.4, 0]}>
//         {/* Torso */}
//         <mesh castShadow position={[0, 0.35, 0]}>
//           <boxGeometry args={[0.45, 0.7, 0.25]} />
//           <meshStandardMaterial color="#FF6B6B" />
//         </mesh>

//         {/* Chest panel */}
//         <mesh castShadow position={[0, 0.35, 0.135]}>
//           <boxGeometry args={[0.25, 0.25, 0.03]} />
//           <meshStandardMaterial color="#ffd2d2" />
//         </mesh>

//         {/* Head block */}
//         <mesh castShadow position={[0, 0.82, 0]}>
//           <boxGeometry args={[0.32, 0.24, 0.24]} />
//           <meshStandardMaterial color="#ffffff" />
//         </mesh>

//         {/* Visor */}
//         <mesh castShadow position={[0, 0.82, 0.13]}>
//           <boxGeometry args={[0.26, 0.1, 0.02]} />
//           <meshStandardMaterial color="#222222" />
//         </mesh>

//         {/* Antenna */}
//         <mesh castShadow position={[0, 0.97, 0]}>
//           <cylinderGeometry args={[0.015, 0.015, 0.12, 12]} />
//           <meshStandardMaterial color="#FF6B6B" />
//         </mesh>
//         <mesh castShadow position={[0, 1.05, 0]}>
//           <sphereGeometry args={[0.03, 16, 16]} />
//           <meshStandardMaterial color="#4DA3FF" />
//         </mesh>

//         {/* Left arm holding bat */}
//         <group position={[-0.28, 0.4, 0]}>
//           <mesh castShadow position={[0, 0.08, 0]}>
//             <boxGeometry args={[0.15, 0.28, 0.14]} />
//             <meshStandardMaterial color="#ff9b9b" />
//           </mesh>
//           {/* Bat */}
//           <mesh castShadow position={[-0.1, -0.18, 0]}>
//             <boxGeometry args={[0.08, 0.7, 0.14]} />
//             <meshStandardMaterial color="#d9b07a" />
//           </mesh>
//         </group>

//         {/* Right arm */}
//         <group position={[0.28, 0.35, 0]}>
//           <mesh castShadow position={[0, 0.06, 0]}>
//             <boxGeometry args={[0.15, 0.26, 0.14]} />
//             <meshStandardMaterial color="#ff9b9b" />
//           </mesh>
//           <mesh castShadow position={[0, -0.12, 0]}>
//             <boxGeometry args={[0.12, 0.22, 0.12]} />
//             <meshStandardMaterial color="#ffd2d2" />
//           </mesh>
//         </group>

//         {/* Legs / feet */}
//         <mesh castShadow position={[-0.13, 0.02, 0]}>
//           <boxGeometry args={[0.15, 0.45, 0.16]} />
//           <meshStandardMaterial color="#c74343" />
//         </mesh>
//         <mesh castShadow position={[0.13, 0.02, 0]}>
//           <boxGeometry args={[0.15, 0.45, 0.16]} />
//           <meshStandardMaterial color="#c74343" />
//         </mesh>
//         <mesh castShadow position={[0, -0.2, 0]}>
//           <boxGeometry args={[0.36, 0.06, 0.2]} />
//           <meshStandardMaterial color="#8f2a2a" />
//         </mesh>
//       </group>

//       {/* Ball */}
//       <mesh ref={ballRef} position={[0, -0.7, 0]} castShadow>
//         <sphereGeometry args={[0.08, 32, 32]} />
//         <meshStandardMaterial color="#d93535" />
//       </mesh>
//     </group>
//   );
// }

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

interface RobotWorkerProps {
  position: [number, number, number];
  primaryColor: string;
  accentColor: string;
  phase?: number;
  waving?: boolean;
}

function RobotWorker({
  position,
  primaryColor,
  accentColor,
  phase = 0,
  waving = false,
}: RobotWorkerProps) {
  const groupRef = useRef<Group | null>(null);
  const waveArmRef = useRef<Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // subtle breathing / idle motion
      const baseY = position[1];
      groupRef.current.position.y =
        baseY + 0.03 * Math.sin(t * 1.4 + phase);
    }

    if (waveArmRef.current) {
      if (waving) {
        // friendly wave
        waveArmRef.current.rotation.z =
          0.3 + 0.5 * Math.sin(t * 2.2);
      } else {
        // tiny idle sway
        waveArmRef.current.rotation.z = 0.1 * Math.sin(t * 1.3 + phase);
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Torso */}
      <mesh castShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[0.45, 0.7, 0.25]} />
        <meshStandardMaterial color={primaryColor} />
      </mesh>

      {/* Chest panel */}
      <mesh castShadow position={[0, 0.35, 0.135]}>
        <boxGeometry args={[0.26, 0.24, 0.03]} />
        <meshStandardMaterial color={accentColor} />
      </mesh>

      {/* Head block */}
      <mesh castShadow position={[0, 0.82, 0]}>
        <boxGeometry args={[0.32, 0.24, 0.24]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Visor */}
      <mesh castShadow position={[0, 0.82, 0.13]}>
        <boxGeometry args={[0.26, 0.1, 0.02]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Antenna */}
      <mesh castShadow position={[0, 0.97, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.12, 12]} />
        <meshStandardMaterial color={primaryColor} />
      </mesh>
      <mesh castShadow position={[0, 1.05, 0]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>

      {/* Left arm */}
      <group position={[-0.3, 0.4, 0]}>
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[0.15, 0.28, 0.14]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>
        <mesh castShadow position={[0, -0.12, 0]}>
          <boxGeometry args={[0.12, 0.22, 0.12]} />
          <meshStandardMaterial color="#e9edf7" />
        </mesh>
      </group>

      {/* Right arm (possible waving arm) */}
      <group ref={waveArmRef} position={[0.3, 0.4, 0]}>
        <mesh castShadow position={[0, 0.08, 0]}>
          <boxGeometry args={[0.15, 0.28, 0.14]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>
        <mesh castShadow position={[0, -0.12, 0]}>
          <boxGeometry args={[0.12, 0.22, 0.12]} />
          <meshStandardMaterial color="#e9edf7" />
        </mesh>
      </group>

      {/* Legs / feet */}
      <mesh castShadow position={[-0.13, 0.02, 0]}>
        <boxGeometry args={[0.15, 0.45, 0.16]} />
        <meshStandardMaterial color="#2f76c0" />
      </mesh>
      <mesh castShadow position={[0.13, 0.02, 0]}>
        <boxGeometry args={[0.15, 0.45, 0.16]} />
        <meshStandardMaterial color="#2f76c0" />
      </mesh>
      <mesh castShadow position={[0, -0.2, 0]}>
        <boxGeometry args={[0.38, 0.06, 0.22]} />
        <meshStandardMaterial color="#1f4f7d" />
      </mesh>
    </group>
  );
}

function HoloConsole({ position }: { position: [number, number, number] }) {
  const holoRef = useRef<Mesh | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!holoRef.current) return;

    const s = 1 + 0.25 * Math.sin(t * 3);
    holoRef.current.scale.set(s, s, s);
    holoRef.current.position.y =
      position[1] + 0.25 + 0.06 * Math.sin(t * 2.2);
  });

  return (
    <group position={position}>
      {/* Table */}
      <mesh castShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[0.9, 0.08, 0.5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Legs */}
      <mesh castShadow position={[-0.35, -0.3, 0.18]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#d2d6e4" />
      </mesh>
      <mesh castShadow position={[0.35, -0.3, 0.18]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#d2d6e4" />
      </mesh>
      <mesh castShadow position={[-0.35, -0.3, -0.18]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#d2d6e4" />
      </mesh>
      <mesh castShadow position={[0.35, -0.3, -0.18]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#d2d6e4" />
      </mesh>

      {/* Small vertical screen */}
      <mesh castShadow position={[0.1, 0.2, -0.16]}>
        <boxGeometry args={[0.4, 0.3, 0.05]} />
        <meshStandardMaterial color="#c7e2ff" />
      </mesh>

      {/* Holographic cube */}
      <mesh ref={holoRef} castShadow position={[0, 0.25, 0.15]}>
        <boxGeometry args={[0.18, 0.18, 0.18]} />
        <meshStandardMaterial color="#4DA3FF" />
      </mesh>
    </group>
  );
}

export function RobotScene() {
  return (
    <group>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.8, 0]}
        receiveShadow
      >
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial color="#f4f7ff" />
      </mesh>

      {/* Slight darker central lab pad */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.79, 0]}
        receiveShadow
      >
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color="#e4ecff" />
      </mesh>

      {/* Center robot: waving hello */}
      <RobotWorker
        position={[0, -0.4, 0]}
        primaryColor="#4DA3FF"
        accentColor="#dbe7ff"
        waving
        phase={0}
      />

      {/* Left robot: “working” / observing */}
      <RobotWorker
        position={[-1.6, -0.4, -0.4]}
        primaryColor="#FF6B6B"
        accentColor="#ffd2d2"
        phase={1}
        waving={false}
      />

      {/* Right robot: another helper, slight phase offset */}
      <RobotWorker
        position={[1.6, -0.4, -0.3]}
        primaryColor="#7fc3ff"
        accentColor="#e0f0ff"
        phase={2}
        waving={false}
      />

      {/* Console / smart work station near center robot */}
      <HoloConsole position={[0.2, -0.35, 0.9]} />
    </group>
  );
}

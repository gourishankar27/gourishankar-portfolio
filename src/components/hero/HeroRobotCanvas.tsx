"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { RobotScene } from "@/components/three/RobotScene";
import { useCanvasBackgroundVar } from "@/components/three/useCanvasTheme";

export function HeroRobotCanvas() {
  const background = useCanvasBackgroundVar("--surface-2", "#f7f9fe");
  return (
    <div className="h-full w-full rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--surface)] via-[color:var(--primary-soft)] to-[color:var(--danger-soft)] shadow-[0_18px_45px_var(--shadow-2)] overflow-hidden">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        dpr={[1, 2]}
        shadows
      >
        {/* Soft background color inside the canvas */}
        <color attach="background" args={[background]} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[-3, 4, -2]}
          intensity={0.4}
          color="#FF6B6B"
        />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[0, 0, 0]} />
            </mesh>
          }
        >
          <RobotScene />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.2}
            width={8}
            height={8}
            blur={2.8}
            far={4}
          />
        </Suspense>

        {/* Camera interaction */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
}

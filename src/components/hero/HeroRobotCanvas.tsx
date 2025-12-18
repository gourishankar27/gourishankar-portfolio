"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { RobotScene } from "@/components/three/RobotScene";

export function HeroRobotCanvas() {
  return (
    <div className="h-full w-full rounded-2xl border border-[#E4E6EB] bg-gradient-to-br from-[#FFFFFF] via-[#F4F9FF] to-[#FFE3E3]/80 shadow-[0_18px_45px_rgba(77,163,255,0.18)] overflow-hidden">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 45 }}
        dpr={[1, 2]}
        shadows
      >
        {/* Soft background color inside the canvas */}
        <color attach="background" args={["#f7f9fe"]} />

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

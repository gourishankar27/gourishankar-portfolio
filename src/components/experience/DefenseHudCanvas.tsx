"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RadarScene } from "@/components/three/RadarScene";

export function DefenseHudCanvas() {
  return (
    <div className="h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-2xl border border-[#E4E6EB] bg-gradient-to-br from-[#FFFFFF] via-[#F4F9FF] to-[#FFE3E3]/80 shadow-[0_18px_45px_rgba(77,163,255,0.18)] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={["#f7f9fe"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={0.7} />

        <Suspense fallback={null}>
          <RadarScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

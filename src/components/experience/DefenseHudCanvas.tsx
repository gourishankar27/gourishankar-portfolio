"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RadarScene } from "@/components/three/RadarScene";
import { useCanvasBackgroundVar } from "@/components/three/useCanvasTheme";

export function DefenseHudCanvas() {
  const background = useCanvasBackgroundVar("--surface-2", "#f7f9fe");

  return (
    <div className="h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--surface)] via-[color:var(--primary-soft)] to-[color:var(--danger-soft)] shadow-[0_18px_45px_var(--shadow-2)] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={[background]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={0.7} />

        <Suspense fallback={null}>
          <RadarScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

"use client";

import React from "react";

export function DefenseHudCanvas() {
  return (
    <div className="h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-2xl border border-[#E4E6EB] bg-gradient-to-br from-[#FFFFFF] via-[#F4F9FF] to-[#FFE3E3]/80 shadow-[0_18px_45px_rgba(77,163,255,0.18)] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-2">
          Defense HUD Visualization
        </p>
        <p className="text-sm text-[#3A3A3A]">
          Radar-style Three.js scene coming soon — abstracting tracking,
          trajectories, and sensor fusion.
        </p>
      </div>
    </div>
  );
}

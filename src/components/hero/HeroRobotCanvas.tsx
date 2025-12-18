"use client";

import React from "react";

export function HeroRobotCanvas() {
  return (
    <div className="h-full w-full rounded-2xl border border-[#E4E6EB] bg-gradient-to-br from-[#FFFFFF] via-[#F4F9FF] to-[#FFE3E3]/80 shadow-[0_18px_45px_rgba(77,163,255,0.18)] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-2">
          3D Robot Scene
        </p>
        <p className="text-sm text-[#3A3A3A]">
          Interactive autonomous robot visualization coming soon.
        </p>
      </div>
    </div>
  );
}

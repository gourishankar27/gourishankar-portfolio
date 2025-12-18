"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroRobotCanvas } from "./HeroRobotCanvas";

export function HeroSection() {
  return (
    <section className="pt-4 lg:pt-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        {/* Left side – intro, photo, CTA */}
        <div className="relative">
          {/* Top row: avatar + name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-14 w-14 rounded-full border-2 border-[#4DA3FF] shadow-[0_4px_14px_rgba(77,163,255,0.25)] overflow-hidden bg-white">
              {/* Replace /images/avatar.jpg with your actual file later */}
              <Image
                src="/images/avatar.jpg"
                alt="Gourishankar Bansode"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Gourishankar Bansode
              </h1>
              <p className="text-sm sm:text-base text-[#6B6B6B]">
                Robotics &amp; AI Engineer
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-4 max-w-xl text-sm sm:text-base text-[#3A3A3A]">
            I build autonomous systems at the intersection of perception,
            differentiable physics, and control — from vision‑guided
            manipulation to drone navigation and defense‑grade tracking.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-[#4DA3FF] hover:bg-[#3b83d1] transition-colors shadow-md"
            >
              View Projects
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-[#4DA3FF] bg-white border border-[#4DA3FF33] hover:border-[#4DA3FF] hover:bg-[#F4F9FF] transition-colors"
            >
              View Experience
            </Link>
          </div>

          {/* Key-focus tags */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-[#B7DAFF]/60 text-[#1F1F1F] px-3 py-1">
              Differentiable Physics
            </span>
            <span className="rounded-full bg-[#FFE3E3]/80 text-[#1F1F1F] px-3 py-1">
              Autonomous Systems
            </span>
            <span className="rounded-full bg-white border border-[#E4E6EB] text-[#1F1F1F] px-3 py-1">
              Vision Transformers
            </span>
            <span className="rounded-full bg-white border border-[#E4E6EB] text-[#1F1F1F] px-3 py-1">
              Robotics &amp; Control
            </span>
          </div>
        </div>

        {/* Right side – 3D / visual area */}
        <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
          <HeroRobotCanvas />
        </div>
      </div>
    </section>
  );
}

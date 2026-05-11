"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroRobotCanvas } from "./HeroRobotCanvas";

export function HeroSection() {
  return (
    <section className="pt-8 lg:pt-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] items-center">
        <div className="relative">
          <div className="mb-5 flex flex-col items-center sm:items-start">
            <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full border-2 border-[color:var(--primary)] bg-[color:var(--surface)] shadow-[0_6px_18px_var(--shadow-1)]">
              <Image
                src="/images/avatar.jpg"
                alt="Gourishankar Bansode"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <h1
              className="text-center text-2xl font-semibold tracking-tight sm:text-left sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gourishankar Bansode
            </h1>
            <p className="mt-1 text-center text-sm text-[color:var(--muted)] sm:text-left sm:text-base">
              Robotics &amp; AI Software Engineer · ASU Research Assistant
            </p>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-[color:var(--muted-2)]">
            I build reliable autonomy software across event-based space vision,
            spacecraft attitude estimation, differentiable-physics robotics,
            real-time computer vision, and production-grade backend/data systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-[color:var(--primary)] hover:opacity-90 transition-colors shadow-md"
            >
              View Projects
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-[color:var(--primary)] bg-[color:var(--surface)] border border-[color:var(--primary-border)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary-soft)] transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-[color:var(--text)] bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] text-[color:var(--text)] px-3 py-1">
              Event-Based Vision &amp; Space Autonomy
            </span>
            <span className="rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] text-[color:var(--text)] px-3 py-1">
              State Estimation &amp; Control
            </span>
            <span className="rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] text-[color:var(--text)] px-3 py-1">
              Differentiable Physics &amp; 3D Vision
            </span>
            <span className="rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] text-[color:var(--text)] px-3 py-1">
              Reliable Distributed Systems
            </span>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
          <HeroRobotCanvas />
        </div>
      </div>
    </section>
  );
}

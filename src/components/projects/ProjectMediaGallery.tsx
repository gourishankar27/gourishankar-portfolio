"use client";

import React from "react";
import type { ProjectMedia } from "@/types/project";

function Caption({ caption }: { caption?: string }) {
  if (!caption) return null;
  return <div className="mt-2 text-xs text-[color:var(--muted)]">{caption}</div>;
}

function MediaCard({
  media,
  onOpenImage,
}: {
  media: ProjectMedia;
  onOpenImage?: (src: string) => void;
}) {
  if (media.type === "image") {
    return (
      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
        <button
          type="button"
          onClick={() => onOpenImage?.(media.src)}
          className="block w-full text-left"
          aria-label={`Open image: ${media.alt ?? "Project media"}`}
        >
          <div className="overflow-hidden rounded-lg bg-[color:var(--surface-2)]">
            <div className="aspect-[16/9] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.src}
                alt={media.alt ?? "Project media"}
                className="h-full w-full object-cover cursor-zoom-in"
                loading="lazy"
              />
            </div>
          </div>
        </button>
        <Caption caption={media.caption} />
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
        <div className="overflow-hidden rounded-lg bg-[color:var(--surface-inverse)]">
          <div className="aspect-[16/9] w-full">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={media.poster}
            >
              <source src={media.src} />
            </video>
          </div>
        </div>
        <Caption caption={media.caption} />
      </div>
    );
  }

  // youtube
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
      <div className="overflow-hidden rounded-lg bg-[color:var(--surface-inverse)]">
        <div className="aspect-[16/9] w-full">
          <iframe
            src={media.src}
            title={media.alt ?? "YouTube video"}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <Caption caption={media.caption} />
    </div>
  );
}

function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: ProjectMedia[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const restoreFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [onClose, onPrev, onNext]);

  const img = images[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Media lightbox"
      className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
      onMouseDown={(e) => {
        // Close when clicking the overlay.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-5xl">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[color:var(--border)]">
            <div className="text-sm text-[color:var(--muted)]">
              {activeIndex + 1} / {images.length}
            </div>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={onPrev}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]"
                  >
                    Next →
                  </button>
                </>
              )}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-full bg-[color:var(--danger)] px-3 py-1.5 text-sm font-medium text-white hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>

          <div className="bg-[color:var(--surface-2)]">
            <div className="max-h-[75vh] w-full flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt ?? "Project image"}
                className="max-h-[70vh] w-auto max-w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]"
              />
            </div>
          </div>

          {(img.caption || img.alt) && (
            <div className="px-4 py-3">
              {img.alt && (
                <div className="text-sm font-semibold text-[color:var(--text)]">
                  {img.alt}
                </div>
              )}
              {img.caption && (
                <div className="mt-1 text-sm text-[color:var(--muted-2)]">
                  {img.caption}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-2 text-xs text-white/80 text-center">
          Tip: Use <strong>Esc</strong> to close and <strong>← / →</strong> to navigate.
        </div>
      </div>
    </div>
  );
}

export function ProjectMediaGallery({ media }: { media?: ProjectMedia[] }) {
  if (!media || media.length === 0) return null;

  const images = React.useMemo(
    () => media.filter((m) => m.type === "image"),
    [media]
  );

  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  function openImage(src: string) {
    const idx = images.findIndex((m) => m.src === src);
    if (idx >= 0) setActiveImageIndex(idx);
  }

  function close() {
    setActiveImageIndex(null);
  }

  function prev() {
    setActiveImageIndex((idx) => {
      if (idx === null) return null;
      return (idx - 1 + images.length) % images.length;
    });
  }

  function next() {
    setActiveImageIndex((idx) => {
      if (idx === null) return null;
      return (idx + 1) % images.length;
    });
  }

  return (
    <section aria-label="Project media">
      <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em] mb-3">
        Media
      </h2>

      <div className="grid gap-3 md:gap-4 md:grid-cols-2">
        {media.map((m, idx) => (
          <MediaCard
            key={`${m.type}:${m.src}:${idx}`}
            media={m}
            onOpenImage={m.type === "image" ? openImage : undefined}
          />
        ))}
      </div>

      {activeImageIndex !== null && images.length > 0 && (
        <Lightbox
          images={images}
          activeIndex={activeImageIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

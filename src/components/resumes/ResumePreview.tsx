"use client";

import { useSyncExternalStore } from "react";
import type { Resume } from "@/types/resume";

const query = "(min-width: 768px)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const desktopSnapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;

export function ResumePreview({ resume }: { resume: Resume }) {
  const showPreview = useSyncExternalStore(subscribe, desktopSnapshot, serverSnapshot);

  return (
    <div className="mt-4">
      <p className="text-xs text-[color:var(--muted-2)]">
        For easier reading or if the preview is unavailable, open the PDF in a new tab or download it using the links above.
      </p>
      {showPreview && (
        <div className="mt-3 h-[65vh] min-h-[420px] max-h-[800px] overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)]">
          <iframe key={resume.id} src={`${resume.pdfPath}#view=FitH`} title={`${resume.title} PDF preview`} loading="lazy" className="h-full w-full border-0" />
        </div>
      )}
    </div>
  );
}

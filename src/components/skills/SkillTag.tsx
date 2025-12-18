interface SkillTagProps {
  label: string;
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E4E6EB] bg-[#FDFDFE] px-2.5 py-1 text-[11px] text-[#4A4A4A]">
      {label}
    </span>
  );
}

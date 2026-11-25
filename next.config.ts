import type { NextConfig } from "next";
import { resumeSectionHref } from "./src/data/resumes";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/resume.pdf", destination: resumeSectionHref, permanent: true },
      { source: "/resume_oold.pdf", destination: resumeSectionHref, permanent: true },
    ];
  },
};

export default nextConfig;

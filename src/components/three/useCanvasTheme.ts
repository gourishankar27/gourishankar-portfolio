"use client";

import React from "react";

/**
 * Read a CSS custom property (variable) and keep it in sync when theme changes.
 * Useful for matching Three.js canvas backgrounds to the current site theme.
 */
export function useCanvasBackgroundVar(cssVarName: string, fallback: string) {
  const [color, setColor] = React.useState(fallback);

  React.useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      const value = getComputedStyle(root).getPropertyValue(cssVarName).trim();
      if (value) setColor(value);
    };

    read();

    const obs = new MutationObserver(read);
    obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => obs.disconnect();
  }, [cssVarName, fallback]);

  return color;
}

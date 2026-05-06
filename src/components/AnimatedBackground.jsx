import React from 'react';

// CSS-only animated background — zero JS overhead, GPU-composited via will-change: transform.
// Replaces the 3x Framer Motion blur orbs that were causing per-frame repaints.
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-primary">
      {/* Orb 1 — top left, cyan tint */}
      <div className="bg-orb bg-orb-1" />
      {/* Orb 2 — bottom right, purple tint */}
      <div className="bg-orb bg-orb-2" />
      {/* Orb 3 — center, subtle teal accent */}
      <div className="bg-orb bg-orb-3" />
      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-[length:50px_50px] opacity-[0.04]" />
    </div>
  );
};

export default AnimatedBackground;

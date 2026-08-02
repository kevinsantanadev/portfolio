"use client";

import dynamic from "next/dynamic";

const InteractiveTerminal = dynamic(
  () => import("./tech-terminal-3d").then((module) => module.TechTerminal3D),
  {
    ssr: false,
    loading: () => <span className="terminal-loading-screen" />,
  },
);

export function TechTerminalLoader({ label }: { label: string }) {
  return (
    <div className="terminal-3d" role="img" aria-label={label}>
      <InteractiveTerminal />
    </div>
  );
}

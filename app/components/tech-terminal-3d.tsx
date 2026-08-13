"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function TerminalModel({ reducedMotion }: { reducedMotion: boolean }) {
  const terminal = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!terminal.current || reducedMotion) return;

    const scrollProgress = Math.min(
      window.scrollY / Math.max(window.innerHeight, 1),
      1.4,
    );
    const targetX = -0.12 + state.pointer.y * 0.16 + scrollProgress * 0.06;
    const targetY = -0.3 + state.pointer.x * 0.34 + scrollProgress * 0.12;
    const easing = 1 - Math.exp(-delta * 14);

    terminal.current.rotation.x +=
      (targetX - terminal.current.rotation.x) * easing;
    terminal.current.rotation.y +=
      (targetY - terminal.current.rotation.y) * easing;
    terminal.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.85) * 0.06;
  });

  return (
    <group ref={terminal} rotation={[-0.12, -0.3, 0]} scale={0.9}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2.55, 1.8, 0.48]} />
        <meshStandardMaterial
          color="#151c33"
          metalness={0.62}
          roughness={0.28}
        />
      </mesh>

      <mesh position={[0, 0.52, 0.27]}>
        <boxGeometry args={[2.12, 1.35, 0.06]} />
        <meshStandardMaterial
          color="#07131f"
          emissive="#0d6f7d"
          emissiveIntensity={0.85}
        />
      </mesh>

      <mesh position={[-0.56, 0.78, 0.31]}>
        <boxGeometry args={[0.78, 0.065, 0.025]} />
        <meshBasicMaterial color="#64eaff" />
      </mesh>
      <mesh position={[-0.78, 0.52, 0.31]}>
        <boxGeometry args={[0.34, 0.065, 0.025]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[-0.42, 0.32, 0.31]}>
        <boxGeometry args={[1.06, 0.045, 0.025]} />
        <meshBasicMaterial color="#34d6e8" />
      </mesh>
      <mesh position={[0.49, 0.03, 0.31]}>
        <boxGeometry args={[0.58, 0.045, 0.025]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>

      <mesh position={[0, -0.53, -0.02]} castShadow>
        <boxGeometry args={[0.62, 0.34, 0.55]} />
        <meshStandardMaterial color="#202a46" metalness={0.5} roughness={0.32} />
      </mesh>
      <mesh position={[0, -0.77, 0.02]} castShadow>
        <boxGeometry args={[1.35, 0.16, 0.72]} />
        <meshStandardMaterial color="#12182b" metalness={0.55} roughness={0.3} />
      </mesh>

      <mesh position={[0, -1.1, 0.52]} rotation={[-0.09, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 0.18, 1]} />
        <meshStandardMaterial color="#18213a" metalness={0.42} roughness={0.34} />
      </mesh>

      {[-0.74, -0.25, 0.25, 0.74].map((x) => (
        <mesh key={x} position={[x, -1.01, 0.57]} rotation={[-0.09, 0, 0]}>
          <boxGeometry args={[0.32, 0.03, 0.42]} />
          <meshBasicMaterial color={x < 0 ? "#34d6e8" : "#8b5cf6"} />
        </mesh>
      ))}

      <mesh rotation={[1.08, 0.18, 0.35]}>
        <torusGeometry args={[2.15, 0.022, 10, 48]} />
        <meshBasicMaterial color="#34d6e8" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[0.35, 1.22, -0.55]}>
        <torusGeometry args={[2.32, 0.015, 10, 48]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function TechTerminal3D() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [supportsWebGL] = useState(() => {
    if (typeof document === "undefined") return false;

    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  if (!supportsWebGL) {
    return (
      <>
        <span className="terminal-3d-label" aria-hidden="true">
          3D · FULL STACK
        </span>
        <span className="terminal-3d-fallback" aria-hidden="true">
          <span className="terminal-fallback-screen" />
          <span className="terminal-fallback-stand" />
          <span className="terminal-fallback-keyboard" />
        </span>
      </>
    );
  }

  return (
    <>
      <span className="terminal-3d-label" aria-hidden="true">
        3D · FULL STACK
      </span>
      <Canvas
        aria-hidden="true"
        camera={{ position: [0, 0.2, 5.4], fov: 42 }}
        dpr={[1, 1.25]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.35} />
        <directionalLight
          castShadow
          color="#bdefff"
          intensity={2.2}
          position={[3, 4, 5]}
        />
        <pointLight color="#8b5cf6" intensity={18} position={[-3, -1, 3]} />
        <TerminalModel reducedMotion={reducedMotion} />
      </Canvas>
    </>
  );
}

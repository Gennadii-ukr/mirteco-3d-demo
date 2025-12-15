"use client";
/// <reference types="@react-three/fiber" />

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function RadiatorMock() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.35]} />
        <meshStandardMaterial roughness={0.25} metalness={0.6} />
      </mesh>

      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-1.05 + i * 0.23, 0, 0.22]}>
          <boxGeometry args={[0.16, 1.25, 0.12]} />
          <meshStandardMaterial roughness={0.3} metalness={0.55} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ height: 420, width: "100%", borderRadius: 14, overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0.6, 3.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 2]} intensity={1.3} />
        <RadiatorMock />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={2.6} maxDistance={4.3} />
      </Canvas>
    </div>
  );
}

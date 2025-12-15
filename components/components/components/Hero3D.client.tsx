"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 420,
        width: "100%",
        borderRadius: 14,
        background: "rgba(0,0,0,0.04)",
      }}
    />
  ),
});

export default function Hero3DClient() {
  return <Hero3D />;
}

"use client";

import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import FeatureBlocks from "../../components/FeatureBlocks";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

import en from "../../locales/en.json";
import es from "../../locales/es.json";

// Hero3D ТОЛЬКО ТАК
const Hero3D = dynamic(() => import("../../components/Hero3D"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 420,
        width: "100%",
        borderRadius: 14,
        background: "rgba(0,0,0,0.05)",
      }}
    />
  ),
});

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale === "es" ? "es" : "en";
  const t = locale === "es" ? es : en;

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main>
        <section className="section">
          <div className="container">
            <div
              className="grid cols-2"
              style={{ alignItems: "center", gap: 32 }}
            >
              <div>
                <span className="badge">{t.brandLine}</span>

                <h1
                  className="h1"
                  style={{ marginTop: 12, whiteSpace: "pre-line" }}
                >
                  {t.heroTitle}
                </h1>

                <p className="text-muted" style={{ marginTop: 12 }}>
                  {t.heroSubtitle}
                </p>
              </div>

              <Hero3D />
            </div>
          </div>
        </section>

        <FeatureBlocks t={t} />
        <ProductGrid t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

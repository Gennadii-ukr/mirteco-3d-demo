"use client";

import dynamic from "next/dynamic";

import Navbar from "../../components/Navbar";
import FeatureBlocks from "../../components/FeatureBlocks";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

import en from "../../locales/en.json";
import es from "../../locales/es.json";

// Важно: объявляем Hero3D РОВНО ОДИН РАЗ
const Hero3D = dynamic(() => import("../../components/Hero3D"), {
  ssr: false,
  loading: () => (
    <div style={{ height: 420, width: "100%", borderRadius: 14, background: "rgba(0,0,0,0.04)" }} />
  ),
});

export default function Page({ params }: any) {
  const locale = params?.locale === "es" ? "es" : "en";
  const t = locale === "es" ? (es as any) : (en as any);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main>
        {/* твой Hero-блок */}
        <section className="section">
          <div className="container">
            <div className="grid cols-2" style={{ alignItems: "center" }}>
              <div>
                <span className="badge">{t.brandLine}</span>
                <h1 className="h1" style={{ marginTop: 12, whiteSpace: "pre-line" }}>
                  {t.heroTitle}
                </h1>
                <p className="p">{t.heroSubtitle}</p>

                <div className="row" style={{ marginTop: 18 }}>
                  <a className="btn primary" href="#catalog">
                    {t.viewModels}
                  </a>
                  <a className="btn" href="#calc">
                    {t.chooseRoom}
                  </a>
                  <a className="btn" href="#trust">
                    {t.certs}
                  </a>
                </div>

                <div className="row" style={{ marginTop: 16 }}>
                  {(t.heroBadges || []).map((b: string) => (
                    <span className="badge" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Hero3D />
              </div>
            </div>
          </div>
        </section>

        <FeatureBlocks t={t} />
        <ProductGrid t={t} locale={locale} />
      </main>

      <Footer t={t} />
    </>
  );
}

import dynamic from "next/dynamic";

import Navbar from "../../components/Navbar";
import FeatureBlocks from "../../components/FeatureBlocks";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

import en from "../../locales/en.json";
import es from "../../locales/es.json";

const Hero3D = dynamic(() => import("../../components/Hero3D"), { ssr: false });

export default function Page({ params }: any) {
  const locale = params?.locale === "es" ? "es" : "en";
  const t = locale === "es" ? es : en;

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main>
        <section className="section">
          <div className="container">
            <div className="grid cols-2" style={{ alignItems: "center" }}>
              <div>
                <span className="badge">{t.brandLine}</span>
                <h1
                  className="h1"
                  style={{ marginTop: 12, whiteSpace: "pre-line" }}
                >
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
                  {t.heroBadges.map((b: string) => (
                    <span className="badge" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 12 }}>
                <Hero3D />
                <div className="small" style={{ marginTop: 10 }}>
                  {t.heroHint}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="soft" />

        <section className="section" id="trust">
          <div className="container">
            <h2 className="h2">{t.whyTitle}</h2>
            <FeatureBlocks t={t} />
          </div>
        </section>

        <hr className="soft" />

        <section className="section" id="catalog">
          <div className="container">
            <h2 className="h2">{t.catalogTitle}</h2>
            <p className="p">{t.catalogNote}</p>
            <div style={{ marginTop: 18 }}>
              <ProductGrid t={t} />
            </div>
          </div>
        </section>

        <hr className="soft" />

        <section className="section" id="calc">
          <div className="container">
            <div className="card">
              <h2 className="h2">{t.calcTitle}</h2>
              <p className="p">{t.calcText}</p>
              <div className="row" style={{ marginTop: 16 }}>
                <button className="btn primary">{t.calcCTA}</button>
                <span className="small">{t.calcHint}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}



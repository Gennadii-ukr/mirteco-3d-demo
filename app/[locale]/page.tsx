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

                <h1 className="h1" style={{ marginTop: 12, whiteSpace: "pre-line" }}>
                  {t.heroTitle}
                </h1>

                <p className="p" style={{ marginTop: 12 }}>
                  {t.heroSubtitle}
                </p>

                <div className="row" style={{ marginTop: 18 }}>
                  <a className="btn primary" href="#catalog">
                    {t.viewModels}
                  </a>
                  <a className="btn" href="#chooseRoom">
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

              <div className="card" style={{ padding: 12 }}>
                <Hero3D />
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="section">
          <div className="container">
            <FeatureBlocks t={t} />
          </div>
        </section>

        <section id="catalog" className="section">
          <div className="container">
            <ProductGrid locale={locale} t={t} />
          </div>
        </section>

        <section id="chooseRoom" className="section">
          <div className="container">
            <div className="card" style={{ padding: 16 }}>
              <h2 className="h2">{t.roomTitle}</h2>
              <p className="p" style={{ marginTop: 8 }}>
                {t.roomText}
              </p>
              <div className="row" style={{ marginTop: 12 }}>
                <a className="btn" href="/contact-us">
                  {t.contactUs}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}



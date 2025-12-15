import Navbar from "../../components/Navbar";
import Hero3DClient from "../../components/Hero3D.client";
import FeatureBlocks from "../../components/FeatureBlocks";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

import en from "../../locales/en.json";
import es from "../../locales/es.json";

export default function Page({ params }: { params: { locale: string } }) {
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
              </div>

              <div>
                <Hero3DClient />
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

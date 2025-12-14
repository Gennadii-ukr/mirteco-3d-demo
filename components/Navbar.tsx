import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n";

export default function Navbar({ locale, t }: { locale: Locale; t: any }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(12px)", background: "rgba(7,10,18,0.55)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0" }}>
        <div className="row">
          <div className="badge" style={{ fontWeight: 700, letterSpacing: 0.5 }}>MIRTECO</div>
          <span className="small">{t.navTagline}</span>
        </div>

        <nav className="row">
          <a className="btn" href="#trust">{t.navWhy}</a>
          <a className="btn" href="#catalog">{t.navCatalog}</a>
          <a className="btn primary" href="#calc">{t.navSelect}</a>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}

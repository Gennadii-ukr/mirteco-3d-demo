"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|es)/, "");

  return (
    <div className="row">
      <Link className={`btn ${locale === "en" ? "primary" : ""}`} href={`/en${rest}`}>EN</Link>
      <Link className={`btn ${locale === "es" ? "primary" : ""}`} href={`/es${rest}`}>ES</Link>
    </div>
  );
}

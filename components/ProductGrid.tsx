"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";

export default function ProductGrid({ t }: { t: any }) {
  const [minPower, setMinPower] = useState(0);

  const filtered = useMemo(
    () => products.filter((p) => p.powerW >= minPower),
    [minPower]
  );

  return (
    <>
      <div className="row" style={{ marginBottom: 14 }}>
        <span className="badge">{t.filterLabel}</span>
        <button className="btn" onClick={() => setMinPower(0)}>{t.filterAll}</button>
        <button className="btn" onClick={() => setMinPower(900)}>{t.filter900}</button>
        <button className="btn" onClick={() => setMinPower(1300)}>{t.filter1300}</button>
      </div>

      <div className="grid cols-3">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="badge">{p.powerW} W</div>
              <div className="badge">{p.sections}</div>
            </div>

            <div style={{ marginTop: 12, fontWeight: 700, fontSize: 18 }}>
              {p.name}
            </div>

            <div className="small" style={{ marginTop: 6 }}>
              {p.price}
            </div>

            <div className="row" style={{ marginTop: 14 }}>
              <button className="btn primary" onClick={() => alert(`${t.requestPrice}: ${p.name}`)}>
                {t.requestPrice}
              </button>
              <button className="btn" onClick={() => alert(t.details)}>
                {t.details}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

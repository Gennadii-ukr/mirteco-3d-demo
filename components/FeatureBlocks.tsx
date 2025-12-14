export default function FeatureBlocks({ t }: { t: any }) {
  return (
    <div className="grid cols-2" style={{ marginTop: 16 }}>
      {t.features.map((f: any) => (
        <div className="card" key={f.title}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{f.title}</div>
          <p className="p">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

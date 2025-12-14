export default function Footer() {
  return (
    <footer style={{ padding: "28px 0 40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 700 }}>MIRTECO</div>
            <div className="small">© {new Date().getFullYear()} • Demo</div>
          </div>
          <div className="row">
            <span className="small">Impressum / Datenschutz can be added for EU publishing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

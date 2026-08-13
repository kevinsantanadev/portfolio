import { ImageResponse } from "next/og";

export const alt = "Kevin Santana — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#070914", color: "#f7f8ff", padding: "72px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", position: "absolute", width: "520px", height: "520px", border: "1px solid rgba(86,226,255,.35)", borderRadius: "50%", right: "-90px", top: "-150px" }} />
      <div style={{ display: "flex", position: "absolute", width: "360px", height: "360px", border: "1px solid rgba(159,112,255,.4)", borderRadius: "50%", right: "110px", bottom: "-190px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: "24px", letterSpacing: "7px", fontWeight: 700 }}>
          KEVIN SANTANA <span style={{ display: "flex", width: "10px", height: "10px", borderRadius: "50%", background: "#56e2ff", marginLeft: "18px" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <span style={{ fontSize: "20px", letterSpacing: "5px", color: "#8eeaff", marginBottom: "20px" }}>PORTFÓLIO PROFISSIONAL</span>
          <span style={{ fontSize: "76px", lineHeight: 1.03, fontWeight: 700, letterSpacing: "-3px" }}>Desenvolvedor<br />Full Stack</span>
          <span style={{ fontSize: "25px", color: "#b7bdd4", marginTop: "26px" }}>Produtos digitais, back-end, dados e experiências web acessíveis.</span>
        </div>
        <div style={{ display: "flex", gap: "14px" }}>
          {["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "SUPABASE"].map((item) => <span key={item} style={{ display: "flex", padding: "10px 16px", border: "1px solid rgba(255,255,255,.16)", borderRadius: "999px", fontSize: "14px", letterSpacing: "2px", color: "#dce0f0" }}>{item}</span>)}
        </div>
      </div>
    </div>,
    size,
  );
}

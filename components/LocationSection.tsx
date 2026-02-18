"use client";

export default function LocationSection() {
    return (
        <section
            id="location"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "580px",
                background: "#0D0D0D"
            }}
            className="location-grid"
        >
            <style>{`
        @media (max-width: 768px) {
          .location-grid { 
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .map-panel { height: 400px !important; }
          .info-panel { padding: 48px 32px !important; }
        }
      `}</style>

            {/* LEFT PANEL */}
            <div
                className="info-panel"
                style={{
                    padding: "72px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box"
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#8B6914", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 700 }}>
                        THE DOMAIN
                    </p>
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "48px", color: "#F5EDD6", fontWeight: 400, margin: 0, textTransform: "uppercase" }}>
                        FLAMES n SPIRITS
                    </h2>
                    <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "24px 0" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ fontFamily: "var(--font-dm)", fontSize: "14px", color: "rgba(245,237,214,0.65)", lineHeight: 1.8, margin: 0 }}>
                            Plot No. 137, Phase-II, Sainikpuri
                        </p>
                        <p style={{ fontFamily: "var(--font-dm)", fontSize: "14px", color: "rgba(245,237,214,0.65)", lineHeight: 1.8, margin: 0 }}>
                            Secunderabad, Hyderabad, Telangana 500094
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                        <div style={{ border: "1px solid rgba(201,168,76,0.35)", padding: "8px 16px", fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                            LUNCH 12–3PM
                        </div>
                        <div style={{ border: "1px solid rgba(201,168,76,0.35)", padding: "8px 16px", fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                            DINNER 7–11:30PM
                        </div>
                    </div>

                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "14px", color: "#C9A84C", marginTop: "16px", fontWeight: 500 }}>
                        +91 97003 33116
                    </p>
                </div>

                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Flames+n+Spirits+Sainikpuri+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        height: "52px",
                        background: "#C9A84C",
                        color: "#0D0D0D",
                        fontFamily: "var(--font-dm)",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        transition: "background 0.25s ease",
                        marginTop: "32px"
                    }}
                    className="directions-btn"
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F5EDD6")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
                >
                    GET DIRECTIONS →
                </a>
            </div>

            {/* RIGHT PANEL (MAP) */}
            <div
                className="map-panel"
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.343118239089!2d78.5447781759495!3d17.4913256037803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9be0334860b9%3A0xe543501a50b86a8!2sFlames%20N%20Spirits!5e0!3m2!1sen!2sin!4v1700300000000!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x1a1a1a"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)"
                    }}
                    allowFullScreen
                    loading="lazy"
                    title="Flames n Spirits Location"
                ></iframe>
            </div>
        </section>
    );
}

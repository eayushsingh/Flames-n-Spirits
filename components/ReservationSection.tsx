"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReservationSection() {
    const perks = [
        "Priority seating in crimson booths",
        "Perfect for intimate family gatherings",
        "Vibrant non-alcoholic mixology",
        "Sainikpuri's premier dark luxury ambiance",
        "Groups up to 8 · larger via concierge",
    ];

    return (
        <section
            id="reserve"
            style={{
                background: "linear-gradient(135deg, #0D0D0D 0%, #1A0A0A 100%)",
                padding: "120px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}
            className="reserve-grid"
        >
            <style>{`
        @media (max-width: 768px) {
          .reserve-grid { grid-template-columns: 1fr !important; }
          .reserve-left { padding: 80px 32px !important; }
          .reserve-right { padding: 48px 32px !important; }
        }
        input::placeholder { color: rgba(245, 237, 214, 0.3) !important; }
      `}</style>

            {/* LEFT PANEL */}
            <div
                className="reserve-left"
                style={{ padding: "80px", position: "relative" }}
            >
                <p style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
                    PRIVATE BOOKING
                </p>
                <h2 style={{ margin: "0 0 40px 0" }}>
                    <span style={{ fontFamily: "var(--font-playfair)", fontSize: "56px", color: "#F5EDD6", fontWeight: 400, display: "block" }}>Command</span>
                    <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "56px", color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>Your Table</span>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "64px" }}>
                    {perks.map((perk, i) => (
                        <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                            <span style={{ color: "#C9A84C", fontWeight: 700 }}>—</span>
                            <span style={{ fontFamily: "var(--font-dm)", fontSize: "14px", color: "rgba(245,237,214,0.5)", letterSpacing: "0.02em" }}>{perk}</span>
                        </div>
                    ))}
                </div>

                {/* Small interior photo */}
                <div style={{ position: "relative", width: "100%", height: "200px", border: "1px solid rgba(201,168,76,0.15)", overflow: "hidden" }}>
                    <Image
                        src="/images/interior.webp"
                        alt="Interior"
                        fill
                        style={{ objectFit: "cover", opacity: 0.6 }}
                    />
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div
                className="reserve-right"
                style={{ background: "#111111", padding: "56px", display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
                <form style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={{
                                border: "none",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                                background: "transparent",
                                color: "#F5EDD6",
                                padding: "16px 0",
                                fontFamily: "var(--font-dm)",
                                fontSize: "14px",
                                outline: "none",
                                width: "100%"
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        <input
                            type="date"
                            style={{
                                flex: "1",
                                minWidth: "150px",
                                border: "none",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                                background: "transparent",
                                color: "#F5EDD6",
                                padding: "16px 0",
                                fontFamily: "var(--font-dm)",
                                fontSize: "14px",
                                outline: "none"
                            }}
                        />
                        <select
                            style={{
                                flex: "1",
                                minWidth: "150px",
                                border: "none",
                                borderBottom: "1px solid rgba(201,168,76,0.2)",
                                background: "transparent",
                                color: "#F5EDD6",
                                padding: "16px 0",
                                fontFamily: "var(--font-dm)",
                                fontSize: "14px",
                                outline: "none"
                            }}
                        >
                            {[...Array(20)].map((_, i) => (
                                <option key={i} value={i + 1} style={{ background: "#0D0D0D" }}>{i + 1} Guests</option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="tel"
                        placeholder="Phone Number (+91)"
                        style={{
                            border: "none",
                            borderBottom: "1px solid rgba(201,168,76,0.2)",
                            background: "transparent",
                            color: "#F5EDD6",
                            padding: "16px 0",
                            fontFamily: "var(--font-dm)",
                            fontSize: "14px",
                            outline: "none",
                            width: "100%"
                        }}
                    />

                    <textarea
                        placeholder="Special Requests (Optional)"
                        rows={3}
                        style={{
                            border: "none",
                            borderBottom: "1px solid rgba(201,168,76,0.2)",
                            background: "transparent",
                            color: "#F5EDD6",
                            padding: "16px 0",
                            fontFamily: "var(--font-dm)",
                            fontSize: "14px",
                            outline: "none",
                            width: "100%",
                            resize: "none"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            height: "56px",
                            background: "#C9A84C",
                            color: "#0D0D0D",
                            fontFamily: "var(--font-dm)",
                            fontSize: "11px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            border: "none",
                            cursor: "pointer",
                            transition: "background 0.25s ease",
                            marginTop: "12px"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#F5EDD6")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
                    >
                        CONFIRM RESERVATION →
                    </button>
                </form>

                <p style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "rgba(245,237,214,0.35)", textAlign: "center", marginTop: "32px", letterSpacing: "0.05em" }}>
                    For groups 8+ contact us directly · +91 97003 33116
                </p>
            </div>
        </section>
    );
}

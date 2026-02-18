"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AmbianceSection() {
    const images = [
        { src: "/images/interior.webp", label: "Crimson Booths" },
        { src: "/images/entrance.jpg", label: "The Atmosphere" },
        { src: "/images/food-chilli.webp", label: "Golden Details" },
    ];

    return (
        <section
            id="ambiance"
            style={{
                background: "#111111",
                padding: "120px 0",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }} className="container-padding">

                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "32px" }}>
                    <div>
                        <p style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
                            STEP INSIDE
                        </p>
                        <h2 style={{ margin: 0 }}>
                            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "52px", color: "#F5EDD6", fontWeight: 600 }}>The </span>
                            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "52px", color: "#C9A84C", fontStyle: "italic", fontWeight: 400 }}>Sanctuary</span>
                        </h2>
                    </div>
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "15px", color: "rgba(245,237,214,0.5)", lineHeight: 1.6, maxWidth: "420px", margin: 0 }}>
                        Immerse yourself in a narrative of light and shadow. Crimson velvet, black marble, and golden glows converge to create Hyderabad&apos;s most intimate dining destination.
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div
                    id="gallery"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.3fr 0.9fr 1fr",
                        height: "480px",
                        gap: "12px",
                        marginBottom: "80px"
                    }}
                    className="asymmetric-grid"
                >
                    {images.map((img, i) => (
                        <div
                            key={i}
                            style={{ position: "relative", overflow: "hidden", height: "100%" }}
                            className="grid-cell"
                        >
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.6 }}
                                style={{ width: "100%", height: "100%", position: "relative" }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.label}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    onError={(e) => { (e.currentTarget as any).style.display = 'none' }}
                                />
                                {/* Overlay Label */}
                                <div style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "40px 24px 20px 24px",
                                    background: "linear-gradient(to top, rgba(13,13,13,0.8), transparent)",
                                    zIndex: 2
                                }}>
                                    <span style={{ fontFamily: "var(--font-playfair)", fontSize: "18px", color: "#F5EDD6", letterSpacing: "0.05em" }}>
                                        {img.label}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Crimson Marquee Ticker */}
            <div style={{ background: "#8B1A1A", padding: "14px 0", overflow: "hidden", display: "flex", whiteSpace: "nowrap" }}>
                <div className="animate-marquee" style={{ display: "flex", gap: "60px", paddingRight: "60px" }}>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} style={{ display: "flex", gap: "60px" }}>
                            {["DARK AMBIANCE", "GOLD SERVICE", "FAMILY WELCOME", "NON-ALCOHOLIC", "SAINIKPURI", "SINCE 2023"].map((text, idx) => (
                                <span key={idx} style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#F5EDD6", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}>
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .container-padding { padding: 0 24px !important; }
          .asymmetric-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .grid-cell { height: 300px !important; }
        }
      `}</style>
        </section>
    );
}

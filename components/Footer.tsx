"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Globe, Facebook } from "lucide-react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | string>("");

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer
            style={{
                background: "#080808",
                borderTop: "1px solid rgba(201,168,76,0.1)",
                padding: "64px 80px 32px 80px",
                boxSizing: "border-box"
            }}
            className="footer-container"
        >
            <style>{`
        @media (max-width: 768px) {
          .footer-container { padding: 48px 32px 32px 32px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-bottom { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
        }
        .footer-link:hover { color: #C9A84C !important; }
      `}</style>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "32px",
                    maxWidth: "1280px",
                    margin: "0 auto",
                    marginBottom: "64px"
                }}
                className="footer-grid"
            >
                {/* COLUMN 1: BRAND */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Image
                            src="/images/logo.svg"
                            alt="Flames n Spirits Logo"
                            width={28}
                            height={28}
                            style={{ objectFit: "contain" }}
                        />
                        <span style={{ fontFamily: "var(--font-playfair)", fontSize: "16px", color: "#F5EDD6", fontWeight: 600, letterSpacing: "0.05em" }}>
                            FLAMES n SPIRITS
                        </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "13px", color: "rgba(245,237,214,0.5)", lineHeight: 1.6, maxWidth: "240px" }}>
                        The Perfect Family Café, Sainikpuri. A sanctuary of dark luxury and culinary artistry.
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {[
                            { Icon: Instagram, href: "#" },
                            { Icon: Globe, href: "#" },
                            { Icon: Facebook, href: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                style={{ color: "rgba(245,237,214,0.4)", transition: "color 0.3s ease" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,237,214,0.4)")}
                            >
                                <social.Icon size={20} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2: NAVIGATION */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h4 style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px", fontWeight: 700 }}>
                        NAVIGATION
                    </h4>
                    {[
                        { name: "REPERTOIRE", href: "/menu" },
                        { name: "AMBIANCE", href: "/#ambiance" },
                        { name: "INSIDE", href: "/#gallery" },
                        { name: "RESERVE", href: "/#reserve" }
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="footer-link"
                            style={{
                                fontFamily: "var(--font-dm)",
                                fontSize: "11px",
                                color: "rgba(245,237,214,0.6)",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                height: "36px",
                                display: "flex",
                                alignItems: "center",
                                transition: "color 0.3s ease"
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* COLUMN 3: CONTACT */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h4 style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px", fontWeight: 700 }}>
                        RESERVE TONIGHT
                    </h4>
                    <p style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", color: "#F5EDD6", margin: 0 }}>
                        Plot No. 137, Phase-II
                    </p>
                    <a
                        href="tel:+919700333116"
                        style={{
                            fontFamily: "var(--font-dm)",
                            fontSize: "18px",
                            color: "#C9A84C",
                            textDecoration: "none",
                            fontWeight: 600,
                            marginTop: "8px"
                        }}
                    >
                        +91 97003 33116
                    </a>
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "13px", color: "rgba(245,237,214,0.4)", marginTop: "12px" }}>
                        hello@flamesnspirits.com
                    </p>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div
                style={{
                    borderTop: "1px solid rgba(201,168,76,0.08)",
                    paddingTop: "24px",
                    marginTop: "48px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                className="footer-bottom"
            >
                <span style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "rgba(245,237,214,0.3)" }}>
                    © {currentYear} Flames n Spirits. All rights reserved.
                </span>
                <span style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "rgba(245,237,214,0.3)", letterSpacing: "0.05em" }}>
                    Crafted in Sainikpuri, Hyderabad
                </span>
            </div>
        </footer>
    );
}

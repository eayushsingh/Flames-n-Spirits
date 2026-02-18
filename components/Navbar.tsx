"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "REPERTOIRE", href: "/menu", external: true },
        { name: "AMBIANCE", href: "/#ambiance", external: false },
        { name: "INSIDE", href: "/#gallery", external: false },
        { name: "CONTACT", href: "/#location", external: false },
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "68px",
                background: "rgba(13, 13, 13, 0.94)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(201, 168, 76, 0.12)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                padding: "0 32px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* LOGO */}
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
                    <Image
                        src="/images/logo.svg"
                        alt="Flames n Spirits"
                        width={52}
                        height={52}
                        style={{ objectFit: "contain" }}
                    />
                </Link>

                {/* DESKTOP NAV */}
                <div style={{ display: "none", alignItems: "center", gap: "40px" }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-dm)",
                                fontSize: "11px",
                                color: "#F5EDD6",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                letterSpacing: "0.18em",
                                fontWeight: 500,
                                transition: "color 0.2s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#F5EDD6")}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/#reserve"
                        style={{
                            border: "1px solid #C9A84C",
                            color: "#C9A84C",
                            padding: "10px 24px",
                            fontFamily: "var(--font-dm)",
                            fontSize: "11px",
                            textDecoration: "none",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 700,
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#C9A84C";
                            e.currentTarget.style.color = "#0D0D0D";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#C9A84C";
                        }}
                    >
                        RESERVE
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(true)}
                    style={{ background: "none", border: "none", color: "#C9A84C", cursor: "pointer" }}
                    className="mobile-toggle"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "#0D0D0D",
                            zIndex: 1100,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "40px"
                        }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ position: "absolute", top: "32px", right: "32px", background: "none", border: "none", color: "#C9A84C", cursor: "pointer" }}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "32px",
                                    color: "#F5EDD6",
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em"
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#reserve"
                            onClick={() => setIsOpen(false)}
                            style={{
                                border: "1px solid #C9A84C",
                                color: "#C9A84C",
                                padding: "16px 48px",
                                fontFamily: "var(--font-dm)",
                                fontSize: "14px",
                                textDecoration: "none",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                marginTop: "20px"
                            }}
                        >
                            RESERVE NOW
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
}

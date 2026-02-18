"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation variants for staggered reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            }
        }
    };

    return (
        <motion.section
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
                height: "100vh",
                background: "#0D0D0D",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                willChange: "opacity"
            }}
        >
            <style>{`
        @media (max-width: 768px) {
          .floating-photo { display: none !important; }
          .center-card { 
            width: 90vw !important; 
            padding: 40px 28px !important; 
            border-radius: 16px !important;
          }
          .restaurant-name { font-size: 34px !important; }
          .tagline { font-size: 19px !important; }
          .cta-row { flex-direction: column !important; gap: 12px !important; }
          .cta-btn { width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>

            {/* BACKGROUND DECORATION: Radial Glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            {/* LEFT FLOATING PHOTO */}
            <motion.div
                initial={{ opacity: 0, x: -40, y: "-50%" }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: ["-52%", "-48%", "-52%"]
                }}
                transition={{
                    opacity: { duration: 1.2, delay: 0.8 },
                    x: { duration: 1.2, delay: 0.8 },
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
                className="floating-photo"
                style={{
                    position: "absolute",
                    left: "5%",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-4deg)",
                    width: "220px",
                    height: "300px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 32px 64px rgba(0,0,0,0.6)",
                    zIndex: 5,
                    willChange: "transform"
                }}
            >
                <Image
                    src="/images/interior.webp"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    alt="Luxury Interior"
                    onError={(e) => { (e.currentTarget as any).style.display = 'none'; }}
                />
            </motion.div>

            {/* CENTER CARD */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="center-card"
                style={{
                    width: "520px",
                    maxWidth: "90vw",
                    background: "rgba(26,26,26,0.85)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "20px",
                    padding: "56px 48px",
                    backdropFilter: "blur(20px)",
                    textAlign: "center",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                    zIndex: 10,
                    boxSizing: "border-box",
                    willChange: "transform"
                }}
            >
                {/* Floating motion wrapper for the card body */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/images/logo.svg"
                            alt="Flames n Spirits"
                            width={110}
                            height={110}
                            style={{ objectFit: "contain", margin: "0 auto" }}
                        />
                    </motion.div>

                    {/* Thin gold rule */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            width: "48px",
                            height: "1px",
                            background: "#C9A84C",
                            margin: "16px auto",
                        }}
                    />

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="tagline"
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "22px",
                            color: "rgba(245,237,214,0.7)",
                            fontStyle: "italic",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Where Darkness Tastes Golden.
                    </motion.p>

                    {/* Sub-description */}
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontFamily: "var(--font-dm)",
                            fontSize: "13px",
                            color: "rgba(245,237,214,0.4)",
                            margin: "0 0 36px 0",
                            lineHeight: 1.6,
                        }}
                    >
                        A dark luxury sanctuary in the heart of Sainikpuri.
                    </motion.p>

                    {/* CTA Options */}
                    <motion.div
                        variants={itemVariants}
                        className="cta-row"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <Link
                                href="/menu"
                                className="cta-btn"
                                style={{
                                    display: "block",
                                    background: "#C9A84C",
                                    color: "#0D0D0D",
                                    padding: "12px 28px",
                                    borderRadius: "6px",
                                    fontFamily: "var(--font-dm)",
                                    fontWeight: 600,
                                    fontSize: "11px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    textDecoration: "none",
                                    transition: "background 0.25s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "#F5EDD6")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
                            >
                                OUR MENU
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <a
                                href="#reserve"
                                className="cta-btn"
                                style={{
                                    display: "block",
                                    background: "transparent",
                                    border: "1px solid rgba(201,168,76,0.4)",
                                    color: "#F5EDD6",
                                    padding: "12px 28px",
                                    borderRadius: "6px",
                                    fontFamily: "var(--font-dm)",
                                    fontWeight: 600,
                                    fontSize: "11px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    textDecoration: "none",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#C9A84C";
                                    e.currentTarget.style.color = "#C9A84C";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                                    e.currentTarget.style.color = "#F5EDD6";
                                }}
                            >
                                RESERVE A TABLE
                            </a>
                        </motion.div>

                        <a
                            href="#ambiance"
                            style={{
                                fontFamily: "var(--font-dm)",
                                fontSize: "12px",
                                color: "rgba(245,237,214,0.45)",
                                textDecoration: "none",
                                transition: "color 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#C9A84C";
                                e.currentTarget.style.textDecoration = "underline";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(245,237,214,0.45)";
                                e.currentTarget.style.textDecoration = "none";
                            }}
                        >
                            Our Story
                        </a>
                    </motion.div>

                    {/* Rating Row */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            borderTop: "1px solid rgba(201,168,76,0.1)",
                            paddingTop: "20px",
                            marginTop: "28px",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "var(--font-dm)",
                                fontSize: "11px",
                                color: "rgba(245,237,214,0.35)",
                                margin: 0,
                            }}
                        >
                            <span style={{ color: "#C9A84C", marginRight: "6px" }}>★★★★★</span>
                            4.9 · 2,000+ guests · Sainikpuri, Hyderabad
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* RIGHT FLOATING PHOTO STACK */}
            <motion.div
                initial={{ opacity: 0, x: 40, y: "-50%" }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: ["-48%", "-52%", "-48%"]
                }}
                transition={{
                    opacity: { duration: 1.2, delay: 1 },
                    x: { duration: 1.2, delay: 1 },
                    y: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                }}
                className="floating-photo"
                style={{
                    position: "absolute",
                    right: "5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    zIndex: 5,
                    willChange: "transform"
                }}
            >
                {/* Photo 1 (top) */}
                <motion.div
                    animate={{ rotate: [3, 4, 3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
                        transform: "rotate(3deg)",
                        position: "relative",
                    }}
                >
                    <Image
                        src="/images/food-chilli.webp"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                        alt="Signature Dish"
                        onError={(e) => { (e.currentTarget as any).style.display = 'none'; }}
                    />
                </motion.div>

                {/* Photo 2 (bottom) */}
                <motion.div
                    animate={{ rotate: [-2, -3, -2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "200px",
                        height: "160px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
                        transform: "rotate(-2deg)",
                        position: "relative",
                        background: "#1A1A1A",
                    }}
                >
                    <Image
                        src="/images/entrance.jpg"
                        fill
                        style={{ objectFit: "cover" }}
                        alt="Venue Entrance"
                        onError={(e) => { (e.currentTarget as any).style.display = 'none'; }}
                    />
                </motion.div>
            </motion.div>

            {/* NON-ALCOHOLIC BADGE */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: "absolute",
                    bottom: "28px",
                    right: "28px",
                    border: "1px solid rgba(201,168,76,0.25)",
                    padding: "8px 16px",
                    background: "rgba(13,13,13,0.9)",
                    zIndex: 15,
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontFamily: "var(--font-dm)",
                        fontSize: "9px",
                        color: "#C9A84C",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                    }}
                >
                    100% NON-ALCOHOLIC
                </p>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <AnimatePresence>
                {scrollY <= 60 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: "absolute",
                            bottom: "32px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "8px",
                            zIndex: 20,
                            pointerEvents: "none",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-dm)",
                                fontSize: "9px",
                                color: "#8B6914",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                            }}
                        >
                            SCROLL
                        </span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            style={{
                                width: "1px",
                                height: "32px",
                                background: "linear-gradient(to bottom, #C9A84C, transparent)",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}


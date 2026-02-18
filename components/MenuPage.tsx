"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

// ── FULL MENU DATA ──────────────────────────────────────────────
const menu = {
    "Soups": {
        icon: "🍜",
        items: [
            { name: "Non-Veg Hot & Sour Soup", price: 185, veg: false },
            { name: "Non-Veg Lemon Coriander Soup", price: 196, veg: false },
            { name: "Non-Veg Manchow Soup", price: 196, veg: false },
            { name: "Non-Veg Sweet Corn Soup", price: 207, veg: false },
            { name: "Veg Hot & Sour Soup", price: 153, veg: true },
            { name: "Veg Lemon Coriander Soup", price: 164, veg: true },
            { name: "Veg Manchow Soup", price: 164, veg: true },
            { name: "Veg Sweet Corn Soup", price: 164, veg: true },
        ]
    },
    "Veg Starters": {
        icon: "🥦",
        items: [
            { name: "Baby Corn 65", price: 249, veg: true },
            { name: "Baby Corn Manchurian Dry", price: 249, veg: true },
            { name: "Chilli Mushroom", price: 218, veg: true },
            { name: "Chilli Baby Corn", price: 249, veg: true },
            { name: "Chilli Paneer", price: 218, veg: true },
            { name: "Crispy Corn (Salt & Pepper)", price: 207, veg: true },
            { name: "Manchurian 65", price: 249, veg: true },
            { name: "Mushroom Manchurian", price: 218, veg: true },
            { name: "Paneer 65", price: 218, veg: true },
            { name: "Paneer Manchurian", price: 249, veg: true },
            { name: "Veg Manchurian Dry", price: 207, veg: true },
            { name: "Veg Manchurian Wet", price: 207, veg: true },
        ]
    },
    "Non-Veg Starters": {
        icon: "🍗",
        items: [
            { name: "Chicken 65", price: 273, veg: false },
            { name: "Chicken Majestic", price: 317, veg: false },
            { name: "Chicken Manchurian", price: 273, veg: false },
            { name: "Chilli Chicken", price: 273, veg: false },
            { name: "Dragon Chicken", price: 306, veg: false },
            { name: "Ginger Chicken", price: 273, veg: false },
            { name: "Hot & Garlic Chicken", price: 273, veg: false },
            { name: "Hot Chilli Wings", price: 306, veg: false },
            { name: "Kung Pao Chicken", price: 273, veg: false },
            { name: "Lemon Pepper Wings", price: 306, veg: false },
            { name: "Chilli Egg", price: 209, veg: false },
        ]
    },
    "Seafood": {
        icon: "🦐",
        items: [
            { name: "Apollo Fish", price: 372, veg: false },
            { name: "Butter Garlic Prawns", price: 405, veg: false },
            { name: "Chilli Fish", price: 372, veg: false },
            { name: "Chilli Prawns", price: 405, veg: false },
            { name: "Ginger Fish", price: 372, veg: false },
            { name: "Lollypop Prawns", price: 405, veg: false },
            { name: "Schezwan Prawns", price: 405, veg: false },
        ]
    },
    "Rice": {
        icon: "🍚",
        items: [
            { name: "Chilli Garlic Chicken Fried Rice", price: 328, veg: false },
            { name: "Egg Fried Rice", price: 306, veg: false },
            { name: "Green Thai Curry With Rice (Non-Veg)", price: 372, veg: false },
            { name: "Mixed Fried Rice (Non-Veg)", price: 405, veg: false },
            { name: "Prawn Fried Rice", price: 427, veg: false },
            { name: "Red Thai Curry With Rice", price: 372, veg: true },
            { name: "Schezwan Chicken Fried Rice", price: 328, veg: false },
            { name: "Veg Fried Rice", price: 196, veg: true },
        ]
    },
    "Noodles": {
        icon: "🍝",
        items: [
            { name: "American Chopsuey", price: 328, veg: true },
            { name: "Chilli Chicken Noodles", price: 328, veg: false },
            { name: "Chilli Garlic Veg Noodles", price: 273, veg: true },
            { name: "Egg Noodles", price: 306, veg: false },
            { name: "Hakka Noodles - Veg", price: 295, veg: true },
            { name: "Mixed Noodles (Veg)", price: 213, veg: true },
            { name: "Non-Veg Pan-Fried Noodles", price: 350, veg: false },
            { name: "Schezwan Veg Noodles", price: 273, veg: true },
            { name: "Veg Pan-Fried Noodles", price: 284, veg: true },
        ]
    },
    "Continental": {
        icon: "🍟",
        items: [
            { name: "Cheese Garlic Bread", price: 218, veg: true },
            { name: "Chicken Cheese Garlic Bread", price: 251, veg: false },
            { name: "Chicken Nuggets", price: 241, veg: false },
            { name: "Fish Fingers", price: 328, veg: false },
            { name: "Jalapeno Cheese Balls", price: 196, veg: true },
            { name: "Peri Peri French Fries", price: 207, veg: true },
            { name: "Salted French Fries", price: 164, veg: true },
            { name: "Veggie Fingers", price: 196, veg: true },
        ]
    },
    "Burgers & Sandwiches": {
        icon: "🍔",
        items: [
            { name: "EGG & Cheese Bull Burger", price: 218, veg: false },
            { name: "Fish Burger", price: 295, veg: false },
            { name: "Veg Cheese Burger", price: 185, veg: true },
            { name: "Veg Special Cheese Burger", price: 218, veg: true },
            { name: "Chipotle Cheese Sandwich", price: 218, veg: true },
            { name: "Chipotle Chicken Sandwich", price: 262, veg: false },
            { name: "Clubhouse Chicken Sandwich", price: 295, veg: false },
            { name: "Corn & Spinach Sandwich", price: 229, veg: true },
            { name: "Egg Cheese Sandwich", price: 218, veg: false },
            { name: "Paneer Tikka Sandwich", price: 218, veg: true },
            { name: "Veg Cheese Sandwich", price: 174, veg: true },
        ]
    },
    "Pizza & Pasta": {
        icon: "🍕",
        items: [
            { name: "Macaroni Cheese Pasta - Non-Veg (Alfredo/Arrabbiata/Pink)", price: 350, veg: false },
            { name: "Macaroni Cheese Pasta Veg", price: 273, veg: true },
            { name: "BBQ Chicken Pizza", price: 328, veg: false },
            { name: "Cottage Cheese Pizza - Veg", price: 372, veg: true },
            { name: "Flames N Spirits Special Pizza", price: 273, veg: true },
            { name: "Margherita Pizza", price: 207, veg: true },
            { name: "Peri Peri Chicken Pizza", price: 328, veg: false },
            { name: "Caesar Salad", price: 218, veg: true },
        ]
    },
    "Milkshakes": {
        icon: "🥤",
        items: [
            { name: "Black Currant Shake", price: 249, veg: true },
            { name: "Blueberry Shake", price: 262, veg: true },
            { name: "Brownie Blast Shake", price: 273, veg: true },
            { name: "Chocolate Shake", price: 236, veg: true },
            { name: "Dark Fantasy Shake", price: 302, veg: true },
            { name: "Ferrero Rocher Shake", price: 306, veg: true },
            { name: "Kitkat Shake", price: 262, veg: true },
            { name: "Litchi Shake", price: 236, veg: true },
            { name: "Lotus Biscoff Shake", price: 284, veg: true },
            { name: "Mango Shake", price: 236, veg: true },
            { name: "Nutella & Almond Shake", price: 262, veg: true },
            { name: "Nutella Shake", price: 288, veg: true },
            { name: "Oreo Shake", price: 262, veg: true },
            { name: "Peanut Butter Shake", price: 288, veg: true },
            { name: "Strawberry Shake", price: 236, veg: true },
        ]
    },
    "Hot Coffee": {
        icon: "☕",
        items: [
            { name: "Affogato", price: 207, veg: true },
            { name: "Cafe Latte", price: 174, veg: true },
            { name: "Cafe Mocha", price: 185, veg: true },
            { name: "Cappuccino", price: 196, veg: true },
            { name: "Double Shot Espresso", price: 120, veg: true },
            { name: "Espresso", price: 130, veg: true },
            { name: "Flat White", price: 164, veg: true },
            { name: "Hot Chocolate", price: 196, veg: true },
            { name: "Hot Dalgona", price: 153, veg: true },
            { name: "Macchiato", price: 183, veg: true },
            { name: "Marshmallow Hot Chocolate", price: 236, veg: true },
            { name: "Nutella Hot Chocolate", price: 236, veg: true },
            { name: "Strawberry Mocha", price: 207, veg: true },
        ]
    },
    "Iced Coffee": {
        icon: "🧊",
        items: [
            { name: "Black Orange", price: 249, veg: true },
            { name: "Cold Brew", price: 223, veg: true },
            { name: "Cold Dalgona", price: 236, veg: true },
            { name: "Cranberry Coffee", price: 249, veg: true },
            { name: "Iced Cappuccino", price: 209, veg: true },
            { name: "Iced Latte", price: 209, veg: true },
            { name: "Iced Matcha Latte", price: 207, veg: true },
            { name: "Mocha Bliss", price: 236, veg: true },
        ]
    },
    "Frappes": {
        icon: "🫙",
        items: [
            { name: "Brownie Frappe", price: 273, veg: true },
            { name: "Cafe Frappe", price: 207, veg: true },
            { name: "Flavoured Frappe", price: 249, veg: true },
            { name: "Lotus Biscoff Frappe", price: 284, veg: true },
            { name: "Mocha Frappe", price: 249, veg: true },
            { name: "Nutella Frappe", price: 262, veg: true },
            { name: "Oreo Frappe", price: 262, veg: true },
            { name: "Peanut Butter Frappe", price: 302, veg: true },
        ]
    },
    "Tea": {
        icon: "🍵",
        items: [
            { name: "Assam Tea", price: 130, veg: true },
            { name: "Chamomile Tea", price: 183, veg: true },
            { name: "Green Tea", price: 98, veg: true },
            { name: "Masala Tea", price: 130, veg: true },
            { name: "Peppermint Tea", price: 170, veg: true },
            { name: "Green Apple Iced Tea", price: 183, veg: true },
            { name: "Lemon Iced Tea", price: 183, veg: true },
            { name: "Peach Iced Tea", price: 183, veg: true },
            { name: "Watermelon Iced Tea", price: 183, veg: true },
        ]
    },
    "Mojitos": {
        icon: "🌿",
        items: [
            { name: "Beat The Heat", price: 209, veg: true },
            { name: "Fresh Lime Soda", price: 209, veg: true },
            { name: "Green Apple Mint", price: 209, veg: true },
            { name: "Litchi Fizz", price: 209, veg: true },
            { name: "Mango Mojito", price: 209, veg: true },
            { name: "Minty Mirage", price: 209, veg: true },
            { name: "Ocean Whisper", price: 209, veg: true },
            { name: "Spicy Mango With Cranberry", price: 209, veg: true },
            { name: "Virgin Mojito", price: 209, veg: true },
            { name: "Watermelon Mojito", price: 209, veg: true },
        ]
    },
    "Special Mocktails": {
        icon: "🍹",
        items: [
            { name: "Lemonade (Mint)", price: 223, veg: true },
            { name: "Litchi Colada", price: 223, veg: true },
            { name: "Passion Petal", price: 223, veg: true },
            { name: "Pina Colada", price: 223, veg: true },
            { name: "Sunset Serenade", price: 223, veg: true },
        ]
    },
    "Waffles & Desserts": {
        icon: " waffle: '🧇'",
        items: [
            { name: "Nutella Banana Waffle", price: 223, veg: true },
            { name: "Overloaded Chocolate Waffle", price: 185, veg: true },
            { name: "Strawberry Waffle", price: 185, veg: true },
            { name: "Blueberry Cheesecake", price: 196, veg: true },
            { name: "Chocolate Brownie With Ice Cream", price: 218, veg: false },
            { name: "Chocolate Cheese Cake", price: 185, veg: true },
            { name: "Lotus Biscoff Cheesecake", price: 223, veg: true },
            { name: "Oreo Cheesecake", price: 185, veg: true },
            { name: "Strawberry Cheesecake", price: 196, veg: true },
        ]
    }
};

const categories = Object.keys(menu);
const filterTabs = ["ALL", "VEG", "NON-VEG"];

export default function MenuPageContent() {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [search, setSearch] = useState("");
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const getFilteredItems = (items: any[]) => {
        return items.filter(item => {
            const matchFilter =
                activeFilter === "ALL" ||
                (activeFilter === "VEG" && item.veg) ||
                (activeFilter === "NON-VEG" && !item.veg);
            const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
            return matchFilter && matchSearch;
        });
    };

    const getVisibleCategories = () => {
        if (activeCategory === "ALL") return categories;
        return categories.filter(c => c === activeCategory);
    };

    return (
        <div
            ref={ref}
            style={{
                background: "#0D0D0D",
                padding: "120px 0",
                fontFamily: "var(--font-dm)",
                position: "relative",
                minHeight: "100vh"
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }} className="menu-container">

                {/* Back Link */}
                <Link
                    href="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#C9A84C",
                        textDecoration: "none",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "40px"
                    }}
                >
                    ← BACK TO HOME
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: "64px" }}
                >
                    <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
                        THE REPERTOIRE
                    </p>
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(42px, 5vw, 64px)", color: "#F5EDD6", margin: 0, lineHeight: 1.1 }}>
                        Crafted With <em style={{ fontFamily: "var(--font-cormorant)", color: "#C9A84C", fontStyle: "italic" }}>Fire & Intention</em>
                    </h2>
                </motion.div>

                {/* Search & Filters */}
                <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "64px" }}>
                    <input
                        type="text"
                        placeholder="Search any dish or drink..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{
                            width: "100%",
                            maxWidth: "480px",
                            background: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
                            color: "#F5EDD6",
                            fontSize: "14px",
                            padding: "12px 0",
                            outline: "none"
                        }}
                    />

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        {filterTabs.map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                style={{
                                    padding: "8px 20px",
                                    border: `1px solid ${activeFilter === f ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
                                    background: activeFilter === f ? "#C9A84C" : "transparent",
                                    color: activeFilter === f ? "#0D0D0D" : "#F5EDD6",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    cursor: "pointer",
                                    transition: "all 0.25s ease"
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div
                        className="no-scrollbar"
                        style={{
                            display: "flex",
                            gap: "8px",
                            overflowX: "auto",
                            paddingBottom: "12px",
                            WebkitOverflowScrolling: "touch"
                        }}
                    >
                        <button onClick={() => setActiveCategory("ALL")} style={pillStyle(activeCategory === "ALL")}>ALL</button>
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} style={pillStyle(activeCategory === cat)}>
                                {(menu as any)[cat].icon} {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Items Grid */}
                <AnimatePresence mode="wait">
                    {getVisibleCategories().map((category, cIdx) => {
                        const items = getFilteredItems((menu as any)[category].items);
                        if (items.length === 0) return null;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.5, delay: cIdx * 0.05 }}
                                style={{ marginBottom: "80px" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                                    <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", color: "#F5EDD6", margin: 0, fontWeight: 400 }}>{category}</h3>
                                    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.4) 0%, transparent 100%)" }} />
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "0" }} className="menu-grid">
                                    {items.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "20px 24px",
                                                borderBottom: "1px solid rgba(201,168,76,0.08)",
                                                transition: "background 0.2s ease"
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.04)"}
                                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                        >
                                            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                                <div style={{
                                                    width: "14px",
                                                    height: "14px",
                                                    border: `1.5px solid ${item.veg ? "#4CAF50" : "#8B1A1A"}`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: "4px"
                                                }}>
                                                    <div style={{ width: "6px", height: "6px", background: item.veg ? "#4CAF50" : "#8B1A1A", borderRadius: item.veg ? "50%" : "0" }} />
                                                </div>
                                                <span style={{ fontFamily: "var(--font-playfair)", fontSize: "16px", color: "#F5EDD6" }}>{item.name}</span>
                                            </div>
                                            <span style={{ color: "#C9A84C", fontWeight: 600 }}>₹{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Footer Note */}
                <div style={{ marginTop: "40px", textAlign: "center", padding: "40px 0", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "11px", color: "rgba(245,237,214,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        Non-Alcoholic Establishment · Prices inclusive of taxes
                    </p>
                </div>

            </div>

            <style>{`
        @media (max-width: 768px) {
          .menu-container { padding: 0 24px !important; }
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}

function pillStyle(active: boolean): React.CSSProperties {
    return {
        padding: "8px 16px",
        border: `1px solid ${active ? "#C9A84C" : "rgba(201,168,76,0.25)"}`,
        background: active ? "#C9A84C" : "transparent",
        color: active ? "#0D0D0D" : "rgba(245,237,214,0.7)",
        fontSize: "11px",
        fontWeight: active ? 700 : 400,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        cursor: "pointer",
        whiteSpace: "nowrap"
    };
}

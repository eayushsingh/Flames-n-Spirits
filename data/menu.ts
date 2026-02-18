export type MenuItem = {
    name: string;
    price: string;
    veg?: boolean;
};

export type MenuCategory = {
    category: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        category: "Soups",
        items: [
            { name: "Non-Veg Hot & Sour Soup", price: "₹185" },
            { name: "Non-Veg Lemon Coriander Soup", price: "₹196" },
            { name: "Non-Veg Manchow Soup", price: "₹196" },
            { name: "Non-Veg Sweet Corn Soup", price: "₹207" },
            { name: "Veg Hot & Sour Soup", price: "₹152", veg: true },
            { name: "Veg Lemon Coriander Soup", price: "₹163", veg: true },
            { name: "Veg Manchow Soup", price: "₹163", veg: true },
            { name: "Veg Sweet Corn Soup", price: "₹163", veg: true },
        ],
    },
    {
        category: "Starters",
        items: [
            { name: "Chicken 65", price: "₹273" },
            { name: "Chicken Majestic", price: "₹317" },
            { name: "Chicken Manchurian", price: "₹273" },
            { name: "Chilli Chicken", price: "₹273" },
            { name: "Dragon Chicken", price: "₹306" },
            { name: "Ginger Chicken", price: "₹273" },
            { name: "Hot & Garlic Chicken", price: "₹273" },
            { name: "Hot Chilli Wings", price: "₹306" },
        ],
    },
    {
        category: "Chinese",
        items: [
            { name: "Chilli Garlic Chicken Fried Rice", price: "₹328" },
            { name: "Egg Fried Rice", price: "₹306" },
            { name: "Mixed Fried Rice (Non-Veg)", price: "₹404" },
            { name: "Prawn Fried Rice", price: "₹426" },
            { name: "Chilli Chicken Noodles", price: "₹328" },
            { name: "Hakka Noodles - Veg", price: "₹295", veg: true },
            { name: "Mixed Noodles (Veg)", price: "₹213", veg: true },
            { name: "Schezwan Veg Noodles", price: "₹273", veg: true },
        ],
    },
    {
        category: "Indian",
        items: [
            { name: "Paneer Tikka Sandwich", price: "₹218", veg: true },
            { name: "Cottage Cheese Pizza - Veg", price: "₹372", veg: true },
            { name: "Masala Tea", price: "₹75", veg: true },
            { name: "Ginger Tea", price: "₹75", veg: true },
        ],
    },
    {
        category: "Continental",
        items: [
            { name: "Cheese Garlic Bread", price: "₹218", veg: true },
            { name: "Chicken Cheese Garlic Bread", price: "₹251" },
            { name: "Chicken Nuggets", price: "₹241" },
            { name: "Fish Fingers", price: "₹328" },
            { name: "Veg Cheese Burger", price: "₹185", veg: true },
            { name: "Macaroni Cheese Pasta Veg", price: "₹273", veg: true },
            { name: "Margherita Pizza", price: "₹207", veg: true },
        ],
    },
    {
        category: "Drinks",
        items: [
            { name: "Classic Mojito", price: "₹174", veg: true },
            { name: "Watermelon Mojito", price: "₹185", veg: true },
            { name: "Classic Frappe", price: "₹185", veg: true },
            { name: "Iced Americano", price: "₹130", veg: true },
            { name: "Cappuccino", price: "₹141", veg: true },
            { name: "Espresso", price: "₹97", veg: true },
        ],
    },
    {
        category: "Desserts",
        items: [
            { name: "Blueberry Cheesecake", price: "₹196", veg: true },
            { name: "Chocolate Brownie With Icecream", price: "₹218" },
            { name: "Lotus Biscoff Cheesecake", price: "₹222", veg: true },
            { name: "Nutella Banana Waffle", price: "₹222", veg: true },
            { name: "Oreo Cheesecake", price: "₹185", veg: true },
        ],
    },
];

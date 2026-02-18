import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuPageContent from "@/components/MenuPage";

export default function MenuMainPage() {
    return (
        <main style={{ position: "relative", minHeight: "100vh", background: "#0D0D0D" }}>
            <Navbar />
            <MenuPageContent />
            <Footer />
        </main>
    );
}

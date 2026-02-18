import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AmbianceSection from "@/components/AmbianceSection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#0D0D0D" }}>
      <Navbar />
      <HeroSection />
      <AmbianceSection />
      <ReservationSection />
      <LocationSection />
      <Footer />
    </main>
  );
}

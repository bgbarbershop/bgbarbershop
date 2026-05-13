import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryPreview from "@/components/GalleryPreview";
import BookingCTA from "@/components/BookingCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalleryPreview />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
    </>
  );
}

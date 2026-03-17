import Hero from "./components/Hero";
import Story from "./components/Story";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import SipSection from "./components/Sipsection";
import HandleSection from "./components/HandleSection";
import Reviews from "./components/Reviews"
import Footer from "./components/Footer";
import CupSelector from "./components/CupSelector";

export default function App() {
  return (
    <div className="max-w-[375px] mx-auto bg-[#000000] min-h-screen ">
      <Navbar />
      <Hero />
      <Story />
      <SipSection />
      <HandleSection />
      <Carousel />
      <CupSelector />
      <Reviews />
      <Footer />
    </div>
  );
}

import Hero from "./components/Hero";
import Story from "./components/Story";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import SipSection from "./components/Sipsection";
import HandleSection from "./components/HandleSection";
import Reviews from "./components/Reviews"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-[375px] mx-auto bg-[#000000] min-h-screen mt-2 mb-2">
      <Navbar />
      <Hero />
      <Story />
      <SipSection />
      <HandleSection />
      <Carousel />
      <Reviews />
      <Footer />
    </div>
  );
}

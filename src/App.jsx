import Hero from "./components/Hero";
import Story from "./components/Story";
import Carousel from "./components/Carousel";
import VariantSelector from "./components/VariantSelector";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import StickyCart from "./components/StickyCart";

export default function App() {
  return (
    <div className="max-w-[375px] mx-auto bg-[#FBF9F7] min-h-screen mt-2 mb-2">
      <Hero />

      <VariantSelector />

      <Carousel />

      <Story />

      <Features />

      <Reviews />

      <CTA />

      <StickyCart />
    </div>
  );
}

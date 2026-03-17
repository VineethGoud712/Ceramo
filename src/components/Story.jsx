import { useState } from "react";
import localVideo from "/images/story2.mp4";

const cloudVideo =
  "https://res.cloudinary.com/dvnpzpoi6/video/upload/v1773762961/story2_f2jjf0.mp4";

const StorySection = () => {
  const [videoSrc, setVideoSrc] = useState(cloudVideo);

  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      
      <video
        key={videoSrc} 
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/storyimg.png"
        onError={() => setVideoSrc(localVideo)} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 px-6 pt-5 max-w-md text-white leading-relaxed">
        <p className="font-satoshi text-[16px]">
          Wheel-thrown from 400 grams of stoneware clay on a hand-operated kick
          wheel, this 12 oz ceramic mug is fired twice — first at 1800°F to
          harden the body, then at 2300°F to fuse the food-safe earth glaze into
          the walls. The result is a vessel thick enough to hold warmth for
          forty minutes, uneven enough to prove it was made by hand, and
          considered enough to keep forever.
        </p>
      </div>

    </section>
  );
};

export default StorySection;
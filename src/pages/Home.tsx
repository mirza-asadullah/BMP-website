import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import {
  MessageSection,
  FinanceSection,
  MarketplaceSection,
  AppsSection,
  CommunitySection,
  NuricionSection,
  AIFinanceSection,
  MentalHealthSection,
  MusicSection,
} from "../components/sections";

const bgImage = "/src/assets/bg1.png";
const buttonIcon = "/src/assets/animicon/button.png";
const arrowRightIcon = "/src/assets/animicon/arrow-rigth.png";

// Import videos for preloading
const preloadVideos = [
  "/src/assets/anim/animation2.webm",
  "/src/assets/anim/animation3.webm",
  "/src/assets/anim/animation4.webm",
  "/src/assets/anim/animation5.webm",
  "/src/assets/anim/animation6.webm",
  "/src/assets/anim/animation7.webm",
  "/src/assets/anim/animation8.webm",
  "/src/assets/anim/animation9.webm",
  "/src/assets/anim/animation10.webm",
];

const preloadImages = [
  "/src/assets/bg1.png",
  "/src/assets/logo.png",
  "/src/assets/msgicon.png",
  "/src/assets/animicon/anim10mus.png",
  "/src/assets/animicon/anim10music.png",
  "/src/assets/animicon/anim2msg.png",
  "/src/assets/animicon/anim2music.png",
  "/src/assets/animicon/anim2phone.png",
  "/src/assets/animicon/anim3mon.png",
  "/src/assets/animicon/anim3money.png",
  "/src/assets/animicon/anim4maret.png",
  "/src/assets/animicon/anim4market.png",
  "/src/assets/animicon/anim4mt.png",
  "/src/assets/animicon/anim5app.png",
  "/src/assets/animicon/anim5car.png",
  "/src/assets/animicon/anim5cld.png",
  "/src/assets/animicon/anim6like.png",
  "/src/assets/animicon/anim6share.png",
  "/src/assets/animicon/anim7card.png",
  "/src/assets/animicon/anim7coin.png",
  "/src/assets/animicon/anim7qr.png",
  "/src/assets/animicon/anim8apple.png",
  "/src/assets/animicon/anim8balance.png",
  "/src/assets/animicon/anim8leaf.png",
  "/src/assets/animicon/anim9heart.png",
  "/src/assets/animicon/anim9log.png",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;

const sections = [
  MessageSection,
  FinanceSection,
  MarketplaceSection,
  AppsSection,
  CommunitySection,
  AIFinanceSection, // 6
  NuricionSection,  // 7
  MentalHealthSection, // 8
  MusicSection,  // 9
];

export default function Home() {
  const [activeIndices, setActiveIndices] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);
  const [isSubsectionActive, setIsSubsectionActive] = useState(false);

  const autoScrollIntervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    autoScrollIntervalRef.current = setInterval(() => {
      handleManualScroll("right");
    }, 5000) as unknown as number;
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isSubsectionActive) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isSubsectionActive, activeIndices]); // Add activeIndices dependency to restart timer on change

  const handleManualScroll = (dir: "left" | "right") => {
    // Reset timer on manual interaction
    startAutoScroll();
    setTransitionKey((prev) => prev + 1);

    setActiveIndices((prev) => {
      if (dir === "right") {
        return (prev + 1) % sections.length;
      } else {
        return (prev - 1 + sections.length) % sections.length;
      }
    });
  };

  const CurrentSection = sections[activeIndices];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #a54fd4 0%, #8b24c7 30%, #6b11a6 50%, #8b24c7 70%, #a54fd4 100%)",
        }}
      >
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55, mixBlendMode: "soft-light" }}
        />
        {/* Right Vignette */}
        <div
          className="absolute right-0 top-0 w-[40%] h-full pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to left, rgba(5,0,10,1) 0%, rgba(5,0,10,0.85) 35%, rgba(5,0,10,0.4) 65%, transparent 100%)",
          }}
        />

        {/* Video & Image Preloader */}
        <div className="hidden">
          {preloadVideos.map((video, index) => (
            <video key={`vid-${index}`} src={video} preload="auto" muted />
          ))}
          {preloadImages.map((img, index) => (
            <img key={`img-${index}`} src={img} alt="" />
          ))}
        </div>
      </div>

      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <CurrentSection
            key={transitionKey}
            onToggleSubsection={setIsSubsectionActive}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {!isSubsectionActive && (
        <>
          <M.button
            className="absolute left-15 top-1/2 -translate-y-1/2 cursor-pointer z-[60] opacity-70 hover:opacity-100 transition-opacity disabled:opacity-30"
            onClick={() => handleManualScroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={buttonIcon} alt="Previous" className="w-20 h-20" />
          </M.button>

          <M.button
            className="absolute right-15 top-1/2 -translate-y-1/2 z-[60] cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => handleManualScroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={arrowRightIcon} alt="Next" className="w-20 h-20" />
          </M.button>
        </>
      )}
    </div>
  );
}


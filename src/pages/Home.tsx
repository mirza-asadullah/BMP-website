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
      </div>

      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <M.div
            key={transitionKey}
            className="absolute inset-0 w-full h-full"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CurrentSection onToggleSubsection={setIsSubsectionActive} />
          </M.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {!isSubsectionActive && (
        <>
          <M.button
            className="absolute left-15 top-1/2 -translate-y-1/2 z-20 opacity-70 hover:opacity-100 transition-opacity disabled:opacity-30"
            onClick={() => handleManualScroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={buttonIcon} alt="Previous" className="w-20 h-20" />
          </M.button>

          <M.button
            className="absolute right-15 top-1/2 -translate-y-1/2 z-20 opacity-70 hover:opacity-100 transition-opacity"
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


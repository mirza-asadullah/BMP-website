import { useState } from "react";
import { motion } from "framer-motion";
import MarketplaceSubsection from "../subSections/MarketplaceSubsection";
const heroVideo = "/src/assets/anim/animation4.webm";
const anim4maret = "/src/assets/animicon/anim4maret.png";
const anim4market = "/src/assets/animicon/anim4market.png";
const anim4mt = "/src/assets/animicon/anim4mt.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
export default function MertekplaceSection({
  onToggleSubsection,
}: {
  onToggleSubsection?: (isOpen: boolean) => void;
}) {
  const [showSubsection, setShowSubsection] = useState(false);

  if (showSubsection) {
    return (
      <MarketplaceSubsection
        onBack={() => {
          setShowSubsection(false);
          onToggleSubsection?.(false);
        }}
      />
    );
  }

  const contentVariants = {
    initial: { y: "100%", opacity: 0 },
     animate: {
      y: ["100%", "-10%", "0%"],
      opacity: 1,
      transition: { duration: 1.8, ease: "easeOut", delay: 0.5 },
    },
   exit: {
      x: ["0%", "10%", "-100%"],
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: ["-100%", "10%", "0%"],
      opacity: 1,
      transition: { duration: 1.8, ease: "easeOut", delay: 0.5  },
    },
     exit: {
      x: ["0%", "-10%", "100%"],
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <M.section
      className="relative w-full min-w-full h-screen flex items-center snap-start shrink-0 bg-transparent"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Content — aligned to header width */}
      <M.div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-20">
        <M.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <M.div className="space-y-6" variants={contentVariants}>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-8xl leading-none"
              style={{ fontWeight: 900, fontStyle: "italic" }}
            >
              Vende lo que <br />
              ya no usas
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
              encuentra lo que buscas
            </p>
            <p className="text-base sm:text-lg lg:text-3xl max-w-[40ch] opacity-90 leading-relaxed">
              Dale una segunda vida a tus cosas. <br /> Compra y vende en tu
              comunidad de <br /> confianza.
            </p>
            <div className="pt-4">
              <button
                className="relative z-30 text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  width: "250px",
                  height: "60px",
                  borderRadius: "918.42px",
                  background: "#191919",
                  boxShadow:
                    "5px 5px 20px 0px #4C1868, -5px -5px 20px 0px #C94BF8",
                }}
                onClick={() => {
                  setShowSubsection(true);
                  onToggleSubsection?.(true);
                }}
              >
                Descubre Vaihok
              </button>
            </div>
          </M.div>

          <M.div
            className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20"
            variants={imageVariants}
          >
            <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] mb-20 origin-center ">
              <M.img
                src={anim4maret}
                alt="Star Tag"
                className="absolute top-[-10%] right-[-30%] w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              {/* Shopping Cart - Bottom Left */}
              <M.img
                src={anim4market}
                alt="Cart"
                className="absolute bottom-[-10%] left-[-30%] w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <M.img
                src={anim4mt}
                alt="Package"
                className="absolute bottom-[-30%] right-[-10%] w-[160px] h-[200px] lg:w-[260px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0, 4, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl scale-160 z-40"
              />
            </div>
          </M.div>
        </M.div>
      </M.div>
    </M.section>
  );
}

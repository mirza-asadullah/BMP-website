import { useState } from "react";
import { motion } from "framer-motion";
import AppsSubsection from "../subSections/AppsSubsection";
const heroVideo = "/src/assets/anim/animation5.webm";
const anim5app = "/src/assets/animicon/anim5app.png";
const anim5car = "/src/assets/animicon/anim5car.png";
const anim5cld = "/src/assets/animicon/anim5cld.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
export default function AppsSection({
  onToggleSubsection,
}: {
  onToggleSubsection?: (isOpen: boolean) => void;
}) {
  const [showSubsection, setShowSubsection] = useState(false);
  if (showSubsection) {
    return (
      <AppsSubsection
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
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    },
    exit: {
      y: ["0%", "10%", "-100%"],
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: ["-100%", "10%", "0%"],
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    },
    exit: {
      y: ["0%", "-10%", "100%"],
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
              Una sola <br />
              app
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
              Cientos de soluciones
            </p>
            <p className="text-base sm:text-lg lg:text-3xl max-w-[40ch] opacity-90 leading-relaxed">
              Todo lo que necesitas, en un solo lugar. <br /> Como si fuera
              magia.
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
            <div className="relative w-[500px] h-[500px] xl:w-[300px] xl:h-[300px] mb-20 origin-center ">
              <M.img
                src={anim5app}
                alt="Phone"
                className="absolute bottom-[50%] left-[-90%] w-[500px] h-[200px]
    lg:w-[400px] lg:h-[400px] drop-shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <M.img
                src={anim5car}
                alt="Car"
                className="absolute bottom-[-80%] left-[-80%] w-[500px] h-[200px]
    lg:w-[280px] lg:h-[280px] drop-shadow-xl z-50"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <M.img
                src={anim5cld}
                alt="Cloud"
                className="absolute bottom-[-80%] left-[80%] w-[500px] h-[200px]
    lg:w-[150px] lg:h-[150px] drop-shadow-xl z-50"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl scale-300 z-40"
              />
            </div>
          </M.div>
        </M.div>
      </M.div>
    </M.section>
  );
}

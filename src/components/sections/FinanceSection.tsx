import { useState } from "react";
import { motion } from "framer-motion";
import FinanceSubsection from "../subSections/FinanceSubsection";
const heroVideo = "/src/assets/anim/animation3.webm";
const anim3money = "/src/assets/animicon/anim3money.png";
const anim3mon = "/src/assets/animicon/anim3mon.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
export default function FinanceSection({
  onToggleSubsection,
}: {
  onToggleSubsection?: (isOpen: boolean) => void;
}) {
  const [showSubsection, setShowSubsection] = useState(false);

  if (showSubsection) {
    return (
      <FinanceSubsection
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
      transition: { duration: 0 },
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
              Divide <br />
              cuentas
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
              multiplica la diversión
            </p>
            <p className="text-base sm:text-lg lg:text-3xl max-w-[40ch] opacity-90 leading-relaxed">
              Paga cenas, viajes o regalos en grupo. <br /> Sin cálculos
              complicados ni cobros incómodos.
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

          {/* Right Image/Video Column */}
          <M.div
            className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20"
            variants={imageVariants}
          >
            <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] mb-20 origin-center ">
              <M.img
                src={anim3money}
                alt="Phone"
                className="absolute bottom-[-70%] left-[-35%] w-[500px] h-[200px]
    lg:w-[1000px] lg:h-[1000px] drop-shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <M.img
                src={anim3mon}
                alt="Phone"
                className="absolute bottom-[-65%] left-[30%] w-[500px] h-[200px]
    lg:w-[1000px] lg:h-[1000px] drop-shadow-xl"
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
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl scale-150 z-40"
              />
            </div>
          </M.div>
        </M.div>
      </M.div>
    </M.section>
  );
}

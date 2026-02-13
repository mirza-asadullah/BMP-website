import { useState } from "react";
import { motion } from "framer-motion";
import MessageSubsection from "../subSections/MessageSubsection";
const heroVideo = "/src/assets/anim/animation2.webm";
const anim2msg = "/src/assets/animicon/anim2msg.png";
const anim2phone = "/src/assets/animicon/anim2phone.png";
const anim2music = "/src/assets/animicon/anim2music.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
export default function MessageSection({
  onToggleSubsection,
}: {
  onToggleSubsection?: (isOpen: boolean) => void;
}) {
  const [showSubsection, setShowSubsection] = useState(false);
  if (showSubsection) {
    return (
      <MessageSubsection
        onBack={() => {
          setShowSubsection(false);
          onToggleSubsection?.(false);
        }}
      />
    );
  }

  const contentVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1 },
    exit: {
      x: ["0%", "10%", "-100%"],
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1 },
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
          <M.div className="space-y-6 relative z-50" variants={contentVariants}>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-8xl leading-none"
              style={{ fontWeight: 900, fontStyle: "italic" }}
            >
              Todo
              <br />
              empieza
            </h1>
            <p
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight"
            >
              con una conversación
            </p>
            <p
              className="text-base sm:text-lg lg:text-3xl max-w-[40ch] opacity-90 leading-relaxed"
            >
              Y desde ahí: paga, vende, sana o
              <br />
              escucha música. Sin salir del chat.
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
            <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] mb-20 origin-center pointer-events-none">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain drop-shadow-2xl scale-300"
              />
              <M.img
                src={anim2msg}
                alt="Message"
                className="absolute top-[-17%] left-[-35%] w-20 h-20 lg:w-90 lg:h-90 drop-shadow-xl"
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Floating phone icon — bottom center-left */}
              <M.img
                src={anim2phone}
                alt="Phone"
                className="absolute bottom-[-32%] left-[-2%] w-18 h-18 lg:w-75 lg:h-75 drop-shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <M.img
                src={anim2music}
                alt="Music"
                className="absolute bottom-[-25%] right-[5%] w-18 h-18 lg:w-50 lg:h-60 drop-shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 8, 0, -8, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </M.div>
        </M.div>
      </M.div>
    </M.section>
  );
}

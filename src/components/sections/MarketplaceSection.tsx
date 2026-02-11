
import { useState } from "react";
import { motion } from "framer-motion";
import MarketplaceSubsection from "../sunSections/MarketplaceSubsection";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/anim/animation4.webm";
const M = motion as any;
export default function MertekplaceSection() {
  const [showSubsection, setShowSubsection] = useState(false);
  if (showSubsection) {
    return <MarketplaceSubsection onBack={() => setShowSubsection(false)} />;
  }
  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden snap-start shrink-0"
      style={{
        background:
          "linear-gradient(135deg, #a54fd4 0%, #8b24c7 30%, #6b11a6 50%, #8b24c7 70%, #a54fd4 100%)",
      }}
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.55, mixBlendMode: "soft-light" }}
      />

      {/* Right vignette */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          right: 0,
          top: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(5,0,10,1) 0%, rgba(5,0,10,0.85) 35%, rgba(5,0,10,0.4) 65%, transparent 100%)",
        }}
      />
      <M.button
        className="absolute ml-10"
      >
        <img src="/src/assets/animicon/button.png" alt="" />
      </M.button>

      {/* Right navigation arrow button */}
      <M.button
        className="absolute mr-10 right-6 top-1/2 -translate-y-1/2 z-[15]   flex items-center justify-center text-white  transition-all duration-300 cursor-pointer"

      >
        <img src="/src/assets/animicon/arrow-rigth.png" alt="" />
      </M.button>
      {/* Content — aligned to header width */}
      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6">
            <M.h1
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-8xl leading-none"
              style={{ fontWeight: 900, fontStyle: "italic" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Compra  <br />y vende


            </M.h1>

            <M.p
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              sin salir del chat
            </M.p>

            <M.p
              className="text-base sm:text-lg lg:text-3xl max-w-[100ch] opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Desde productos locales hasta servicios   <br /> digitales: todo en una sola comunidad.


            </M.p>

            <M.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="pt-4"
            >
              <button
                className="relative z-30 text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  width: "250px",
                  height: "60px",
                  borderRadius: "918.42px",
                  background: "#191919",
                  boxShadow: "5px 5px 20px 0px #4C1868, -5px -5px 20px 0px #C94BF8",
                }}
                onClick={() => setShowSubsection(true)}
              >
                Descubre Vaihok
              </button>
            </M.div>
          </div>

          {/* Right — 3D Character Video */}
          <M.div
            className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-[500px] h-[500px] xl:w-[320px] xl:h-[320px] mb-40">
              {/* Star/Tag Icon - Top Right */}
              <M.img
                src="/src/assets/animicon/anim4maret.png"
                alt="Star Tag"
                className="absolute top-[-70%] right-[-100%] w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Shopping Cart - Bottom Left */}
              <M.img
                src="/src/assets/animicon/anim4market.png"
                alt="Cart"
                className="absolute bottom-[-90%] left-[-80%] w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Box/Package - Bottom Right */}
              <M.img
                src="/src/assets/animicon/anim4mt.png"
                alt="Package"
                className="absolute bottom-[-100%] right-[-60%] w-[160px] h-[200px] lg:w-[260px] lg:h-[250px] drop-shadow-xl"
                animate={{ y: [0, 12, 0], rotate: [0, -4, 0, 4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
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
        </div>
      </div>
    </section>
  );
}


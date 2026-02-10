
import { motion } from "framer-motion";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/anim/animation2.webm";
const M = motion as any;
export default function MessageSection() {
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
                Todo
                <br />
                empieza
              </M.h1>

              <M.p
                className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 }}
              >
                con una conversación
              </M.p>

              <M.p
                className="text-base sm:text-lg lg:text-2xl max-w-md opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                Y desde ahí: paga, vende, sana o
                <br />
                escucha música. Sin salir del chat.
              </M.p>

              <M.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="pt-4"
              >
                <button
                  className="text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: "rgba(0,0,0,0.75)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  }}
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
              <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] mb-20">
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain drop-shadow-2xl scale-300"
                />

                {/* Floating message icon — top center, above head */}
                <M.img
                  src="/src/assets/animicon/anim2msg.png"
                  alt="Message"
                  className="absolute top-[-17%] left-[-35%] w-20 h-20 lg:w-90 lg:h-90 drop-shadow-xl"
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating phone icon — bottom center-left */}
                <M.img
                  src="/src/assets/animicon/anim2phone.png"
                  alt="Phone"
                  className="absolute bottom-[-32%] left-[-2%] w-18 h-18 lg:w-75 lg:h-75 drop-shadow-xl"
                  animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Floating music icon — bottom right */}
                <M.img
                  src="/src/assets/animicon/anim2music.png"
                  alt="Music"
                  className="absolute bottom-[-25%] right-[5%] w-18 h-18 lg:w-50 lg:h-60 drop-shadow-xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 8, 0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </M.div>
          </div>
        </div>
      </section>
  );
}

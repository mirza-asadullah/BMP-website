import { motion } from "framer-motion";
import { Check } from "lucide-react";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/subsection/msgapp.png";
const buttonIcon = "/src/assets/animicon/button.png";
const appStoreIcon = "/src/assets/subsection/appstore.png";
const playStoreIcon = "/src/assets/subsection/playstore.png";
const anim2msg = "/src/assets/animicon/anim2msg.png";
const phoneIcon = "/src/assets/subsection/phone.png";
const anim2music = "/src/assets/animicon/anim2music.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
interface MessageSubsectionProps {
  onBack?: () => void;
}
export default function MessageSubsection({ onBack }: MessageSubsectionProps) {
  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden snap-start shrink-0"
      style={{
        background:
          "linear-gradient(135deg, #a54fd4 0%, #8b24c7 30%, #6b11a6 50%, #8b24c7 70%, #a54fd4 100%)",
      }}
    >
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
      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-20 pl-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6">
            <M.button className="cursor-pointer" onClick={onBack}>
              <img src={buttonIcon} alt="" />
            </M.button>
            <M.h1
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl leading-none line-height-0.8"
              style={{ fontWeight: 900, fontStyle: "italic" }}
            >
              Imagina tu chat
              <br />
              con superpoderes
            </M.h1>
            <M.p className="text-sm sm:text-base lg:text-2xl  opacity-90 leading-relaxed  line-height-0.8">
              No solo escribes: compartes fotos, llamas, mandas
              <br />
              archivos y hasta dinero sin salir de la conversación.
            </M.p>
            <M.div className="space-y-4 ml-1 opacity-90">
              {[
                "Chats privados y seguros",
                "Pagos en el mismo chat",
                "Llamadas y videollamadas HD",
                "Grupos con miles de miembros",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 line-height-0 mb-0"
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check
                      className="w-5 h-5 text-gray-700 font-bold"
                      strokeWidth={4}
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-2xl opacity-90">
                    {item}
                  </p>
                </div>
              ))}
            </M.div>
            <M.div className="pt-4 flex gap-4">
              <button className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={appStoreIcon} alt="" height={250} width={250} />
              </button>
              <button className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={playStoreIcon} alt="" height={250} width={250} />
              </button>
            </M.div>
          </div>
          <M.div className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20">
            <div className="relative w-[500px] h-[500px] xl:w-[340px] xl:h-[340px] mb-20">
              <img
                src={heroVideo}
                className="w-full h-full object-contain drop-shadow-2xl scale-300"
              />
              <M.img
                src={anim2msg}
                alt="Message"
                className="absolute top-[-60%] left-[-75%] w-20 h-20 lg:w-90 lg:h-90 drop-shadow-xl"
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Floating phone icon — bottom center-left */}
              <M.img
                src={phoneIcon}
                alt="Phone"
                className="absolute bottom-[-82%] left-[-52%] w-18 h-18 lg:w-75 lg:h-75 drop-shadow-xl"
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
                className="absolute bottom-[-45%] right-[-75%] w-18 h-18 lg:w-40 lg:h-50 drop-shadow-xl"
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </M.div>
        </div>
      </div>
    </section>
  );
}

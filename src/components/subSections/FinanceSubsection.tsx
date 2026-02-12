import { motion } from "framer-motion";
import { Check } from "lucide-react";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/subsection/subfinances.png";
const buttonIcon = "/src/assets/animicon/button.png";
const appStoreIcon = "/src/assets/subsection/appstore.png";
const playStoreIcon = "/src/assets/subsection/playstore.png";
const anim3money = "/src/assets/animicon/anim3money.png";
const anim3mon = "/src/assets/animicon/anim3mon.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
interface FinanceSubsectionProps {
  onBack?: () => void;
}
export default function FinanceSubsection({ onBack }: FinanceSubsectionProps) {
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
              Tu billetera en el bolsillo,
              <br />
              lista en segundos.
            </M.h1>
            <M.p className="text-sm sm:text-base lg:text-2xl  opacity-90 leading-relaxed  line-height-0.8">
              Envía y recibe dinero en un clic. Convierte monedas, paga
              <br />
              con QR, o recarga tu cuenta en cualquier momento.
            </M.p>
            <M.div className="space-y-4 ml-1 opacity-90">
              {[
                "Envíos instantáneos",
                "Pagos con QR y NFC",
                " Multimoneda (USD, EUR, COP, cripto)",
                "Total transparencia en comisiones",
              ].map(
                (
                  item,
                  index, // Using map for cleaner code and consistent styling
                ) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 line-height-0 mb-0"
                  >
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <Check
                        className="w-5 h-5 text-gray-600 font-bold"
                        strokeWidth={4}
                      />
                    </div>
                    <p className="text-sm sm:text-base lg:text-2xl opacity-90">
                      {item}
                    </p>
                  </div>
                ),
              )}
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
            <div className="relative w-[500px] h-[500px] xl:w-[340px] xl:h-[340px] mt-50 bottom-0">
              <img
                src={heroVideo}
                className="w-[260px] h-[260px]  absolute inset-0  object-contain drop-shadow-2xl scale-300 z-40 "
              />
              <M.img
                src={anim3money}
                alt="Phone"
                className="absolute bottom-[-162%] left-[-62%] w-18 h-18 lg:w-[1360px] lg:h-[1360px] drop-shadow-xl"
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              {/* Floating music icon — bottom right */}
              <M.img
                src={anim3mon}
                alt="Music"
                className="absolute bottom-[-105%] right-[-75%] w-18 h-18 lg:w-500 lg:h-300 drop-shadow-xl rotate-[10deg]"
              />
            </div>
          </M.div>
        </div>
      </div>
    </section>
  );
}

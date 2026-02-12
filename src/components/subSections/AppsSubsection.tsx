import { motion } from "framer-motion";
import { Check } from "lucide-react";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/pages/appsub.png";
const buttonIcon = "/src/assets/animicon/button.png";
const appStoreIcon = "/src/assets/subsection/appstore.png";
const playStoreIcon = "/src/assets/subsection/playstore.png";
const anim5app = "/src/assets/animicon/anim5app.png";
const anim5car = "/src/assets/animicon/anim5car.png";
const anim5cld = "/src/assets/animicon/anim5cld.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
interface FinanceSubsectionProps {
  onBack?: () => void;
}
export default function AppsSubsection({ onBack }: FinanceSubsectionProps) {
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
              Un universo de apps, sin
              <br />
              llenar tu memoria.
            </M.h1>
            <M.p className="text-sm sm:text-base lg:text-2xl  opacity-90 leading-relaxed  line-height-0.8">
              Ya no necesitas 10 descargas. Todo vive dentro del
              <br />
              ecosistema: pide un transporte, reserva tu hotel,
              <br />
              ordena comida o mira streaming, todo sin salir..
            </M.p>
            <M.div className="space-y-4 ml-1 opacity-90">
              {[
                " Delivery, transporte, reservas",
                " Miniapps sin descargas extras",
                " Integración con pagos instantáneos",
                "Experiencia optimizada según tu país",
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
                        className="w-5 h-5 text-gray-500 font-bold"
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
              <button className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105  ">
                <img src={appStoreIcon} alt="" height={250} width={250} />
              </button>
              <button className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105  ">
                <img src={playStoreIcon} alt="" height={250} width={250} />
              </button>
            </M.div>
          </div>
          <M.div className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20">
            <div className="relative w-[500px] h-[500px] xl:w-[340px] xl:h-[340px] top-10  bottom-0">
              <img
                src={heroVideo}
                className="w-[300px] h-[300px]  absolute inset-0  object-contain drop-shadow-2xl scale-300 z-40 "
              />
              <M.img
                src={anim5app}
                alt="Phone"
                className="absolute bottom-[40%] left-[-70%] w-[500px] h-[200px]
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
                className="absolute bottom-[-70%] left-[-30%] w-[500px] h-[200px]
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
                className="absolute bottom-[-60%] left-[110%] w-[500px] h-[200px]
    lg:w-[150px] lg:h-[150px] drop-shadow-xl z-50"
                animate={{ y: [0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </M.div>
        </div>
      </div>
    </section>
  );
}

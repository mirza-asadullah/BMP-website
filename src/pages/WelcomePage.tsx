import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const M = motion as any;
const bgFallback = "/src/assets/bgwelcome.png";
const msgFallback = "/src/assets/msgicon.png";
const animationFallback = "/src/assets/anim/animation1.webm";
const logoFallback = "/src/assets/logowelcome.png";
export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #5B1A8C 0%, #841DC0 30%, #841DC0 70%, #5B1A8C 100%)'
      }}
    >
      {/* Background image */}
      <img
        src={bgFallback}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ mixBlendMode: 'soft-light', opacity: 1 }}
      />

      {/* Purple gradient overlay on top of image */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(91, 26, 140, 0.7) 0%, rgba(132, 29, 192, 0.6) 30%, rgba(91, 26, 140, 0.7) 60%, rgba(132, 29, 192, 0.6) 100%)',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Left dark shadow/vignette effect */}
      <div
        className="absolute z-[3] pointer-events-none"
        style={{
          left: 0,
          top: 0,
          width: '25%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(30, 10, 50, 0.8) 0%, rgba(30, 10, 50, 0.4) 40%, transparent 100%)',
        }}
      />

      {/* Right dark shadow/vignette effect */}
      <div
        className="absolute z-[3] pointer-events-none"
        style={{
          right: 0,
          top: 0,
          width: '25%',
          height: '100%',
          background: 'linear-gradient(to left, rgba(30, 10, 50, 0.8) 0%, rgba(30, 10, 50, 0.4) 40%, transparent 100%)',
        }}
      />

      {/* Logo top left */}


      {/* Main content container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 py-28 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6 mb-10">
            <div className="absolute top-6 left-10 z-30">
              <img src={logoFallback} alt="Vaihok" className="w-70 lg:w-70 h-auto" />
            </div>
            <M.h1
              className="text-5xl lg:text-7xl font-bold leading-tight mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Te damos
              <br />
              la Bienvenida
            </M.h1>

            <M.p
              className="text-xl lg:text-5xl font-medium leading-tight max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              A una experiencia sin precedentes
            </M.p>

            <M.p
              className="text-base lg:text-2xl leading-tight max-w-lg opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Aquí no solo tienes una app. Tienes tu red sin complicaciones:
              escribe, compra, paga, explora y transforma tu día... con la
              claridad de Vaihok.
            </M.p>

            <M.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={() => navigate("/home")}
                className="bg-black/80 hover:bg-black text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Descubre Vaihok
              </button>
            </M.div>
          </div>

          {/* Right content - character with chat bubble */}
          <M.div
            className="flex items-center justify-center relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Character container */}
            <div className="relative w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]">
              {/* Character image/video */}
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src={animationFallback}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain scale-125"
                />
              </div>

              {/* Chat bubble icon - positioned top right, larger and overlapping */}
              <M.img
                src={msgFallback}
                alt="chat"
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-4 w-24 h-24 lg:w-90 lg:h-90 drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </M.div>
        </div>
      </div>
    </section>
  );
}

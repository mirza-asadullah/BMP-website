import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const bgImage = "/src/assets/bg1.png";
const buttonIcon = "/src/assets/animicon/button.png";
const submitBtn = "/src/assets/pages/submitbtn.png";
const contactUsImg = "/src/assets/pages/contactus.png";
const emailIcon = "/src/assets/pages/email.png";
const anim9log = "/src/assets/animicon/anim9log.png";
const msgIcon = "/src/assets/msgicon.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = motion as any;
export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section
        className="relative w-full h-screen flex items-center overflow-hidden"
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
        <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-44 pl-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
            <M.button
              className="absolute left-1 top-45 z-[15] cursor-pointer"
              onClick={() => navigate("/home")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={buttonIcon} alt="Back" />
            </M.button>
            {/* Left — Form content */}
            <div className="space-y-6 max-w-[600px]">
              <M.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold italic leading-tight mb-  flex justify-center items-center">
                  ¿Hablamos?
                </h1>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold opacity-90 leading-relaxed  flex justify-center items-center">
                  Queremos escucharte: tus
                </p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold opacity-90 leading-relaxed  flex justify-center items-center">
                  preguntas, ideas o propuestas.
                </p>
              </M.div>
              <M.form
                className="space-y-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full bg-[#4a1d66]/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/70 outline-none focus:bg-[#4a1d66]/70 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full bg-[#4a1d66]/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/70 outline-none focus:bg-[#4a1d66]/70 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={6}
                    className="w-full bg-[#4a1d66]/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/70 outline-none focus:bg-[#4a1d66]/70 transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="pt-2 flex justify-center items-center">
                  <M.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer "
                  >
                    <img src={submitBtn} alt="Enviar" className="h-20" />
                  </M.button>
                </div>
              </M.form>
            </div>
          </div>
        </div>
        {/* Phone mockup — absolute, bottom-right of section */}
        <M.div
          className="hidden lg:block absolute bottom-0 right-50 z-10"
          style={{ width: "750px", height: "100%" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full h-full ">
            {/* Phone image */}
            <img
              src={contactUsImg}
              alt="Contact Us App"
              className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-20"
            />
            {/* Floating Mail icon — left of phone */}
            <M.img
              src={emailIcon}
              alt="Email"
              className="absolute drop-shadow-xl z-20"
              style={{ top: "40%", left: "25%", width: "150px" }}
              animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Floating User icon — top center */}
            <M.img
              src={anim9log}
              alt="User"
              className="absolute drop-shadow-xl z-0"
              style={{ top: "20%", right: "30%", width: "220px" }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            {/* Floating Chat Bubble icon — right of phone */}
            <M.img
              src={msgIcon}
              alt="Chat"
              className="absolute drop-shadow-xl z-20"
              style={{ top: "40%", right: "15%", width: "120px" }}
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </div>
        </M.div>
      </section>
    </>
  );
}

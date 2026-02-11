
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const bgImage = "/src/assets/bg1.png";
const M = motion as any;

export default function AboutUs() {
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

        {/* Back arrow button — left edge */}


        {/* Content — aligned to header width */}
        <div className="relative z-10 w-[90%] max-w-[1700px] mx-auto pt-44 pl-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
            <M.button
              className="absolute left-45 top-9 z-[15] cursor-pointer"
              onClick={() => navigate("/home")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/src/assets/animicon/button.png" alt="Back" />
            </M.button>
            {/* Left — Text content */}
            <div className="space-y-5 max-w-[950px]">
              <M.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
                style={{ fontWeight: 900, fontStyle: "italic" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Creemos en una vida
                <br />
                digital más simple.
              </M.h1>

              <M.p
                className="text-lg sm:text-xl lg:text-3xl opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                Construimos un ecosistema que conecta <br />personas, negocios y servicios en una sola app.
              </M.p>

              <M.div
                className="space-y-2 text-base sm:text-lg lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  Nuestro equipo está formado por creadores, ingenieros y
                </p>
                <p>
                  diseñadores que comparten una misma visión: hacer que
                </p>
                <p>
                  cada mensaje, pago o interacción sea más fácil y seguro.
                </p>

              </M.div>
            </div>

          </div>
        </div>

        {/* Phone mockup — absolute, bottom-right of section */}
        <M.div
          className="hidden lg:block absolute bottom-0 right-0 z-10"
          style={{ width: "750px", height: "100%" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full h-full ">
            {/* Phone image */}
            <img
              src="/src/assets/pages/aboutus.png"
              alt="About Us App"
              className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-20"
            />

            {/* Floating Box icon — top left */}
            <M.img
              src="/src/assets/animicon/anim4mt.png"
              alt="Box"
              className="absolute drop-shadow-xl z-20"
              style={{ top: "25%", left: "-5%", width: "150px" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Star/Tag icon — top right */}
            <M.img
              src="/src/assets/animicon/anim4maret.png"
              alt="Star Tag"
              className="absolute drop-shadow-xl z-10"
              style={{ top: "10%", right: "10%", width: "180px", height: "180px" }}
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </div>
        </M.div>
      </section>
    </>
  );
}

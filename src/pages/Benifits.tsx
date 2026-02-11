
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const bgImage = "/src/assets/bg1.png";
const phoneImg = "/src/assets/pages/benifits.png";
const M = motion as any;

export default function Benifits() {
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
                <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-44 pl-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
                        <M.button
                            className="absolute left-1 top-9 z-[15] cursor-pointer"
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
                                ¿Por qué
                                <br />
                                elegirnos?
                            </M.h1>

                            <M.p
                                className="text-lg sm:text-xl lg:text-3xl opacity-90 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                            >
                                La diferencia está en lo fácil que lo hacemos
                            </M.p>

                            <M.div
                                className="space-y-2 text-base sm:text-lg lg:text-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    <span className="font-bold">Todo en un solo lugar</span>
                                    <span className="opacity-80"> → Sin saltar de app en app.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Pagos con bajas comisiones</span>
                                    <span className="opacity-80"> → Rápidos y transparentes.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Seguridad garantizada</span>
                                    <span className="opacity-80"> → Chats y pagos cifrados.</span>
                                </p>
                                <p>
                                    <span className="font-bold">A tu medida</span>
                                    <span className="opacity-80"> → Funciona para personas, negocios y creadores.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Global y local</span>
                                    <span className="opacity-80"> → Multimoneda, pero conectado con tu ciudad.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Experiencia Fluida</span>
                                    <span className="opacity-80"> → Miniapps sin descargas extras.</span>
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
                            src={phoneImg}
                            alt="Benefits App"
                            className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-20"
                        />

                        {/* Floating QR icon — top right area (behind phone) */}
                        <M.img
                            src="/src/assets/animicon/anim7qr.png"
                            alt="QR Code"
                            className="absolute drop-shadow-xl z-10"
                            style={{ top: "15%", right: "15%", width: "150px", height: "150px" }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Floating Money icon — left side (behind phone) */}
                        <M.img
                            src="/src/assets/animicon/anim3money.png"
                            alt="Money"
                            className="absolute drop-shadow-xl z-0 max-w-none"
                            style={{ bottom: "-35%", left: "-95%", width: "1500px" }}
                            animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Floating Card icon — far left (behind phone) */}
                        <M.img
                            src="/src/assets/animicon/anim3mon.png"
                            alt="Card"
                            className="absolute drop-shadow-xl z-0 max-w-none"
                            style={{ bottom: "5%", left: "-5%", width: "1000px" }}
                            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        />
                    </div>
                </M.div>
            </section>
        </>
    );
}

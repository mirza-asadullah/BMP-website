
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const bgImage = "/src/assets/bg1.png";
const phoneImg = "/src/assets/pages/service.png";
const M = motion as any;

export default function Services() {
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
                                Un ecosistema
                                <br />
                                en tu bolsillo.
                            </M.h1>

                            <M.p
                                className="text-lg sm:text-xl lg:text-3xl opacity-90 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                            >
                                Todo lo que usas, integrado en una sola aplicación.
                            </M.p>

                            <M.div
                                className="space-y-2 text-base sm:text-lg lg:text-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <p>
                                    <span className="font-bold">Mensajería inteligente</span>
                                    <span className="opacity-80"> → Chats, llamadas y grupos privados.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Pagos y Wallet</span>
                                    <span className="opacity-80"> → Envía, recibe y convierte dinero al instante.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Marketplace</span>
                                    <span className="opacity-80"> → Compra lo que quieras, local o global.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Apps integradas</span>
                                    <span className="opacity-80"> → Transporte, comida, reservas y más.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Comunidades</span>
                                    <span className="opacity-80"> → Videos, música, contenidos y grupos sociales.</span>
                                </p>
                                <p>
                                    <span className="font-bold">Bienestar</span>
                                    <span className="opacity-80"> → Salud mental, nutrición y Finanzas con IA.</span>
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
                            alt="Vaihok app"
                            className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-20"
                        />

                        {/* Floating like icon — top left */}
                        <M.img
                            src="/src/assets/animicon/anim6like.png"
                            alt="Like"
                            className="absolute drop-shadow-xl"
                            style={{ top: "40%", left: "-10%", width: "250px", height: "250px" }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Service card — bottom left */}
                        <M.img
                            src="/src/assets/animicon/anim7qr.png"
                            alt="Service card"
                            className="absolute drop-shadow-xl"
                            style={{ bottom: "3%", left: "10%", width: "180px" }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Floating QR icon — bottom right */}
                        <M.img
                            src="/src/assets/pages/servicecard.png"
                            alt="QR"
                            className="absolute drop-shadow-xl"
                            style={{ top: "20%", right: "105%", width: "210px", height: "210px" }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Floating music icon — top right */}
                        <M.img
                            src="/src/assets/animicon/anim10mus.png"
                            alt="Music"
                            className="absolute drop-shadow-xl"
                            style={{ top: "32%", right: "12%", width: "120px", height: "120px" }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        />

                        {/* Floating message bubble — top right area */}
                        <M.img
                            src="/src/assets/msgicon.png"
                            alt="Message"
                            className="absolute drop-shadow-xl"
                            style={{ top: "10%", right: "15%", width: "150px", height: "150px" }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                    </div>
                </M.div>
            </section>
        </>
    );
}

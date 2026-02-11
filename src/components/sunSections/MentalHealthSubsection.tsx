
import { motion } from "framer-motion";
const bgImage = "/src/assets/bg1.png";
const heroVideo = "/src/assets/subsection/msgapp.png";
const M = motion as any;

interface MessageSubsectionProps {
    onBack?: () => void;
}

export default function MentalHealthSubsection({ onBack }: MessageSubsectionProps) {
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
            <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto pt-20 pl-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                    <div className="space-y-6">
                        <M.button
                            className="cursor-pointer"
                            onClick={onBack}
                        >
                            <img src="/src/assets/animicon/button.png" alt="" />
                        </M.button>
                        <M.h1
                            className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl leading-none line-height-0.8"
                            style={{ fontWeight: 900, fontStyle: "italic" }}
                        >
                            Imagina tu chat
                            <br />
                            con superpoderes
                        </M.h1>

                        <M.p
                            className="text-sm sm:text-base lg:text-2xl  opacity-90 leading-relaxed  line-height-0.8"
                        >
                            No solo escribes: compartes fotos, llamas, mandas
                            <br />
                            archivos y hasta dinero sin salir de la conversación.
                        </M.p>

                        <M.div className="space-y-1 text-sm sm:text-base lg:text-2xl ml-10  opacity-90">
                            <p className="text-sm sm:text-base lg:text-2xl opaci ty-90">Chats privados y seguros</p>
                            <p className="text-sm sm:text-base lg:text-2xl opacity-90">Pagos en el mismo chat</p>
                            <p className="text-sm sm:text-base lg:text-2xl opacity-90">Llamadas y videollamadas HD</p>
                            <p className="text-sm sm:text-base lg:text-2xl opacity-90">Grupos con miles de miembros</p>
                        </M.div>

                        <M.div
                            className="pt-4 flex gap-4"
                        >
                            <button
                                className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <img src="/src/assets/subsection/appstore.png" alt="" height    ={250} width={250} />
                            </button>
                            <button
                                className="text-white font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <img src="/src/assets/subsection/playstore.png" alt="" height={250} width={250} />
                            </button>
                        </M.div>
                    </div>

                    {/* Right — 3D Character Video */}
                    <M.div
                        className="hidden lg:flex items-center justify-center -translate-x-16 xl:-translate-x-20"

                    >
                        <div className="relative w-[500px] h-[500px] xl:w-[340px] xl:h-[340px] mb-20">
                            <img
                                src={heroVideo}
                                className="w-full h-full object-contain drop-shadow-2xl scale-300"
                            />

                            {/* Floating message icon — top center, above head */}
                            <M.img
                                src="/src/assets/animicon/anim2msg.png"
                                alt="Message"
                                className="absolute top-[-60%] left-[-75%] w-20 h-20 lg:w-90 lg:h-90 drop-shadow-xl"

                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Floating phone icon — bottom center-left */}
                            <M.img
                                src="/src/assets/subsection/phone.png"
                                alt="Phone"
                                className="absolute bottom-[-82%] left-[-52%] w-18 h-18 lg:w-75 lg:h-75 drop-shadow-xl"

                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />

                            {/* Floating music icon — bottom right */}
                            <M.img
                                src="/src/assets/animicon/anim2music.png"
                                alt="Music"
                                className="absolute bottom-[-45%] right-[-75%] w-18 h-18 lg:w-40 lg:h-50 drop-shadow-xl"

                                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>
                    </M.div>
                </div>
            </div>
        </section>
    );
}

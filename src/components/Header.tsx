import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const M = motion as any;

const navLinks = [
    { label: "Inicio", to: "/home" },
    { label: "Servicios", to: "/home#servicios" },
    { label: "Beneficios", to: "/home#beneficios" },
    { label: "Sobre nosotros", to: "/home#sobre-nosotros" },
    { label: "Contáctanos", to: "/home#contactanos" },
];

export default function Header() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <M.header
            className="fixed top-0 left-0 w-full z-50"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="w-[90%] max-w-[1400px] mx-auto mt-10 px-4">
                <nav
                    className="flex items-center justify-between md:justify-start gap-3 lg:gap-20 px-8 lg:px-10 py-4 lg:py-5 overflow-hidden"
                    style={{
                        borderRadius: "20px",
                        backdropFilter: "blur(10px)",
                        border: "1px solid #73338E",
                        boxShadow: "78px 78px 195px 0px rgba(34, 19, 34, 0.9), -78px -78px 156px 0px #B648D9",
                    }}
                >
                    {/* Logo */}
                    <Link to="/home" className="flex items-center gap-2 shrink-0">
                        <img
                            src="/src/assets/logo.png"
                            alt="Vaihok"
                            className="h-7 lg:h-10 w-auto lg:w-50"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-3 lg:gap-20">
                        {navLinks.map((link) => {
                            const isActive =
                                link.to === "/home"
                                    ? location.pathname === "/home"
                                    : location.hash === link.to.split("#")[1]
                                        ? true
                                        : false;
                            return (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className={`px-4 py-2 rounded-full text-2xl lg:text-lg transition-all duration-300 ${isActive
                                        ? "text-white font-bold"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile dropdown */}
                {mobileOpen && (
                    <M.div
                        className="md:hidden mt-2 rounded-2xl py-4 px-4 flex flex-col gap-1"
                        style={{
                            background: "rgba(30, 10, 60, 0.85)",
                            backdropFilter: "blur(18px) saturate(180%)",
                            border: "1px solid rgba(255,255,255,0.10)",
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className="text-white hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all text-base"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </M.div>
                )}
            </div>
        </M.header>
    );
}

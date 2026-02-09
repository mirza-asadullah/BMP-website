"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";

const carouselData = [
  {
    id: 1,
    title: "Chat",
    //description: "Comunicación segura, instantánea e inteligente.",
    content: "",
    image: "/animations/chat_animations.webm",
    route: "/chat",
    textPosition: { top: "75%", left: "10%" },
    textColor: "text-white",
    displayText: "Discover the new chat",
  },
  {
    id: 2,
    title: "Wallet",
    //description: "Tu dinero, en tus manos. Administra. Envía. Protege",
    content: "",
    image: "/animations/finance.webm",
    route: "/wallet",
    textPosition: { top: "5%", left: "10%" },
    textColor: "text-white",
    displayText: "Explore our wallet",
  },
  {
    id: 3,
    title: "Marketplace",
    //description: "Todo lo que necesitas, sin salir del ecosistema. Compra inteligente. Acceso global.",
    content: "",
    image: "/animations/maketplace.webm",
    route: "/marketplace",
    
    textColor: "text-white",
    displayText: "Shop in the marketplace",
  },
  {
    id: 4,
    title: "Apps",
    //description: "Una sola puerta a cientos de soluciones.",
    content: "",
    image: "/animations/apps.webm",
    route: "/apps",
    
    textColor: "text-white",
    displayText: "Experience our apps",
  },
  
  {
    id: 6,
    title: "Communities",
    //description: "Donde las ideas se convierten en conexiones reales. Habla, comparte y crece con otros.",
    content: "",
    image: "/animations/community.webm",
    route: "/communities",
   
    textColor: "text-white",
    displayText: "Explore and create communities",
  },
  {
    id: 7,
    title: "Music",
    //description: "El ritmo de tu vida, en tu espacio. Escucha. Descubre. Vibra.",
    content: "",
    image: "/animations/music.webm",
    route: "/music",
   
    textColor: "text-white",
    displayText: "Explore our music",
  },
  {
    id: 8,
    title: "Mental Health",
    //description: "Cuida tu cuerpo. Entiende tus señales. Salud conectada, bienestar total",
    content: "",
    image: "/animations/soludmental.webm",
    route: "/health",
    
    textColor: "text-white",
    displayText: "Improve your Mental Health",
  },
  {
    id: 9,
    title: "A.I. Finance",
    //description: "Finanzas inteligentes, decisiones poderosas. Controla, proyecta, crece.",
    content: "",
    image: "/animations/ai_fancance.webm",
    route: "/financial",
    
    textColor: "text-white",
    displayText: "Discover our A.I. Finance",
  },
  {
    id: 5,
    title: "Nutrition",
    //description: "Alimentación inteligente, diseñada para ti. Tecnología que cuida lo que comes.",
    content: "",
    image: "/animations/notion.webm",
    route: "/nutrition",
    
    textColor: "text-white",
    displayText: "Improve your nutrition",
  },
];

export function Home({
  className,
  linkState,
}: {
  className?: string;
  linkState?: any;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Play center video when component mounts or currentIndex changes
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const position = index - 4; // offset calculation
        const isCenter = position === 0;
        if (isCenter) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsUserClicked(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && !isTransitioning) {
      setIsUserClicked(true);
      const newIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }

    if (isRightSwipe && !isTransitioning) {
      setIsUserClicked(true);
      const newIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="home-bg relative w-full h-[100vh] overflow-hidden mx-auto">
      {/* Header */}
      <header
        className={
          className ? className : "bg-primary/20 backdrop-blur-24 px-6 py-4"
        }
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" state={linkState} className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BeMind Power"
              className="w-24 sm:w-32 h-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              state={linkState}
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              state={linkState}
              className="text-white hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              state={linkState}
              className="text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-white hover:text-primary hover:bg-primary/10 px-2 sm:px-3 py-1 rounded transition-colors text-sm sm:text-base">
              EN
            </button>
            <button className="text-white hover:text-primary hover:bg-primary/10 px-2 sm:px-3 py-1 bg-primary/20 rounded transition-colors text-sm sm:text-base">
              ES
            </button>
          </div>
        </div>
      </header>

      {/* Carousel Section */}
      <div className="px-2 sm:px-4 mt-8 sm:mt-20 ml-0 sm:ml-10 z-50 md:mt-[6px]">
        {/* Main carousel container */}
        <div className="relative overflow-hidden px-2 sm:px-6">
          <div 
            className="relative flex justify-center items-center w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[42rem] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Generate all visible cards including virtual ones for 4 cards on each side */}
            {Array.from({ length: 9 }, (_, i) => i - 4).map((offset) => {
              const virtualIndex = (currentIndex + offset + carouselData.length * 10) % carouselData.length;
              const item = carouselData[virtualIndex];
              const position = offset;
              const isCenter = position === 0;
              const distance = Math.abs(position);
              const isHome1 = item.image?.includes("chat_animations.webm");
              const isApps = item.image?.includes("apps.webm");
              const isWallet = item.image?.includes("password_animations.webm");
              const isNutrition = item.image?.includes("notion.webm");
              const isMusic = item.image?.includes("music.webm");
              const isMarketplace = item.image?.includes("maketplace.webm");
              
              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute will-change-transform group",
                    isCenter || distance === 1 ? "cursor-pointer" : "cursor-default",
                    isCenter
                      ? (isApps ? "w-[18rem] sm:w-[22rem] md:w-[22rem] lg:w-[24rem] xl:w-[24rem] scale-100 opacity-100 z-30" : 
                         isWallet ? "w-[18rem] sm:w-[22rem] md:w-[22rem] lg:w-[24rem] xl:w-[24rem] scale-100 opacity-100 z-30" :
                         isNutrition ? "w-[18rem] sm:w-[22rem] md:w-[22rem] lg:w-[24rem] xl:w-[24rem] scale-100 opacity-100 z-30" :
                         "w-[20rem] sm:w-[24rem] md:w-[24rem] lg:w-[28rem] xl:w-[28rem] scale-110 opacity-100 z-30")
                      : distance === 1
                      ? "w-48 sm:w-64 md:w-[20rem] lg:w-[22rem] scale-75 opacity-70 z-20 blur-[0.5px]"
                      : distance === 2
                      ? "w-24 sm:w-32 md:w-[16rem] lg:w-[18rem] scale-65 opacity-50 z-10 blur-[1px]"
                      : distance === 3
                      ? "w-16 sm:w-24 md:w-[12rem] lg:w-[14rem] scale-55 opacity-30 z-5 blur-[2px]"
                      : "w-12 sm:w-20 md:w-[8rem] lg:w-[10rem] scale-45 opacity-20 z-0 blur-[3px]",

                    distance > 4 ? "invisible" : "visible"
                  )}
                  animate={{
                    x: position * (isMobile ? 180 : 300),
                    rotateY: position * (isMobile ? 5 : 15),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.8
                  }}
                  whileHover={isCenter ? { 
                    scale: isApps || isWallet || isNutrition ? 0.85 : 0.95,
                    rotateY: 0,
                    transition: { duration: 0.3 }
                  } : {}}
                  whileTap={isCenter ? { 
                    scale: isApps || isWallet || isNutrition ? 0.82 : 0.92,
                    transition: { duration: 0.1 }
                  } : {}}
                  onClick={() => {
                    if (isCenter) {
                      navigate(item.route);
                    } else if (distance === 1) {
                      setIsTransitioning(true);
                      setIsUserClicked(true);
                      // Right side animations move right (forward), left side animations move left (backward)
                      const newIndex = position > 0 
                        ? (currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1)
                        : (currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1);
                      setCurrentIndex(newIndex);
                      setTimeout(() => setIsTransitioning(false), 1000);
                    }
                  }}
                >
                  <div className="relative">
                    {item.image.endsWith('.webm') ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[offset + 4] = el;
                          if (el) {
                            if (isCenter) {
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          }
                        }}
                        className={cn(
                          "w-full transition-all duration-700 ease-in-out",
                          isCenter
                            ? (isApps ? "h-[24rem] sm:h-[28rem] md:h-[28rem] lg:h-[30rem] xl:h-[30rem] ml-[-0px] brightness-100 contrast-100" : 
                               isWallet ? "h-[24rem] sm:h-[28rem] md:h-[28rem] lg:h-[30rem] xl:h-[30rem] ml-[-0px] brightness-100 contrast-100" :
                               isNutrition ? "h-[24rem] sm:h-[28rem] md:h-[28rem] lg:h-[30rem] xl:h-[30rem] ml-[-0px] brightness-100 contrast-100" :
                               "h-[26rem] sm:h-[32rem] md:h-[32rem] lg:h-[36rem] xl:h-[36rem] ml-[-0px] brightness-100 contrast-100")
                            : distance === 1
                            ? "h-72 sm:h-88 md:h-[28rem] lg:h-[30rem] blur-[0.5px] brightness-90 contrast-90"
                            : distance === 2
                            ? "h-40 sm:h-52 md:h-[24rem] lg:h-[26rem] blur-[1px] brightness-80 contrast-80"
                            : distance === 3
                            ? "h-32 sm:h-44 md:h-[20rem] lg:h-[22rem] blur-[2px] brightness-70 contrast-70"
                            : "h-24 sm:h-36 md:h-[16rem] lg:h-[18rem] blur-[3px] brightness-60 contrast-60"
                        )}
                        src={item.image}
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <div
                        className={cn(
                          "w-full bg-cover bg-center transition-all duration-700 ease-in-out",
                          isCenter
                            ? (isApps ? "h-48 sm:h-56 md:h-[20rem] lg:h-[22rem] xl:h-[22rem] ml-[-0px] brightness-100 contrast-100" : 
                               isWallet ? "h-48 sm:h-56 md:h-[20rem] lg:h-[22rem] xl:h-[22rem] ml-[-0px] brightness-100 contrast-100" :
                               isNutrition ? "h-48 sm:h-56 md:h-[20rem] lg:h-[22rem] xl:h-[22rem] ml-[-0px] brightness-100 contrast-100" :
                               "h-56 sm:h-64 md:h-[24rem] lg:h-[26rem] xl:h-[26rem] ml-[-0px] brightness-100 contrast-100")
                            : distance === 1
                            ? "h-48 sm:h-52 md:h-[20rem] lg:h-[22rem] blur-[0.5px] brightness-90 contrast-90"
                            : distance === 2
                            ? "h-36 sm:h-40 md:h-[16rem] lg:h-[18rem] blur-[1px] brightness-80 contrast-80"
                            : distance === 3
                            ? "h-28 sm:h-32 md:h-[12rem] lg:h-[14rem] blur-[2px] brightness-70 contrast-70"
                            : "h-20 sm:h-24 md:h-[8rem] lg:h-[10rem] blur-[3px] brightness-60 contrast-60"
                        )}
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    )}
                    
                    {/* Title overlay on image */}
                    <motion.div 
                      className={cn(
                        `absolute ${item.textColor} z-20 w-full text-center`,
                        !isCenter && distance === 1 ? "blur-[0.5px]" :
                        !isCenter && distance === 2 ? "blur-[1px]" :
                        !isCenter && distance >= 3 ? "blur-[2px]" : ""
                      )}
                      style={{ 
                        bottom: isHome1 || isMusic || isMarketplace ? "16%" : "5%",
                        left: "0%"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.h2 
                        className={cn(
                          "font-bold mb-2 drop-shadow-2xl text-shadow-lg",
                          isCenter 
                            ? "text-xl sm:text-2xl md:text-3xl lg:text-2xl" 
                            : distance === 1
                            ? "text-lg sm:text-xl md:text-2xl lg:text-xl"
                            : distance === 2
                            ? "text-base sm:text-lg md:text-xl lg:text-lg"
                            : "text-sm sm:text-base md:text-lg lg:text-base"
                        )}
                        whileHover={isCenter ? {
                          scale: 1.05,
                          textShadow: "0 0 20px rgba(255,255,255,0.8)",
                          transition: { duration: 0.3 }
                        } : {}}
                      >
                        {item.title}
                      </motion.h2>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-4 sm:mt-auto gap-4 sm:gap-6 md:gap-12 mb-4 sm:mb-8 md:mb-12 lg:mb-16">
            <button
              onClick={() => {
                if (!isTransitioning) {
                  setIsUserClicked(true);
                  const newIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                }
              }}
              className="h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white grid place-items-center transition-colors disabled:opacity-50 touch-manipulation"
              disabled={isTransitioning}
            >
              <svg
                width="28"
                height="28"
                className="sm:w-10 sm:h-10 md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <motion.div 
              className="text-white font-extrabold text-base sm:text-lg md:text-xl lg:text-4xl tracking-tight text-center px-2 max-w-[200px] sm:max-w-none"
              key={isUserClicked ? carouselData[currentIndex].displayText : "Select a card"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                {isUserClicked ? carouselData[currentIndex].displayText : "Select a card"}
              </span>
            </motion.div>

            <button
              onClick={() => {
                if (!isTransitioning) {
                  setIsUserClicked(true);
                  const newIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
                  setCurrentIndex(newIndex);
                }
              }}
              className="h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white grid place-items-center transition-colors disabled:opacity-50 touch-manipulation"
              disabled={isTransitioning}
            >
              <svg
                width="28"
                height="28"
                className="sm:w-10 sm:h-10 md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
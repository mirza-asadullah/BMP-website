import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="global-bg">
      <header
        className="bg-primary/20 backdrop-blur-24 px-6 py-4"
        style={{
          position: "absolute",
          top: 0,
          zIndex: 1000,
          width: "100vw",
          maxWidth: "1920px",
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BeMind Power" className="w-32 h-auto" />
          </Link>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-primary hover:bg-primary/10 px-3 py-1 rounded transition-colors">
              English
            </button>
            <button className="text-white hover:text-primary hover:bg-primary/10 px-3 py-1 bg-primary/20 rounded transition-colors">
              Español
            </button>
          </div>
        </div>
      </header>
      {/* Back Arrow Icon */}
      <Link
        to="/"
        className="absolute top-20 sm:top-24 md:top-28 lg:top-24 left-4 sm:left-6 md:left-8 lg:left-12 z-[1001] text-white hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:border-primary/50 bg-white/10 backdrop-blur-sm hover:bg-white/20"
      >
        <svg
          width="20"
          height="20"
          className="sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* 404 Image */}
          <div className="flex justify-center lg:justify-start relative order-2 lg:order-1">
            <img
              src="/404image.png"
              alt="404 Error"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
          </div>
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4 sm:px-0 mb-8">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/"
                className="luxury-button px-6 py-3 text-white font-semibold rounded-lg text-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

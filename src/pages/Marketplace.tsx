import { Link } from 'react-router-dom'

export function Marketplace() {
  return (
    <div className='global-bg'>
      <header className="bg-primary/20  backdrop-blur-24 px-6 py-4" style={{
        position: 'absolute',
        top: 0,
        zIndex: 1000,
        width: '100vw',
        maxWidth: '1920px'
      }}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BeMind Power" className="w-32 h-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors">
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
      <Link to="/" className="absolute top-20 sm:top-24 md:top-28 lg:top-24 left-4 sm:left-6 md:left-8 lg:left-12 z-[1001] text-white hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:border-primary/50 bg-white/10 backdrop-blur-sm hover:bg-white/20">
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat Image */}
          <div className="flex justify-center lg:justify-start relative z-30">
            <video 
              src="/animations/maketplace.webm" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
            
            <img 
              src="/marketIcons.png"
              alt="Market Icons" 
              className="absolute top-60 sm:top-80 md:left-30 left-30 w-40 h-40 lg:w-80 lg:h-80 z-[-1]"
            />
            
            <img 
              src="/marketplaceBucket.png"
              alt="Marketplace Bucket"
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 z-10 rotate-[-60deg] z-[-1]"
            />
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Marketplace
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Shop without searching, find what you need. Products, services, and experiences curated for you. Real prices, no fuss, and all paid for with your wallet, right from the app.
            </p>
          </div>
        </div>
      </section>



    </div>
  )
}
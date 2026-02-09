import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Splash() {
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canSkip, setCanSkip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCanSkip(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const endSplash = () => {
    sessionStorage.setItem('hasVisitedSplash', 'true')
    navigate('/', { replace: true })
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
        src={encodeURI('/intro_video_app.mp4')}
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        onCanPlay={() => videoRef.current?.play().catch(() => {/* ignore */})}
        onEnded={endSplash}
      />



      {/* Header overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <header className="bg-primary/20 backdrop-blur-24 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <button onClick={endSplash} className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="BeMind Power" className="w-24 h-12 sm:w-32 sm:h-16" />
            </button>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button onClick={endSplash} className="text-white hover:text-primary transition-colors text-sm xl:text-base">
                Home
              </button>
              <button onClick={() => { sessionStorage.setItem('hasVisitedSplash', 'true'); navigate('/about', { replace: true }); }} className="text-white hover:text-primary transition-colors text-sm xl:text-base">
                About Us
              </button>
              <button onClick={() => { sessionStorage.setItem('hasVisitedSplash', 'true'); navigate('/contact', { replace: true }); }} className="text-white hover:text-primary transition-colors text-sm xl:text-base">
                Contact
              </button>
            </nav>

            {/* Language Selector */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-white hover:text-primary hover:bg-primary/10 px-2 sm:px-3 py-1 rounded transition-colors text-xs sm:text-sm">
                EN
              </button>
              <button className="text-white hover:text-primary hover:bg-primary/10 px-2 sm:px-3 py-1 bg-primary/20 rounded transition-colors text-xs sm:text-sm">
                ES
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Skip button - bottom right */}
      <div className="absolute bottom-6 right-4 sm:right-6 z-[70]">
        <button
          className="px-3 sm:px-4 py-2 rounded-md text-white bg-black/50 hover:bg-black/60 border border-white/20 text-sm sm:text-base transition-all disabled:opacity-50"
          onClick={endSplash}
          disabled={!canSkip}
        >
          Skip
        </button>
      </div>
    </div>
  )
}



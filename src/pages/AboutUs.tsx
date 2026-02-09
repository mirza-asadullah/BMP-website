import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="global-bg">
      <header className="bg-primary/20 backdrop-blur-24 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BeMind Power" className="w-40 h-auto" />
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

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <p className="text-foreground text-lg">
          Learn more about our mission and values.
        </p>
      </div>
    </div>
  );
}

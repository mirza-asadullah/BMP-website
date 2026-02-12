import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { NotFound } from "./pages/NotFound";
import WelcomeSection from "./pages/WelcomePage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Benifits from "./pages/Benifits";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const first = useRef(true);

  // On initial page load (mount), always redirect to welcome page.
  // This does not affect client-side navigation after the app is loaded.
  useEffect(() => {
    if (!first.current) return;
    first.current = false;
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<WelcomeSection />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/benefits" element={<Benifits />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;

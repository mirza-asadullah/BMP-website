import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import WelcomeSection from "./pages/WelcomePage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Benifits from "./pages/Benifits";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
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

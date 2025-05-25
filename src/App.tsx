import About from "./pages/About";
import Contact from "./pages/Contact";
import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
// import theme from "./theme";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <HeroSection /> */}

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

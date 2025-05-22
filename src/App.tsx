import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <ChakraProvider>
        <HeroSection />
      </ChakraProvider>
    </div>
  );
};

export default App;

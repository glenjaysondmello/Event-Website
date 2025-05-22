import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import theme from "./theme";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <ChakraProvider resetCSS={false}>
        <HeroSection />
      </ChakraProvider>
    </div>
  );
};

export default App;

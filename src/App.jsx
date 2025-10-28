import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Performamce from "./components/Performance";
import ProductViewer from "./components/ProductViewer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performamce />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;

import React, { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./components/Navigation/index";
import Home from "./components/Hero/index";
import Solutions from "./components/Solutions/index";
import WhyUs from "./components/WhyUs/index";
import Services from "./components/Services/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import SocialNetworks from "./components/SocialNetworks";

gsap.core.globals("ScrollTrigger", ScrollTrigger);

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="app">
      <Navigation />
      <main>
        <Home setScrollWidth={setScrollWidth} />
        <Solutions scrollWidth={scrollWidth} />
        <SocialNetworks scrollWidth={scrollWidth} />
        <WhyUs scrollWidth={scrollWidth} />
        <Services scrollWidth={scrollWidth} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

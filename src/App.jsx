import React from "react";
import Navigation from "./components/Navigation/index";
import Home from "./components/Hero/index";
import Solutions from "./components/Solutions/index";
import WhyUs from "./components/WhyUs/index";
import Services from "./components/Services/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import SocialNetworks from "./components/SocialNetworks";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        <Solutions />
        <SocialNetworks />
        <WhyUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

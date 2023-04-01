import { Element } from "react-scroll";
import { useEffect, useState } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Splash from "./components/splash/Splash";
import TileMenu from "./components/menu/Menu";
import Section from "./components/layout/Section";
import "./styles/app.css";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app" style={{ backgroundPositionY: `${offsetY * 0.5}px` }}>
      <Section>
        <Header />
      </Section>
      <Section>
        <Splash />
      </Section>
      <Section maxWidth="960px">
        <Element id="menu-scroll">
            <TileMenu />
        </Element>
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export default App;

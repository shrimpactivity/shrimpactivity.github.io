import { Element } from "react-scroll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Splash from "./components/splash/Splash";
import TileMenu from "./components/menu/Menu";
import "./styles/app.css";
import CenterChild from "./components/layout/CenterChild";

const App = () => {
  return (
    <div className="app">
      <div className="section">
        <Header />
      </div>
      <div className="parallax-window"></div>
      <div className="section">
        <CenterChild>
          <Splash />
        </CenterChild>
      </div>
      <div className="parallax-window"></div>
      <div className="section">
        <Element id="menu-scroll">
          <CenterChild>
            <TileMenu />
          </CenterChild>
        </Element>
      </div>
      <div className="parallax-window"></div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
};

export default App;

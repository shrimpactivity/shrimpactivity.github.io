import Links from "./components/Links";
import Splash from "./components/Splash";
import TileMenu from "./components/menu/Container";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Links />
      <div className="parallax-window">parallax</div>
      <div className="section">
        
        <div className="center-content">
          <Splash />
        </div>
      </div>
      <div className="section">
        <div className="center-content">
          <TileMenu />
        </div>
      </div>
    </div>
  );
};

export default App;

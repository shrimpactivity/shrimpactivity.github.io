import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import MenuBackground from "../../assets/menu-background.png";
import ScrollButton from "../ScrollButton";
import Tile from "./Tile";
import About from './content/About';

import "../../styles/menu.css";
import "../../styles/card.css";
import Projects from "./content/Projects";


const STEP_BREAKPOINT = 960;
const TILE_NAMES = [
  "About",
  "Projects",
  "Likes",
  "Art",
  "Photos",
  "Connect",
];
const TILE_CONTENTS = [
  <About />,
  <Projects />,
  "Recom-mends",
  "Art",
  "Photos",
  "Connect",
];

const Container = (props) => {

  const [selectedTile, setSelectedTile] = useState(-1);
  const [width, setWidth] = useState(0);
  const refTilesContainer = useRef();

  useEffect(() => {
    if (!refTilesContainer.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setWidth(refTilesContainer.current.offsetWidth);
    });
    resizeObserver.observe(refTilesContainer.current);
    return () => resizeObserver.disconnect();
  }, []);

  const handleTileClick = (index) => {
    if (selectedTile === index) {
      setSelectedTile(-1);
    } else {
      setSelectedTile(index);
    }
  };

  const getTileTop = (index) => {
    if (selectedTile !== -1 || width < STEP_BREAKPOINT) {
      return "0px";
    }
    return `${index * 85}px`;
  };

  const backgroundStyle = {
    opacity: selectedTile === -1 ? null : 0, 
    height: selectedTile === -1 ? '600px' : '0px', 
  }

  return (
    <div className="menu-container">
      <img className="menu-background" src={MenuBackground} style={backgroundStyle}/>
      <div className="tiles-container" ref={refTilesContainer}>
        {TILE_NAMES.map((name, index) => {
          return (
            <div
              className="tile-wrapper"
              key={name}
              style={{ top: getTileTop(index) }}
              onClick={() => handleTileClick(index)}
            >
              <Tile
                selected={selectedTile === index}
                borderSize="8px"
              >
                {name}
              </Tile>
            </div>
          );
        })}
      </div>
      <div className="menu-content-container" style={{display: selectedTile === -1 ? 'none' : 'flex'}}>
        {TILE_CONTENTS[selectedTile]}
        <div className="up-caret">
          <ScrollButton to="menu-scroll" direction="up" />
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {};

export default Container;

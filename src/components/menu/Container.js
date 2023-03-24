import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/menu.css";

import Tile from "./Tile";

const TILE_NAMES = ["About", "Projects", "Recom-mends", "Art", "Photos", "Connect"];

const Container = (props) => {
  /**
   * When you click a tile:
   *  - move all tiles to the left
   *  - show the content window of the selected tile
   */

  const [selectedTile, setSelectedTile] = useState(-1);
  const [width, setWidth] = useState(0);
  const refTilesContainer = useRef();

  useEffect(() => {
    if (!refTilesContainer.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setWidth(refTilesContainer.current.offsetWidth);
    })
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
    if (selectedTile === -1) {
      return `${0.9 * index * getTileSize()}px`;
    }
    return "0px";
  }

  const getTileSize = () => {
    if (width > TILE_NAMES.length * 100) {
      return 100;
    }
    return Math.max(50, Math.floor(width / TILE_NAMES.length));
  }

  return (
    <div className="menu-container" > 
      <div className="tiles-container" ref={refTilesContainer}>
        {TILE_NAMES.map((name, index) => {
          return (
            <div
              className="tile-wrapper"
              key={name}
              style={{ top: getTileTop(index) }}
              onClick={() => handleTileClick(index)}
            >
              <Tile text={name} selected={selectedTile === index}/>
            </div>
          );
        })}
      </div>
      <div className="menu-content-container">
        
      </div>
    </div>
  );
};

Container.propTypes = {};

export default Container;

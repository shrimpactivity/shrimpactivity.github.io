import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import ArrowUp from "../../assets/caret-up.png";
import Tile from "./Tile";

import "../../styles/menu.css";

const TILE_SIZE = 120;
const TILE_NAMES = [
  "About",
  "Projects",
  "Recom-mends",
  "Art",
  "Photos",
  "Connect",
];

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
    if (selectedTile !== -1 || width <= TILE_SIZE * 3) {
      return "0px";
    }

    let top = 0.6 * index * TILE_SIZE;
    let position = (index + 1) * TILE_SIZE;
    if (width < position) {
      let row = Math.floor(position / width);
      top -= row * TILE_SIZE;
      
    }
    return `${top}px`;
  };

  const getTileSize = () => {
    return `${TILE_SIZE}px`;
  };

  return (
    <div className="menu-container">
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
                width={getTileSize()}
                height={getTileSize()}
                selected={selectedTile === index}
              >
                {name}
              </Tile>
            </div>
          );
        })}
      </div>
      <div className="menu-content-container" style={{display: selectedTile === -1 ? 'none' : 'block'}}>
        <div className="up-caret">
          <Link to="menu-scroll" smooth={true}>
            <img src={ArrowUp} />
          </Link>
        </div>
      </div>
      <div className="menu-color-block one"></div>
    </div>
  );
};

Container.propTypes = {};

export default Container;

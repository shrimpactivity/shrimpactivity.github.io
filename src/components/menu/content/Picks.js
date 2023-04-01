import React, { useState, useRef } from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";
import { books, games, albums } from "../../../data/picks";
import ShuffleIcon from "../../../assets/icons/shuffle.png";

const shuffle = (list) => {
  let i, j, x;
  for (i = 0; i < list.length; i += 1) {
    j = Math.floor(Math.random() * (list.length - i) + i);
    x = list[i];
    list[i] = list[j];
    list[j] = x;
  }
  return list;
};

const shuffledBooks = shuffle(books);
const shuffledGames = shuffle(games);
const shuffledAlbums = shuffle(albums);

const Picks = (props) => {
  const [index, setIndex] = useState(0);
  
  const handleRefresh = () => {
    setIndex(index + 1);
  };

  const book = shuffledBooks[index % shuffledBooks.length];
  const game = shuffledGames[index % shuffledGames.length];
  const album = shuffledAlbums[index % shuffledAlbums.length];

  return (
    <div className="menu-content">
      <div className="menu-content-header">
        <p style={{ textAlign: "center" }}>
          Bored? Below are a few things I would recommend.
        </p>
      </div>
      <div className="shuffle-button" onClick={handleRefresh}>
        <img src={ShuffleIcon} alt="shuffle button" />
      </div>
      <CardContainer>
        <Card title="Books" image={book.url} imageWidth="180px">
          {book.title}
        </Card>
        <Card title="Games" image={game.url}>
          {game.title}
        </Card>
        <Card title="Albums" image={album.url}>
          {album.title}
        </Card>
      </CardContainer>
    </div>
  );
};

export default Picks;

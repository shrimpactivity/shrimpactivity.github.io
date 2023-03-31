import React, { useState, useRef } from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";
import { books, games, albums } from "../../../data/picks";
import ShuffleIcon from "../../../assets/icons/shuffle.png";

const chooseRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

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

const generator = (list) => {
  const shuffled = shuffle(list);
  const current = 0;
  return () => {
    const result = shuffled[current];
    current += 1;
    return result;
  };
};

const Picks = (props) => {
  const picksRef = useRef({
    books: shuffle(books),
    games: shuffle(games),
    albums: shuffle(albums),
  });

  const [index, setIndex] = useState(0);

  const refreshPicks = () => {
    setIndex(index + 1);
    console.log(picksRef.current.games);
  };

  const book = picksRef.current.books[index % picksRef.current.books.length];
  const game = picksRef.current.games[index % picksRef.current.games.length];
  const album = picksRef.current.albums[index % picksRef.current.albums.length];

  return (
    <div className="menu-content">
      <div className="menu-content-header">
        <p style={{ textAlign: "center" }}>
          Bored? Below are a few things I would recommend.
        </p>
      </div>
      <div className="shuffle-button" onClick={refreshPicks}>
        <img src={ShuffleIcon} alt="shuffle button" />
      </div>
      <CardContainer>
        <Card title="Books" image={book.url} imageWidth="50%">
          {book.title}
        </Card>
        <Card title="Games" image={game.url} imageWidth="80%">
          {game.title}
        </Card>
        <Card title="Albums" image={album.url} imageWidth="80%">
          {album.title}
        </Card>
      </CardContainer>
    </div>
  );
};

export default Picks;

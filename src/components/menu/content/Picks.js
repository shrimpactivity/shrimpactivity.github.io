import React, { useState } from 'react'

import CardContainer from "../cards/CardContainer"
import Card from '../cards/Card';
import { books, games, movies } from '../../../data/picks';
import ShuffleIcon from '../../../assets/icons/shuffle.png';

const chooseRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}

const Picks = props => {
  const [book, setBook] = useState(chooseRandom(books));
  const [game, setGame] = useState(chooseRandom(games));
  const [movie, setMovie] = useState(chooseRandom(movies));

  const randomizeBook = () => {
    setBook(chooseRandom(books));
  }

  const randomizeGame = () => {
    setGame(chooseRandom(games));
  }

  const randomizeMovie = () => {
    setMovie(chooseRandom(movies));
  }

  return (
    <div className="menu-content">
      <p style={{textAlign: "center"}}>
        Allow me to make an entertainment recommendation - below are some things I like!
      </p>
      <CardContainer>
        <Card title="Books" image={book.url} imageWidth="60%">
          <div className="shuffle-button" onClick={randomizeBook}><img src={ShuffleIcon} alt="book cover"/></div>
          {book.title}
        </Card>
        <Card title="Games" image={game.url}>
          <div className="shuffle-button" onClick={randomizeGame}><img src={ShuffleIcon} alt="video game cover"/></div>
          {game.title}
        </Card>
        <Card title="Movies" image={movie.url} imageWidth="60%">
          <div className="shuffle-button" onClick={randomizeMovie}><img src={ShuffleIcon} alt="movie cover"/></div>
          {movie.title}
        </Card>
      </CardContainer>
    </div>
  )
}

export default Picks
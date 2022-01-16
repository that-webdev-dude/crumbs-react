import { useState, useEffect } from 'react';

/** styles */
import './App.css';

class Cards {
  static #cards = [
    {
      id: 1,
      frontSrc: './assets/magnifier.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 2,
      frontSrc: './assets/square.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 3,
      frontSrc: './assets/circle.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 4,
      frontSrc: './assets/cross.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 5,
      frontSrc: './assets/plus.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 6,
      frontSrc: './assets/star.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 7,
      frontSrc: './assets/magnifier.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 8,
      frontSrc: './assets/square.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 9,
      frontSrc: './assets/circle.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 10,
      frontSrc: './assets/cross.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 11,
      frontSrc: './assets/plus.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
    {
      id: 12,
      frontSrc: './assets/star.svg',
      backSrc: './assets/back.svg',
      flipped: false,
    },
  ];

  static shuffle() {
    return [...this.#cards.sort(() => Math.random() - 0.5)];
  }
}

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Cards.shuffle());
  }, []);

  return (
    <div className='App'>
      <button>start</button>
      <div className='card-grid'>
        {cards &&
          cards.map((card) => {
            return (
              <div className='card' key={card.id}>
                {/* <img className='back' src={card.backSrc} alt='back'></img> */}
                <img className='back' src={card.frontSrc} alt='back'></img>
                <img className='front' src={card.frontSrc} alt='front'></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

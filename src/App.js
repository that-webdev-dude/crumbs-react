import { useState, useEffect } from 'react';
import CardItem from './components/CardItem';

/** styles */
import './App.css';

class Cards {
  static #cards = [
    {
      id: 1,
      frontSrc: './assets/magnifier.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 2,
      frontSrc: './assets/square.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 3,
      frontSrc: './assets/circle.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 4,
      frontSrc: './assets/cross.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 5,
      frontSrc: './assets/plus.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 6,
      frontSrc: './assets/star.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 7,
      frontSrc: './assets/magnifier.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 8,
      frontSrc: './assets/square.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 9,
      frontSrc: './assets/circle.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 10,
      frontSrc: './assets/cross.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 11,
      frontSrc: './assets/plus.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
    {
      id: 12,
      frontSrc: './assets/star.svg',
      backSrc: './assets/back.svg',
      matched: false,
    },
  ];

  static shuffle() {
    return [...this.#cards.sort(() => Math.random() - 0.5)];
  }
}

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffle = () => {
    setCards(Cards.shuffle());
    setTurns(0);
  };

  const reset = () => {
    setCardOne(null);
    setCardTwo(null);
  };

  const pick = (card) => {
    if (!cardOne) {
      setCardOne(card);
    } else {
      setCardTwo(card);
    }
  };

  const add = () => {
    setTurns((prevTurns) => {
      return prevTurns + 1;
    });
  };

  const match = () => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (
          card.frontSrc === cardOne.frontSrc &&
          card.frontSrc === cardTwo.frontSrc
        ) {
          return { ...card, matched: true };
        } else {
          return { ...card };
        }
      });
    });
  };

  const evaluate = () => {
    if (cardOne && cardTwo) {
      suspend();
      if (cardOne.frontSrc === cardTwo.frontSrc) {
        match();
      }
      setTimeout(() => {
        activate();
        reset();
        add();
      }, 1000);
    }
  };

  const suspend = () => {
    setDisabled(true);
  };

  const activate = () => {
    setDisabled(false);
  };

  useEffect(() => {
    shuffle();
    reset();
  }, []);

  useEffect(() => {
    evaluate();
  }, [cardOne, cardTwo]);

  return (
    <div className='App'>
      <h1 className='title'>..:EMgaME:..</h1>
      <button
        className='start-btn'
        onClick={() => {
          shuffle();
          reset();
        }}
      >
        start
      </button>
      <div className='card-grid'>
        {cards &&
          cards.map((card) => {
            return (
              <CardItem
                key={card.id}
                card={card}
                flipped={card === cardOne || card === cardTwo || card.matched}
                backClickHandler={() => {
                  if (!disabled) pick(card);
                }}
              ></CardItem>
            );
          })}
      </div>
      <div className='turns'>{`turns: ${turns}`}</div>
    </div>
  );
}

export default App;

import { useState } from 'react';

/** styles */
import './CardItem.css';

export default function CardItem({
  card,
  flipped,
  backClickHandler = () => {},
  frontClickHandler = () => {},
}) {
  // const [flipped, setFlipped] = useState(card.flipped);

  return (
    <div className={flipped ? 'card flipped' : 'card'}>
      <img
        alt='back'
        src={card.backSrc}
        className='back'
        onClick={() => backClickHandler()}
      ></img>
      <img
        alt='front'
        src={card.frontSrc}
        className='front'
        onClick={() => frontClickHandler()}
      ></img>
    </div>
  );
}

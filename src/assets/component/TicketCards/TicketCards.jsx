import React, { useEffect, useState } from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({ setTaskHistory }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'Cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error('Error loading JSON', err));
  }, []);

  return (
    <div>
      <div className="text-4xl lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-4 md:grid md:grid-cols-2 md:gap-3 md:place-items-center flex flex-col justify-center items-center gap-3">
        {cards.map((card) => (
          <TicketCard
            key={card.id}
            card={card}
            setTaskHistory={setTaskHistory}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketCards;

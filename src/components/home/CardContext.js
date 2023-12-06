import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
const CardContext = createContext();

export function CardProvider({ children }) {
  const [cards, setCards] = useState([]);

  const addCard = (header, description) => {
    let new_id = uuidv4();

    const newCard = {
      id: new_id,
      key: new_id,
      header: header,
      description: description,
      status: "backlog",
    };

    setCards([...cards, newCard]);
  };

  function deleteCardHandler(id) {
    let filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  }

  function changeCardStatusHandler(cardId, newStatus) {
    let currentCard = cards.filter((card) => card.id === cardId)[0];

    let newCurrentCard = {
      id: currentCard.id,
      key: currentCard.key,
      header: currentCard.header,
      description: currentCard.description,
      status: newStatus,
    };

    setCards([...cards.filter((card) => card.id !== cardId), newCurrentCard]);
  }

  function onChangeDescriptionHandler(cardId, newDescription) {
    let currentCard = cards.filter((card) => card.id === cardId)[0];
    let description = {
      description: newDescription,
    };
    let newCurrentCard = Object.assign(currentCard, description);
    setCards([...cards.filter((card) => card.id !== cardId), newCurrentCard]);
  }

  // Storage cards

  useEffect(() => {
    const data = window.localStorage.getItem("cardsStorage");
    if (data !== null) setCards(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cardsStorage", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardContext.Provider
      value={{
        addCard,
        cards,
        setCards,
        deleteCardHandler,
        changeCardStatusHandler,
        onChangeDescriptionHandler,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;

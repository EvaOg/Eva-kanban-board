import { RiDeleteBin2Line as DeleteButton } from "react-icons/ri";
import styles from "../Components.module.css";
import CardContext from "./CardContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CardsList({ status }) {
  const { cards, deleteCardHandler } = useContext(CardContext);
  const navigate = useNavigate();

  return cards
    .filter((card) => card.status === status)
    .map((card) => (
      <div className={styles.card}>
        <div
          className={styles.cardText}
          onClick={() => navigate(`/task/${card.id}`, { state: card })}
        >
          {card.header}
        </div>

        <DeleteButton
          className={styles.cardIcon}
          onClick={() => deleteCardHandler(card.id)}
        />
      </div>
    ));
}

export default CardsList;

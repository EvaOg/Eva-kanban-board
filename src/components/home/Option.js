import styles from "../Components.module.css";
import { useContext } from "react";
import CardContext from "./CardContext";

function Option({ status, newStatus, changeOptionStatus }) {
  const { cards, changeCardStatusHandler } = useContext(CardContext);

  return (
    <div className={styles.optionsList}>
      {cards
        .filter((card) => card.status === status)
        .map((el) => (
          <ul>
            <li
              key={el.id}
              onClick={() => {
                changeOptionStatus();
                changeCardStatusHandler(el.id, newStatus);
              }}
            >
              {el.header}
            </li>
          </ul>
        ))}
    </div>
  );
}

export default Option;

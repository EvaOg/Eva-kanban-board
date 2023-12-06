import { useState, useContext } from "react";
import styles from "../Components.module.css";
import CardContext from "./CardContext";

function NewCardInput({ setIsAddingNewCardActive, changeComponentState }) {
  // function NewCardInput({ setIsAddingNewCardActive }) {
  const [header, setHeader] = useState("");
  const { addCard } = useContext(CardContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (header.length > 0) {
      setHeader("");
      addCard(header, null);
      setIsAddingNewCardActive();
      changeComponentState();
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={styles.card}>
        <input
          type="text"
          className={styles.input}
          placeholder="New card"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
      </form>
      <button
        className={`${styles.btnaddCard} ${styles.btnSubmit}`}
        onClick={onSubmitHandler}
      >
        Submit
      </button>
    </>
  );
}

export default NewCardInput;

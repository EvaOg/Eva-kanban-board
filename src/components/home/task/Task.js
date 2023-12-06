import { useLocation } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { useContext } from "react";
import CardContext from "../CardContext";

import { useNavigate } from "react-router-dom";
import styles from "../../Components.module.css";
import Description from "./Description";

const Task = ({ id }) => {
  const url_id = useLocation().state;
  const navigate = useNavigate();

  const { cards } = useContext(CardContext);

  const header = cards.find((card) => card.id === url_id).header;
  const description = cards.find((card) => card.id === url_id).description;

  return (
    <div className={styles.task}>
      <SlClose className={styles.closeIcon} onClick={() => navigate("/")} />
      <div className={styles.descriptionMainBlock}>
        <h1>{header}</h1>
        <Description
          taskDescr={description}
          url_id={url_id}
          // onChangeDescription={onChangeDescriptionHandler}
        />
      </div>
    </div>
  );
};

export default Task;

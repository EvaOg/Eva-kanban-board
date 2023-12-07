import { useLocation } from "react-router-dom";
import { SlClose } from "react-icons/sl";

import { useNavigate } from "react-router-dom";
import styles from "../../Components.module.css";
import Description from "./Description";

const Task = ({ card }) => {
  const currentCard = useLocation().state;

  const navigate = useNavigate();

  return (
    <div className={styles.task}>
      <SlClose className={styles.closeIcon} onClick={() => navigate("/")} />
      <div className={styles.descriptionMainBlock}>
        <h1>{currentCard.header}</h1>
        <Description
          taskDescr={currentCard.description}
          url_key={currentCard.key}
        />
      </div>
    </div>
  );
};

export default Task;

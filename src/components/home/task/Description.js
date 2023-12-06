import { useState, useContext } from "react";
import { SlNote } from "react-icons/sl";
import styles from "../../Components.module.css";
import CardContext from "../CardContext";

function Description({ taskDescr, url_id }) {
  const [newDescription, setNewDescription] = useState(taskDescr);
  const [isEditting, setIsEditting] = useState(false);
  const { onChangeDescriptionHandler } = useContext(CardContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (newDescription.length > 0) {
      setNewDescription(newDescription);
      onChangeDescriptionHandler(url_id, newDescription); // sending newDescription to CardContext
      setIsEditting(!isEditting);
    }
  };

  return (
    <div className={styles.descriptionBlock}>
      <SlNote
        className={styles.descriptionIcon}
        onClick={() => setIsEditting(!isEditting)}
      />
      {isEditting ? (
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className={styles.descriptionInput}
            placeholder=""
            // placeholder={
            //   !newDescription ? "There is no description" : newDescription
            // }
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </form>
      ) : newDescription ? (
        newDescription
      ) : (
        "There is no description"
      )}
    </div>
  );
}

export default Description;

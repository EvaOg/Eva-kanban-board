import { useState, useContext } from "react";
import { SlNote } from "react-icons/sl";
import styles from "../../Components.module.css";
import CardContext from "../CardContext";

function Description({ taskDescr, url_key }) {
  const [newDescription, setNewDescription] = useState(taskDescr);
  const [isEditting, setIsEditting] = useState(false);
  const { onChangeDescriptionHandler } = useContext(CardContext);

  const onSubmitHandler = () => {
    if (newDescription.length > 0) {
      setNewDescription(newDescription);
      onChangeDescriptionHandler(url_key, newDescription); // sending newDescription to CardContext
      setIsEditting(!isEditting);
    }
  };

  return (
    <>
      <div className={styles.descriptionBlock}>
        <SlNote
          className={styles.descriptionIcon}
          onClick={() => setIsEditting(!isEditting)}
        />
        <p
          className={styles.descriptionIconP}
          onClick={() => setIsEditting(!isEditting)}
        >
          Edit
        </p>
      </div>
      {isEditting ? (
        <div className={styles.descriptionForm}>
          <input
            type="text"
            className={styles.descriptionInput}
            placeholder=""
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={(e) => onSubmitHandler(e.target.value)}
          />
        </div>
      ) : newDescription ? (
        newDescription
      ) : (
        "There is no description"
      )}
    </>
  );
}

export default Description;

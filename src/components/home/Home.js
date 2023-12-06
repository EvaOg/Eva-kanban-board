import { useContext, useState } from "react";
import styles from "../Components.module.css";

import Header from "./Header";
import NewCardInput from "./NewCardInput";
import CardsList from "./CardsList";
import Option from "./Option";
import CardContext from "./CardContext";
import Button from "./Button";

function Home() {
  const [isAddingNewCardActive, setIsAddingNewCardActive] = useState(true);
  const [optionListReady, setOptionListReady] = useState(false);
  const [optionListInProgress, setOptionListInProgres] = useState(false);
  const [optionListFinished, setOptionListFinished] = useState(false);
  const [component, setComponent] = useState([]);
  const { cards } = useContext(CardContext);

  function cardsNumberStatus(status) {
    return cards.filter((card) => card.status === status).length;
  }

  function addCardButtonHandler() {
    setComponent(["create component"]);
    setIsAddingNewCardActive(!isAddingNewCardActive);
  }

  return (
    <div className={styles.home}>
      <div className={styles.block}>
        <Header headerName={"Backlog"} />
        <div className={styles.cardsList}>
          <CardsList status={"backlog"} />
          {component.map((item, i) => (
            <NewCardInput
              changeComponentState={() => setComponent([])}
              setIsAddingNewCardActive={() =>
                setIsAddingNewCardActive(!isAddingNewCardActive)
              }
            />
          ))}

          {isAddingNewCardActive && (
            <Button
              className={styles.btnaddCard}
              onClick={addCardButtonHandler}
            />
          )}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"Ready"} />
        <div className={styles.cardsList}>
          <CardsList status={"ready"} />
          {cardsNumberStatus("backlog") > 0 && (
            <Button
              className={styles.btnaddCard}
              onClick={() => setOptionListReady(!optionListReady)}
            />
          )}
          {optionListReady && (
            <Option
              status={"backlog"}
              newStatus={"ready"}
              changeOptionStatus={() => setOptionListReady(!optionListReady)}
            />
          )}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"In Progress"} />
        <div className={styles.cardsList}>
          <CardsList status={"inProgress"} />
          {cardsNumberStatus("ready") > 0 && (
            <Button
              className={styles.btnaddCard}
              onClick={() => setOptionListInProgres(!optionListInProgress)}
            />
          )}
          {optionListInProgress && (
            <Option
              status={"ready"}
              newStatus={"inProgress"}
              changeOptionStatus={() =>
                setOptionListInProgres(!optionListInProgress)
              }
            />
          )}
        </div>
      </div>

      <div className={styles.block}>
        <Header headerName={"Finished"} />
        <div className={styles.cardsList}>
          <CardsList status={"finished"} />
          {cardsNumberStatus("inProgress") > 0 && (
            <Button
              className={styles.btnaddCard}
              onClick={() => setOptionListFinished(!optionListFinished)}
            />
          )}
          {optionListFinished && (
            <Option
              status={"inProgress"}
              newStatus={"finished"}
              changeOptionStatus={() =>
                setOptionListFinished(!optionListFinished)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

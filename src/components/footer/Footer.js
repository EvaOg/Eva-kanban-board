import styles from "../Components.module.css";
import CardContext from "../home/CardContext";
import { useContext } from "react";

const Footer = () => {
  const { cards } = useContext(CardContext);

  let finishCardsNumber = cards.filter(
    (card) => card.status === "finished"
  ).length;

  let backlogCardsNumber = cards.filter(
    (card) => card.status === "backlog"
  ).length;

  return (
    <footer className={styles.footer}>
      <div>
        Active tasks: {backlogCardsNumber} Finished tasks: {finishCardsNumber}{" "}
      </div>
      <div className={styles.footerP2}>Kanban board by Eva, 2023</div>
    </footer>
  );
};

export default Footer;

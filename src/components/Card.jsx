import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h3>Card Title</h3>
      <p>Card content goes here.</p>
    </div>
  );
};

export default Card;

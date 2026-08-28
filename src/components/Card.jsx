import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/Card.module.css";

const Card = ({ name, /* description, */ image, price }) => {
  return (
    <div className={styles.card}>
      {/* <p>{description}</p> */}
      <figure className={styles.figure}>
        <img src={image} alt={name} />
        <figcaption className={styles.price}>{price}</figcaption>
      </figure>
      <a href={`https://wa.me/527771395795?text=Hola,%20estoy%20interesado%20en%20el%20reloj%20${name}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        ¡Lo quiero!
      </a>
      <h4>{name}</h4>
    </div>
  );
};

export default Card;

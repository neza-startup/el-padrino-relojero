import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../styles/Card.module.css";

const Card = ({ id, name, description, image, price }) => {

  console.log("Card props:", { id, name, image, price });

  const isHighlighted = window.location.hash === `#watch-${id}`;

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?tab=Relojes#watch-${id}`;

    const shareData = {
      title: 'El Padrino Relojero',
      text: `¡Mira este reloj! ${name} por ${price}`,
      url/* : window.location.href, */
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Contenido compartido exitosamente'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
      /* navigator.clipboard.writeText(url);
      alert('Enlace copiado al portapapeles.'); */
      alert('La función de compartir no está disponible en este navegador.');
    }
  };

  return (
    <div className={`${styles.card} ${isHighlighted ? styles.highlighted : ''
      }`}
      id={`watch-${id}`}>
      {/* <p>{description}</p> */}
      <h4>{name}</h4>
      <figure className={styles.figure}>
        <img src={image} alt={name} />
        <figcaption className={styles.price}>{price}</figcaption>
      </figure>
      {/* description */}

      <p className={styles.description}>
        {description}
      </p>

      <a href={`https://wa.me/527771395795?text=Hola,%20estoy%20interesado%20en%20el%20reloj%20${name}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        ¡Lo quiero!
      </a>
      <button className={styles.shareButton} onClick={handleShare}>
        <FontAwesomeIcon icon={faShare} className={styles.icon} />
        Compartir
      </button>
    </div>
  );
};

export default Card;

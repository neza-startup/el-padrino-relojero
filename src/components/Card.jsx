import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
  }

  const handleRight = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
  }, [image.length]);

  /** @note left, middle and right images */
  /* const getVisibleImages = () => {
    return [
      image[(currentIndex - 1 + image.length) % image.length],
      image[currentIndex],
      image[(currentIndex + 1) % image.length]
    ];
  }; */

  return (
    <div className={`${styles.card} ${isHighlighted ? styles.highlighted : ''
      }`}
      id={`watch-${id}`}>
      {/* <p>{description}</p> */}
      <h4>{name}</h4>
      <figure className={styles.figure}>
        <div className={styles.imageContainer}>
          <button className={styles.left} onClick={handleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* {
            getVisibleImages().map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`${name} Badge ${index + 1}`} className={styles.image} />
            ))
          } */}
          <img src={image[currentIndex]} alt={name} />
          {/* <img src={image} alt={name} /> */}
          <button className={styles.right} onClick={handleRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className={styles.dotsContainer}>
            {
              image.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : styles.inactive
                    }`}
                /* onClick={handleDotClick.bind(null, index)} */
                >
                </span>
              ))
            }
          </div>
        </div>
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

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState } from "react";
import Modal from '../components/ModalGallery';
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

  /* const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
  }

  const handleRight = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
  }, [image.length]); */

  /** @note left, middle and right images */
  /* const getVisibleImages = () => {
    return [
      image[(currentIndex - 1 + image.length) % image.length],
      image[currentIndex],
      image[(currentIndex + 1) % image.length]
    ];
  }; */

  const sliderRef = useRef(null);

  const goToImage = useCallback((index) => {
    const nextIndex = (index + image.length) % image.length;
    const slider = sliderRef.current;

    slider?.scrollTo({
      left: nextIndex * slider.clientWidth,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  }, [image.length]);

  const handleLeft = () => goToImage(currentIndex - 1);
  const handleRight = () => goToImage(currentIndex + 1);

  const handleScroll = (event) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    setCurrentIndex(Math.round(scrollLeft / clientWidth));
  };

  const touchStartX = useRef(0);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;

    // Evita activar un cambio por un toque pequeño
    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      handleLeft(); // Deslizar hacia la derecha: imagen anterior
    } else {
      handleRight(); // Deslizar hacia la izquierda: imagen siguiente
    }
  };

  const modalRef = useRef(null);

  const openModalGallery = () => {
    modalRef.current?.open(
      {
        title: `Galería de ${name}`,
        images: image,
        message: description,
        btn: "Cerrar",
      }
    );
  };

  return (
    <div className={`${styles.card} ${isHighlighted ? styles.highlighted : ''
      }`}
      id={`watch-${id}`}>
      {/* <p>{description}</p> */}
      <h4>{name}</h4>
      <figure className={styles.figure}>
        <div className={styles.imageContainer} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <button className={styles.left} onClick={handleLeft} aria-label="Imagen anterior">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* {
            getVisibleImages()image.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`${name} Badge ${index + 1}`} className={styles.image} />
          ))
          } */}

          <div className={styles.slider} ref={sliderRef} onScroll={handleScroll}>
            {image.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`${name} ${index + 1}`} className={styles.image} onClick={openModalGallery} />
            ))}
          </div>

          {/* <img src={image[currentIndex]} alt={name} /> */}
          {/* <img src={image} alt={name} /> */}
          <button className={styles.right} onClick={handleRight} aria-label="Imagen siguiente">
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
                  onClick={() => goToImage(index)}
                  aria-label={`Ir a la imagen ${index + 1}`}
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
      <Modal ref={modalRef} />
    </div>
  );
};

export default Card;

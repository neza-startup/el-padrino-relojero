import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "../styles/ModalGallery.module.css";

const Modal = forwardRef((_, ref) => {
  const modalRef = useRef(null);
  const [content, setContent] = useState({
    title: "",
    images: [],
    message: "",
    btn: ""
  });

  useImperativeHandle(ref, () => ({
    open({ title, images = [], message = "", btn = "" }) {
      setContent({
        title,
        images: Array.isArray(images) ? images : [images],
        message,
        btn,
      });

      modalRef.current?.showModal();
    },

    close() {
      modalRef.current?.close();
    },
  }));

  /* close when user press ESC key */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        modalRef.current?.close();
      }
    };

    const dialog = modalRef.current;

    if (dialog && dialog.open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);


  /* close when user click/tap outside the modal */
  const handleBackdropOutsideClick = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  }

  return (
    <dialog ref={modalRef} className={styles.modal} onClick={handleBackdropOutsideClick}>
      <h2>{content.title}</h2>
      <figure className={styles.modalImages}>
        {content.images.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index + 1}`} />
        ))}
      </figure>
      <p>{content.message}</p>
      {/* TODO: HEADER, BODY AND FOOTER */}

      <button className={styles.closeModalBtn} onClick={() => modalRef.current?.close()}>
        {content.btn || "Close"}
      </button>
    </dialog>
  )
});

export default Modal;

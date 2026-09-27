import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "../styles/ModalPolicies.module.css";

const Modal = forwardRef((_, ref) => {
  const modalRef = useRef(null);
  const [content, setContent] = useState({
    title: "",
    message: "",
    btn: ""
  });

  useImperativeHandle(ref, () => ({
    open(title, message) {
      setContent({ title, message });
      modalRef.current?.showModal();
    },
    close() {
      modalRef.current?.close();
    }
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
      <h2>Políticas de Envíos y Devoluciones</h2>
      <p>

        <span>Política de Envíos:</span>
        <ul>
          <li>Todos los pedidos se procesan y envían dentro de 1-3 días hábiles.</li>
          <li>Los tiempos de entrega pueden variar según la ubicación del cliente y el método de envío seleccionado.</li>
          <li>Una vez que su pedido haya sido enviado, recibirá una notificación de confirmación con un número de seguimiento.</li>
        </ul>

      </p>

      <p>
        <span>Política de Devoluciones:</span>
        <ul>
          <li>Aceptamos devoluciones dentro de los 14 días posteriores a la recepción del pedido.</li>
          <li>Para ser elegible para una devolución, el artículo debe estar en su estado original, sin usar y con todas las etiquetas y empaques originales.</li>
          <li>Los gastos de envío no son reembolsables.</li>
          <li>Para iniciar una devolución, comunícate conmigo a través de WhatsApp.</li>
        </ul>
      </p>
      {/* TODO: HEADER, BODY AND FOOTER */}

      <button className={styles.closeModalBtn} onClick={() => modalRef.current?.close()}>
        {content.btn || "Cerrar"}
      </button>
    </dialog>
  )
});

export default Modal;

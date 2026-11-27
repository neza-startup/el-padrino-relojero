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
          <li>Todos los pedidos se procesan y envían dentro de 1-3 días hábiles. (Si no esta disponible el tiempo de espera estimado es de 15 días).</li>
          <li>Los tiempos de entrega pueden variar según la ubicación del cliente y el método de envío seleccionado.</li>
          <li>Una vez que su pedido haya sido enviado, recibirá una notificación de confirmación con un número de seguimiento vía WhatsApp por parte de la plataforma Skydropx.</li>
        </ul>

      </p>

      <p>
        <span>Política de Devoluciones:</span>
        <ul>
          <li>No se aceptan devoluciones, cancelaciones ni reembolsos de cualquier articulo bajo ningun concepto una vez enviado o entregado.</li>
        </ul>
      </p>

      <p>
        <span>Política de Garantía:</span>
        <ul>
          <li>Todos los relojes tienen una garantía de 3 meses contra defectos "EN MAQUINARÍA".</li>
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

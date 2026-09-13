import { faArrowLeft, faArrowRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paginationButtons from "../styles/PaginationButtons.module.css";
/* import tooltip from "../styles/Tooltip.module.css"; */

const PaginationButtons = ({ maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo }) => {
  return (
    <footer>
      <div className={paginationButtons.paginationButtons}>
        {
          !isFirstStep && (
            <button onClick={previous} /* className={tooltip.stepBtn} */ data-tooltip="Anterior">
              <FontAwesomeIcon /* className="table-icon" */ icon={faArrowLeft} />
            </button>
          )
        }

        {/* button per page and when clicked, it should navigate to that page */}
        {Array.from({ length: maxPage }, (_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={i === page ? paginationButtons.active : ''}
          >
            {i + 1}
          </button>
        ))}

        {
          !isLastStep && (
            <button onClick={next} /* className={tooltip.stepBtn} */ data-tooltip="Siguiente">
              <FontAwesomeIcon /* className="table-icon" */ icon={faArrowRight} />
            </button>
          )
        }

        {
          !isFirstStep && (
            <button onClick={reset} /* className={tooltip.stepBtn} data-tooltip="Reiniciar" */>
              <FontAwesomeIcon className="table-icon" icon={faRotateLeft} />
            </button>
          )
        }

        {isDataGreaterThanPageSize && (
          <div className={paginationButtons.pages}>
            ({page + 1} / {maxPage})
          </div>
        )}

        {/* {
          isDataGreaterThanPageSize && (
            <input type="number" min="1" max={maxPage} value={page + 1} onInput={(e) => goTo(e.target.value - 1)} />
          )
        } */}
      </div>
    </footer>
  );
};

export default PaginationButtons;

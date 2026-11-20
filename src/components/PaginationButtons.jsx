import { faArrowLeft, faArrowRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paginationButtons from "../styles/PaginationButtons.module.css";
/* import tooltip from "../styles/Tooltip.module.css"; */

const PaginationButtons = ({ maxPage, page, isDataGreaterThanPageSize, isFirstStep, isLastStep, next, previous, reset, goTo }) => {
  const visiblePageCount = Math.min(3, maxPage);
  const firstVisiblePage = Math.max(
    0,
    Math.min(
      page - Math.floor(visiblePageCount / 2),
      maxPage - visiblePageCount
    )
  );
  const visiblePages = Array.from(
    { length: visiblePageCount },
    (_, i) => firstVisiblePage + i
  );
  const pageIndexes =
    maxPage > visiblePageCount
      ? [
        0,
        ...visiblePages.filter(
          (pageIndex) => pageIndex !== 0 && pageIndex !== maxPage - 1
        ),
        maxPage - 1
      ]
      : visiblePages;

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
        {pageIndexes.map((pageIndex, index) => {
          const previousPageIndex = pageIndexes[index - 1];
          const hasHiddenPages =
            index > 0 && pageIndex - previousPageIndex > 1;

          return (
            <span key={pageIndex}>
              {hasHiddenPages && (
                <span className={paginationButtons.ellipsis} aria-hidden="true">
                  …
                </span>
              )}
              <button
                onClick={() => goTo(pageIndex)}
                className={pageIndex === page ? paginationButtons.active : ''}
              >
                {pageIndex + 1}
              </button>
            </span>
          );
        })}

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

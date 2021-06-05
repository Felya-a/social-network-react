import { useState } from 'react';
import styles from './Paginator.module.css';

function Paginator({ totalUsersCount, pageSize, currentPage, chengeCurrentPage, portionSize = 5 }) {

  let pagesCount = Math.ceil(totalUsersCount / pageSize); // округление вверх
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let portionLeftBorder = (portionNumber - 1) * portionSize;
  let portionRightBorder = portionNumber * portionSize;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.circle} onClick={() => setPortionNumber(1)}>
          <button className={styles.buttonArrow} >{"<<"}</button>
        </div>
        <div className={styles.circle} onClick={() => setPortionNumber(portionNumber - 1)}>
          <button
            className={styles.buttonPagination + ' ' + styles.right}
            disabled={portionNumber == 1}
          >Prev</button>
        </div>
        <div className={styles.pages}>
          {
            pages.filter(page => page > portionLeftBorder && page <= portionRightBorder)
              .map(page => {
                return (
                  <div
                    key={page}
                    className={styles.circle}
                    onClick={() => chengeCurrentPage(page)}
                  >
                    <span
                      className={currentPage === page && styles.selectedPage || null}>
                      {page}
                    </span>
                  </div>
                )
              })
          }
        </div>
        <div className={styles.circle} onClick={() => setPortionNumber(portionNumber + 1)}>
          <button
            className={styles.buttonPagination + ' ' + styles.left}
            disabled={portionNumber == portionCount}
          >Next</button>
        </div>
        <div className={styles.circle} onClick={() => setPortionNumber(portionCount)}>
          <button className={styles.buttonArrow} >{">>"}</button>
        </div>
      </div>
    </div>
  )
}

export default Paginator;
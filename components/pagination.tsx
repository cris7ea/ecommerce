import styles from "../styles/Home.module.css";
import Loader from "../components/loader";

const disabledButtonCss = (disable) => ({ opacity: disable ? 0.2 : 1 });

export default function Pagination({ loading, triggerPagination, cursors }) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => triggerPagination({ cursor: cursors.before })}
        disabled={!cursors.before || loading}
        className={styles.prev}
      >
        <img
          loading="lazy"
          style={disabledButtonCss(!cursors.before || loading)}
          className={styles.paginationleft}
          src="/arrow-left.svg"
          alt="arrow"
        />
        Pevious
      </button>
      {loading && <Loader />}
      <button
        onClick={() => triggerPagination({ cursor: cursors.after })}
        disabled={!cursors.after || loading}
        className={styles.next}
      >
        Next
        <img
          loading="lazy"
          style={disabledButtonCss(!cursors.after || loading)}
          className={styles.paginationright}
          src="/arrow-right.svg"
          alt="arrow"
        />
      </button>
    </div>
  );
}

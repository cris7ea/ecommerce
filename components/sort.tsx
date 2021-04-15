import styles from "../styles/Home.module.css";

export default function Sort({ setMobileFilters, isMobileFilters }) {
  return (
    <div className={styles.productstitle}>
      <h3>
        Photography <span className={styles.separator}>/</span>{" "}
        <span className={styles.premium}>Premium Photos</span>
      </h3>
      <div>
        <img
          onClick={() => setMobileFilters(!isMobileFilters)}
          className={styles.mobilefilterssvg}
          src="/filters.svg"
          alt="filters"
        />
        <img className={styles.sortbyimg} src="/sort.svg" alt="sort ascendent" />
        <span className={styles.sortby}>Sort By</span>
        <span className={styles.sortprice}>Price</span>
        <img className={styles.sortcategoryimg} src="/sortcategory.svg" alt="category sory" />
      </div>
    </div>
  );
}

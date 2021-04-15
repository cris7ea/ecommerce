import styles from "../styles/Home.module.css";
import { camelize } from "../utils";

export default function FilterByCategory() {
  const categories = ["Sport", "Nature", "Food"];

  return (
    <div className={styles.filterbycategory}>
      <h5>Category</h5>
      {categories.map((c) => (
        <div className={styles.filteritem} key={c}>
          <img className={styles.checkbox} src="/checkbox.svg" alt="checkbox" />
          {camelize(c)}
        </div>
      ))}
    </div>
  );
}

import styles from "../styles/Home.module.css";

const priceRanges = [
  {
    name: "Lower than $20",
    maxAmount: 20,
  },
  {
    name: "$20 - $100",
    minAmount: 20,
    maxAmount: 100,
  },
  {
    name: "$100 - $200",
    minAmount: 100,
    maxAmount: 200,
  },
  {
    name: "More than $200",
    minAmount: 200,
  },
];

export default function FilterByCategory() {
  return (
    <div>
      <h5>Price range</h5>
      {priceRanges.map((c) => (
        <div
          className={styles.filteritem}
          key={c.name}
          data-min-amount={c.minAmount}
          data-max-amount={c.maxAmount}
        >
          <img className={styles.checkbox} src="/checkbox.svg" alt="checkbox" />
          {c.name}
        </div>
      ))}
    </div>
  );
}

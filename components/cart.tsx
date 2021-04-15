import styles from "../styles/Home.module.css";
import { formatCurrency } from "../utils";

export default function Cart({ products = [], setShowCart, clearCart }) {
  return (
    <div className={styles.cartdropdown}>
      <div className={styles.cartclose}>
        <img onClick={() => setShowCart(false)} src="/cross.svg" alt="cross" />
      </div>
      <div className={styles.cartlist}>
        {products.map((p, i) => (
          <div key={i} className={styles.cartitem}>
            <div>
              <div className={styles.carttitle} key={i}>
                {p.name}
              </div>
              <div className={styles.cartprice}>
                {formatCurrency(p.currency, p.price)}
              </div>
            </div>
            <img className={styles.cartimage} src={`/photos/${p.imageSrc}`} alt="cart" />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          clearCart([]);
          setShowCart(false);
        }}
        className={styles.clearcart}
      >
        Clear
      </button>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import Cart from "../components/cart";

export default function Header({
  addToCart,
  cartProducts,
  setShowCart,
  showCart,
}) {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.png" alt="logo" />
      <div className={styles.cartcontainer}>
        <img
          onClick={() => setShowCart(!showCart)}
          src="/cart.svg"
          className={styles.menu}
          alt="cart"
        />
        {!!cartProducts.length && (
          <span className={styles.cartnr}>{cartProducts.length}</span>
        )}
        {showCart && (
          <Cart
            setShowCart={setShowCart}
            products={cartProducts}
            clearCart={addToCart}
          />
        )}
      </div>
    </header>
  );
}

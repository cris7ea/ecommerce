import styles from "../styles/Home.module.css";

export default function FeaturedProduct({
  cartProducts,
  product,
  setShowCart,
  addToCart,
}) {
  const p = product;

  const addProductToCart = (product) => {
    setShowCart(true);
    addToCart([...cartProducts, product]);
  };

  return (
    <div className={styles.featuredcontainer}>
      <div className={styles.featuredheader}>
        <h3 className={styles.featuredtitle}>{p.name}</h3>
        <button
          onClick={() =>
            addProductToCart({
              imageSrc: p.imageSrc,
              name: p.name,
              currency: p.currency,
              price: p.price,
            })
          }
          className={styles.featuredaddtocart}
        >
          Add to cart
        </button>
      </div>
      <div className={styles.featuredimgcontainer}>
        <img
          loading="lazy"
          className={styles.featuredimg}
          src={`/photos/${p.imageSrc}`}
          alt="featured product"
        />
        <span className={styles.featuredlabel}>Photo of the day</span>
      </div>
      <div className={styles.featureddetailscontainer}>
        <div className={styles.featureddetails}>
          <h4>About the {p.name}</h4>
          <div>{p.description}</div>
        </div>
        <div className={styles.featuredrecommend}>
          <h4>People also buy</h4>
          <div className={styles.featuredrecommendimg}>
            {p.recommendations.map((img) => (
              <img key={img} src={`/photos/${img}`} alt="recommended product" />
            ))}
          </div>
          <h5>Details</h5>
          <p>
            Size: {p.width} x {p.height} pixels
          </p>
          <p>Size: 15 mb</p>
        </div>
      </div>
    </div>
  );
}

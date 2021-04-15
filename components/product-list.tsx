import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Pagination from "../components/pagination";
import { formatCurrency, camelize } from "../utils";

import { PRODUCTS_QUERY } from "../utils/gql";

export default function ProductList({
  allProducts = [],
  cursors,
  setShowCart,
  cartProducts,
  addToCart,
  setCursors,
  setProducts,
}) {
  const [getNextProducts, { loading }] = useLazyQuery(PRODUCTS_QUERY, {
    variables: { cursor: cursors.cursor },
    skip: cursors.cursor.length,
    onCompleted: (data) => {
      setProducts(data.allProducts.data);
      setCursors({
        cursor: "",
        before: data.allProducts.before,
        after: data.allProducts.after,
      });
    },
  });

  useEffect(() => {
    if (cursors.cursor.length) {
      getNextProducts();
    }
  }, [cursors.cursor.length]);

  const addProductToCart = (product) => {
    setShowCart(true);
    addToCart([...cartProducts, product]);
  };
  const triggerPagination = (cursor = {}) => {
    setCursors({ ...cursor, before: cursors.before, after: cursors.after });
  };

  return (
    <div className={styles.productscontainer}>
      {allProducts.map((item) => {
        return (
          <div className={styles.product} key={item._id}>
            <div className={styles.productsimage}>
              <img
                loading="lazy"
                className={styles.productimg}
                src={`/photos/${item.imageSrc}`}
                alt="product"
              />
              {item.bestseller && (
                <span className={styles.bestseller}>Best Seller</span>
              )}
              <button
                onClick={() =>
                  addProductToCart({
                    imageSrc: item.imageSrc,
                    name: item.name,
                    currency: item.currency,
                    price: item.price,
                  })
                }
                className={styles.productsaddtocart}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.productcategory}>
              {camelize(item.category)}
            </div>
            <h2 className={styles.productname}>{item.name}</h2>
            <div className={styles.productprice}>
              {formatCurrency(item.currency, item.price)}
            </div>
          </div>
        );
      })}
      <Pagination
        loading={loading}
        triggerPagination={triggerPagination}
        cursors={cursors}
      />
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";
import classnames from "classnames";
import { ApolloProvider } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { client } from "../utils/client";
import FeaturedProduct from "../components/featured-product";
import FilterByCategory from "../components/filter-by-category";
import FilterByPriceRange from "../components/filter-by-price-range";
import ProductList from "../components/product-list";
import Header from "../components/header";
import Sort from "../components/sort";

import { PRODUCTS_AND_FEATURED_QUERY } from "../utils/gql";

export default function Home(props) {
  const [isMobileFilters, setMobileFilters] = useState(false);
  const [allProducts, setProducts] = useState(props.allProducts || []);
  const [cursors, setCursors] = useState({
    after: props.after,
    before: props.before,
    cursor: "",
  });
  const [cartProducts, addToCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const mobilefilters = classnames({
    mobilefiltershidden: !isMobileFilters,
    mobilefilters: isMobileFilters,
  });

  return (
    <ApolloProvider client={client(props.token)}>
      <div className={styles.container}>
        <Head>
          <title>eCommerce</title>
        </Head>
        {isMobileFilters && <div className={styles.filteroverlay} />}
        <Header
          setShowCart={setShowCart}
          showCart={showCart}
          cartProducts={cartProducts}
          addToCart={addToCart}
        />

        <main className={styles.main}>
          <FeaturedProduct
            cartProducts={cartProducts}
            setShowCart={setShowCart}
            addToCart={addToCart}
            product={props.featured}
          />
          <Sort
            setMobileFilters={setMobileFilters}
            isMobileFilters={isMobileFilters}
          />
          <div className={styles.productsandfilters}>
            <div className={styles[mobilefilters]}>
              {isMobileFilters && (
                <img
                  onClick={() => setMobileFilters(false)}
                  className={styles.closemobilefilters}
                  src="/cross.svg"
                  alt="mobile filter"
                />
              )}
              <FilterByCategory />
              <FilterByPriceRange />
            </div>
            <ProductList
              allProducts={allProducts}
              setProducts={setProducts}
              cursors={cursors}
              setShowCart={setShowCart}
              cartProducts={cartProducts}
              addToCart={addToCart}
              setCursors={setCursors}
            />
          </div>
        </main>
      </div>
    </ApolloProvider>
  );
}

export async function getServerSideProps() {
  const { data, loading } = await client(
    process.env.FAUNADB_READ_ONLY_KEY
  ).query({
    query: PRODUCTS_AND_FEATURED_QUERY,
  });

  return {
    props: {
      featured: data.featured.data[0],
      before: data.allProducts.before,
      after: data.allProducts.after,
      allProducts: data.allProducts.data,
      loading,
      token: process.env.FAUNADB_READ_ONLY_KEY,
    },
  };
}

import gql from "graphql-tag";

export const PRODUCTS_AND_FEATURED_QUERY = gql`
  {
    featured: allProducts(featured: true) {
      data {
        _id
        name
        currency
        price
        imageSrc
        description
        recommendations
        width
        height
      }
    }
    allProducts: allProducts(featured: false, _size: 6) {
      after
      before
      data {
        _id
        name
        imageSrc
        price
        currency
        category
        bestseller
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query allProducts($cursor: String) {
    allProducts(featured: false, _size: 6, _cursor: $cursor) {
      after
      before
      data {
        _id
        name
        imageSrc
        price
        currency
        category
        bestseller
      }
    }
  }
`;

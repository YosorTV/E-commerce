export const PRODUCT_QUERY = `
query {
  products {
    data {
      attributes {
        title
        description
        product {
          id
          title
          description
          badge
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
}
`;

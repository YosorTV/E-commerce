const imgParams = () => `
image {
  data {
    attributes {
      formats
    }
  }
}
`;

export const PRODUCT_QUERY = `
query {
  products {
    data {
      attributes {
        title
        description
        products {
          id
          title
          description
          badge
          price
          ${imgParams()}
        }
      }
    }
  }
}
`;

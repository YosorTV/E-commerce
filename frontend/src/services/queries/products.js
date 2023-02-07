const imgParams = () => `
image {
  data {
    attributes {
      formats
    }
  }
}
`;

const textParams = () => `
  title
  description
`;

export const PRODUCTS_QUERY = `
query getJordans {
  nikeJordan {
    data {
      id
      attributes {
        ${textParams()}
        products {
          data {
            id
            attributes {
              ${textParams()}
              products {
                slug
                ${textParams()}
                ${imgParams()}
                price
                badge
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
query getProduct($id: ID!, $slug: String!) {
  products(id: $id) {
    data {
      attributes {
        products(filters: { slug: { eq: $slug } }) {
          id
          title
          description
          badge
        }
      }
    }
  }
}

`;

import { createClient, useQuery } from 'urql';

import { productDetailsAdapter, productsAdapter } from 'src/lib';
import { GET_PRODUCT_QUERY, PRODUCTS_QUERY } from 'src/services';

export const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export const getProducts = () => {
  const [res] = useQuery({ query: PRODUCTS_QUERY });

  return productsAdapter(res);
};

export const getProductById = (id, slug) => {
  const [res] = useQuery({ query: GET_PRODUCT_QUERY, variables: { id, slug } });

  return productDetailsAdapter(res);
};

import { createClient, useQuery } from 'urql';

import { productsAdapter } from 'src/lib';
import { PRODUCT_QUERY } from 'src/services';

export const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export const getProducts = () => {
  const [res] = useQuery({ query: PRODUCT_QUERY });

  return productsAdapter(res);
};

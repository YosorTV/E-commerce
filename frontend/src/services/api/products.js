import { useQuery } from 'urql';
import { PRODUCT_QUERY } from 'src/services';

export const getProducts = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  return results;
};

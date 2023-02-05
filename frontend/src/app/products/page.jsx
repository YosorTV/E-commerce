'use client';

import { Product } from 'components/simple';
import { getProducts } from 'src/services/api/products';

export default function Products() {
  const { data } = getProducts();

  const printCard = (product) => <Product key={product.id} product={product} />;

  return (
    <main>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      {data?.products?.map(printCard)}
    </main>
  );
}

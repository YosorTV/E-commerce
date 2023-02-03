'use client';
import { getProducts } from 'src/services/api/products';

export default function Products() {
  const { data, fetching, error } = getProducts();

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

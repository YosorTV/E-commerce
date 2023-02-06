'use client';

import { Product } from 'components/simple';
import Link from 'next/link';
import { getProducts } from 'src/services/api/products';
import { Gallery, Section, Main } from 'styles/products';

export default function Products() {
  const { data } = getProducts();

  const printCard = (product) => (
    <Link key={product.id} href={`products/${product.id}`}>
      <Product product={product} />
    </Link>
  );

  return (
    <main>
      <Section>
        <div className="section-header">
          <h1 className="section-header_title">{data?.title}</h1>
          <p className="section-header_description">{data?.description}</p>
        </div>
        <Gallery>{data?.products?.map(printCard)}</Gallery>
      </Section>
    </main>
  );
}

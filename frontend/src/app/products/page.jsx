'use client';
import { useRouter } from 'next/navigation';

import { Product } from 'components/simple';
import Link from 'next/link';
import { getProducts } from 'src/services/api/products';
import { Gallery, Section, Main } from 'styles/products';

export default function Products() {
  const router = useRouter();
  const { data } = getProducts();

  const handleDetails = (id, slug) => router.push(`products/${id}/${slug}`);

  return (
    <Main>
      <Section>
        <div className="section-header">
          <h1 className="section-header_title">{data?.title}</h1>
          <p className="section-header_description">{data?.description}</p>
        </div>
        {data?.products?.data?.map(({ attributes: card, id }) => {
          return (
            <div key={id}>
              <div>
                <p>{card?.title}</p>
                <p>{card?.description}</p>
              </div>
              <Gallery>
                {card?.products?.map((product) => (
                  <Product key={product?.slug} product={product} handleClick={() => handleDetails(id, product?.slug)} />
                ))}
              </Gallery>
            </div>
          );
        })}
      </Section>
    </Main>
  );
}

'use client';

import { getProductById } from 'src/services';

export default function ProductDetails({ params: { slug } }) {
  const { data } = getProductById(slug[0], slug[1]);

  return (
    <div>
      <div>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
      <div>
        <span>quntity</span>
        <button>plus</button>
        <p>0</p>
        <button>minus</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

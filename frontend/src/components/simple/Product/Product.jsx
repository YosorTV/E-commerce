import Image from 'next/image';
import { memo } from 'react';

export const Product = memo(({ product }) => {
  const cover = product.image.data[0].attributes.formats;

  return (
    <div>
      <h3>{product.title}</h3>
      <Image src={cover.small.url} width={cover.small.width} height={cover.small.height} alt="cover" priority />
      <div>
        <p>{product.description}</p>
        <div>
          <p>{product.price}</p>
          <p>{product.badge}</p>
        </div>
      </div>
    </div>
  );
});

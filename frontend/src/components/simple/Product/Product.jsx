import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { StyledProducts } from 'styles/products';

export const Product = memo(({ product, handleClick }) => {
  const cover = product.image.data[0].attributes.formats;

  return (
    <StyledProducts onClick={handleClick}>
      <h3>{product.title}</h3>
      <Image src={cover.small.url} width={cover.small.width} height={cover.small.height} alt="cover" priority />
      <figcaption className="product-description">
        <p className="product-description_title">{product.description}</p>
        <div className="product-description_info">
          <p className="product-description_info_price">USD: {product.price}$</p>
          <p className="product-description_info_badge">{product.badge}</p>
        </div>
      </figcaption>
    </StyledProducts>
  );
});

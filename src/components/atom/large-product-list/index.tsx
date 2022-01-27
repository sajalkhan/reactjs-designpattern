import React from 'react';
import './index.scss';

export interface ProductProps {
  product: {
    name: string;
    price: number;
    description?: string;
    rating?: string;
  };
}

const LargeProduceList: React.FC<ProductProps> = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <div className="a-large-product">
      <div className="a-large-product__details">
        <p className="a-large-product__name">Name: {name}</p>
        <p className="a-large-product__price">Price: {price}</p>
        <p className="a-large-product__desc">Desc: {description}</p>
        <p className="a-large-product__rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default LargeProduceList;

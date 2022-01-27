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

const SmallProduceList: React.FC<ProductProps> = ({ product }) => {
  const { name, price } = product;
  return (
    <div className="a-small-product">
      <div className="a-small-product__details">
        <p className="a-small-product--name">Name: {name}</p>
        <p className="a-small-product--price">Price: {price}</p>
      </div>
    </div>
  );
};

export default SmallProduceList;

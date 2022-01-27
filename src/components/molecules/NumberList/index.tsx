import React from 'react';
import './index.scss';

export interface regularListProps {
  items: Array<Object>; // data
  resourceName: string; //props name for component
  itemComponent: React.ComponentType<any>; // component
}

const RegularList: React.FC<regularListProps> = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i: number) => (
        <>
          <h3 className="item-number">{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default RegularList;

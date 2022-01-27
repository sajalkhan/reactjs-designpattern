import React from 'react';

export interface regularListProps {
  items: Array<Object>; // data
  resourceName: string; //props name for component
  itemComponent: React.ComponentType<any>; // component
}

const RegularList: React.FC<regularListProps> = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i: number) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

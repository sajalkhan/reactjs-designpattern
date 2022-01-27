import React from 'react';
import './index.scss';

export interface PersonProps {
  person: {
    name: string;
    age: number;
    hairColor?: string;
    hobbies?: string[];
  };
}

const SmallPersonList: React.FC<PersonProps> = ({ person }) => {
  const { name, age } = person;
  return (
    <div className="a-small-persone">
      <div className="a-small-persone__details">
        <p className="a-small-persone__name">Name: {name}</p>
        <p className="a-small-persone__age">Age: {age}</p>
      </div>
    </div>
  );
};

export default SmallPersonList;

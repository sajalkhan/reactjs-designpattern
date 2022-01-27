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

const LargePersonList: React.FC<PersonProps> = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <div className="a-large-persone">
      <div className="a-large-persone__details">
        <p className="a-large-persone--name">Name: {name}</p>
        <p className="a-large-persone--age">Age: {age}</p>
        <p className="a-large-persone--hair-color">Hair color: {hairColor}</p>
      </div>
      <h3 className="a-large-persone__hobbies">
        hobbies:
        <ul>
          {hobbies?.map(hobby => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default LargePersonList;

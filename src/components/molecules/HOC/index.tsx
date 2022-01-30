import React from 'react';

const HocComponent = Component => {
  return props => {
    return (
      <>
        {props.people.map(item => (
          <Component {...props} person={item} />
        ))}
      </>
    );
  };
};

export default HocComponent;

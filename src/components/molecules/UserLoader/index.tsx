import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserLoader = ({ children }) => {
  const [person, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/current-user');
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { person });
          //-------------------------------- 👆 this name must match with props name
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;

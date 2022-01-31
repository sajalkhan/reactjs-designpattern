import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
  return props => {
    const [originalUser, setOriginalUser] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users`);

        const data = response.data.find(user => user.id === userId);
        setOriginalUser(data);
        setUser(data);
      })();
    }, []);

    const onChangeUser = change => {
      setUser({ ...user, ...change });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        person={user}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
        onChangeUser={onChangeUser}
      />
    );
  };
};

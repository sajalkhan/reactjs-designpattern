import React from 'react';
// import { withEditableUser } from 'components/molecules/HOC/withEditableUser';
import { withEditableResource } from 'components/molecules/HOC/withEditableResource';

const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input value={name || ''} onChange={e => onChangeUser({ name: e.target.value })} />
        </label>

        <label>
          Age:
          <input type="number" value={age || ''} onChange={e => onChangeUser({ age: e.target.value })} />
        </label>

        <label>
          Hair Color:
          <input value={hairColor || ''} onChange={e => onChangeUser({ hairColor: e.target.value })} />
        </label>

        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading..</p>
    );
  },
  '/users/01',
  'user'
);

export default UserInfoForm;

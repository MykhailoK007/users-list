import React, { useState } from 'react';

import { UserForm } from '../users/user-form/index';
import { UserList } from '../users/user-list/index';

import './styles.css';

const showUserFormModal = props => {
  const { toggleUserForm, showUserForm } = props;
  toggleUserForm(!showUserForm);
}

export const App = () => {
  const [showUserForm, toggleUserForm] = useState(false);
  const [userList, updateUserList] = useState([]);
  // TODO: 1.UserList 2.UserForm
  return (
    <div>
      <div
        className='add-user'
        role='button'
        onClick={ () => showUserFormModal({ toggleUserForm, showUserForm })}
      >
        Add user
      </div>
      <UserList />
      {showUserForm && <UserForm />}
    </div>
  );
};

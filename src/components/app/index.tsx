import React, { useState } from 'react';
import { UserList } from '../users/user-list';
import { UserForm } from '../users/user-form';
import './styles.css';


const showUserFormModal = (props:{showUserForm:boolean, toggleUserForm:React.Dispatch<boolean>}) =>{
  const { toggleUserForm, showUserForm } = props;
  toggleUserForm(!showUserForm);
};

const App : React.FC = () => {
  const [showUserForm, toggleUserForm] = useState<boolean>(false);
  const [userList, updateUserList] = useState<object[]>([]);

  return (
    <div>
      <div className='add-user' role='button' onClick={() => showUserFormModal({showUserForm,toggleUserForm })}>
        Add user
      </div>
      <UserList />
      {showUserForm && <UserForm />}
    </div>
  );
};
export default App;

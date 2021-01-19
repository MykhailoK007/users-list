import React, { useState } from 'react';

export const UserForm = props => {
  let [userData, setUserData] = useState({ name: '', surname: '', age: '' });
  // let {showPopup, togglePopup} = props.popup;
  const handleChange = e => {
    debugger;
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className='popup-wrapper'>
      <form className='form'>
        <section>
          <input type="button" className='' />
        </section>
        <header className='form__header'>Create User</header>
        <section className='form__field-wrapper'>
          <span>Name: </span>
          <input type='text' name='name' onChange={handleChange} />
        </section>
        <section className='form__field-wrapper'>
          <span>Surname: </span>
          <input type='text' name='surname' onChange={handleChange} />
        </section>
        <section className='form__field-wrapper'>
          <span>Age: </span>
          <input type='number' name='age' onChange={handleChange} />
        </section>
      </form>
    </div>
  );
};

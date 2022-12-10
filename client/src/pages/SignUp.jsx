import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../services/authentication';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleFormSubmit = (e) => {};

  return (
    <div>
      <form onSubmit={handleFormSubmit} className='flex flex-col m-8'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          name='email'
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={handleNameChange}
        />
        <button className='btn-primary'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

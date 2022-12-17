import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/authentication';
import { login } from '../services/authentication';

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { setUser, setIsLoading, setAuthToken } = useAuthContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((data) => {
        const { user, authToken } = data;
        setUser(user);
        setIsLoading(false);
        setAuthToken(authToken);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setErrorMessage('There was an error authenticating you.');
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col m-8">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errorMessage && (
          <div className="bg-rose-200 border border-rose-600 p-4 mt-4 rounded-md">
            <span className="text-rose-700">{errorMessage}</span>
          </div>
        )}

        <button className="btn-primary">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;

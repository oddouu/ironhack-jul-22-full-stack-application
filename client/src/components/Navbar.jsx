import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/authentication';
import ThemeButton from './ThemeButton';

const Navbar = () => {
  const { user, setUser, eraseToken } = useAuthContext();

  const handleSignOut = () => {
    setUser(null);
    eraseToken();
  };

  return (
    <nav className="w-full dark:bg-black bg-gray-100">
      <ul className="flex flex-col p-4 md:flex-row">
        <li className="pr-3 text-blue-600">
          <Link to="/">Go back to the home page</Link>
        </li>
        <li className="pr-3">
          <Link to="/quotes">All Quotes</Link>
        </li>
        <li className="pr-3">
          <Link to="/new-quote">Create new quote</Link>
        </li>
        <li>
          <ThemeButton className="flex-" />
        </li>
        {(user && (
          <>
            <li>
              <span>{user.name}</span>
            </li>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )) || (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

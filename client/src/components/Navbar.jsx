import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full'>
      <ul className='flex flex-col p-4 md:flex-row'>
        <li className='pr-3 text-blue-600'>
          <Link to='/'>Go back to the home page</Link>
        </li>
        <li className='pr-3'>
          <Link to='/quotes'>All Quotes</Link>
        </li>
        <li className='pr-3'>
          <Link to='/new-quote'>Create new quote</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Go back to the home page</Link>
        </li>
        <li>
          <Link to='/quotes'>All Quotes</Link>
        </li>
        <li>
          <Link to='/new-quote'>Create new quote</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

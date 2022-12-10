import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className='text-3xl' onClick={toggleTheme}>
      {theme === 'light' ? '☼' : '☽'}
    </button>
    /*     <ThemeContext.Consumer>
      {({ theme }) => <button>{theme}</button>}
    </ThemeContext.Consumer> */
  );
};

export default ThemeButton;

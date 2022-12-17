import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/authentication';
import { useTranslation } from 'react-i18next';
import ThemeButton from './ThemeButton';
import QuoteSearch from './QuoteSearch';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { user, setUser, eraseToken } = useAuthContext();

  const handleSignOut = () => {
    setUser(null);
    eraseToken();
  };

  const { t } = useTranslation();

  return (
    <nav className="w-full dark:bg-black bg-gray-100">
      <ul className="flex flex-col p-4 md:flex-row items-center justify-between gap-4 container mx-auto">
        <li className="pr-3 text-blue-600">
          <Link to="/">Quote App</Link>
        </li>
        <li className="pr-3">
          <Link to="/quotes">{t('quote.seeAllQuotes')}</Link>
        </li>
        <li className="pr-3">
          <Link to="/new-quote">{t('quote.create')}</Link>
        </li>
        {(user && (
          <>
            <li>
              <span>{user.name}</span>
            </li>
            <button onClick={handleSignOut}>
              {t('authentication.signOut')}
            </button>
          </>
        )) || (
          <>
            <li>
              <Link to="/login">{t('authentication.logIn')}</Link>
            </li>
            <li>
              <Link to="/signup">{t('authentication.signUp')}</Link>
            </li>
          </>
        )}
        <li>
          <QuoteSearch />
        </li>
        <li>
          <LanguageSelector />
        </li>
        <li>
          <ThemeButton className="flex-" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={currentLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="pt">Portuguese</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageSelector;

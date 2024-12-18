'use client';

import { useSelector } from 'react-redux';

const useGetSelectedLanguageText = () => {
  const { selectedLanguage } = useSelector(state => state.language);

  const checkSelectedLanguageText = (fr, en) => (selectedLanguage === 'fr' ? fr : en);

  return { checkSelectedLanguageText };
};

export default useGetSelectedLanguageText;

/* eslint-disable no-new */
import React, { memo, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedLanguage } from '@/store/slices/languageSlice';

const googleTranslateElementInit = () => {
  const element = document.getElementById('google-translator-element');
  if (element) element.innerHTML = '';

  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'fr,en',
      autoDisplay: false,
    },
    'google-translator-element'
  );
};

function GoogleTranslator() {
  const translatorRef = useRef(null);
  const dispatch = useDispatch();
  const isFrenchSet = useRef(false); // Track if French was set once

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      googleTranslateElementInit();

      // Programmatically set to French ONLY ONCE
      if (!isFrenchSet.current) {
        setTimeout(() => {
          const selectField = document.querySelector('.goog-te-combo');
          if (selectField) {
            selectField.value = 'fr'; // Set French as selected
            selectField.dispatchEvent(new Event('change')); // Trigger change
            isFrenchSet.current = true; // Prevent further execution
          }
        }, 1000); // Delay to ensure dropdown is initialized
      }
    };

    return () => {
      const element = document.getElementById('google-translator-element');
      if (element) element.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    if (translatorRef.current) {
      const timeoutId = setTimeout(() => {
        const selectField = translatorRef.current.querySelector('.goog-te-combo');
        if (selectField) {
          const defaultOption = selectField.querySelector('option[value=""]');
          if (defaultOption) {
            defaultOption.textContent = 'Language';
          }

          selectField.addEventListener('change', () => {
            const firstOption = selectField.querySelector('option[value=""]');
            const frenchOption = selectField.querySelector('option[value="fr"]');

            if (firstOption) firstOption.textContent = 'Language';
            if (frenchOption) frenchOption.textContent = 'French';
          });
        }

        dispatch(setSelectedLanguage(selectField?.value));
        selectField?.addEventListener('change', e => {
          dispatch(setSelectedLanguage(e?.target?.value));
        });
      }, 2500);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    return () => {
      const element = document.getElementById('google-translator-element');
      if (element) element.innerHTML = '';
    };
  }, [translatorRef.current]);

  return (
    <div className="flex items-center">
      <div ref={translatorRef} id="google-translator-element" />
    </div>
  );
}

export default memo(GoogleTranslator);

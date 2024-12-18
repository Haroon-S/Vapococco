import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from '@mui/icons-material';
import styles from '@/styles/containers/layout/navbar.module.scss';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';

function SearchInput() {
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const search = searchParams.get('search');

  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (path === '/search') {
      setSearchText(search);
    } else {
      setSearchText('');
    }
  }, [search]);

  const handleChange = useCallback(event => {
    setSearchText(event.target.value);
  }, []);

  const handleKeyDown = useCallback(event => {
    setSearchText(event.target.value);
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        router.push(`/search/?search=${event.target.value}`);
        setSearchText('');
      }
    }
  }, []);

  return (
    <Box className={styles.searchFieldBox} id="search-input">
      <Box className={`${styles.inputSearchIcon} flex justify-center gap-1 items-center`} ref={searchInputRef}>
        <Search style={{ fontSize: '18px', color: 'white' }} />
        <Divider flexItem orientation="vertical" sx={{ borderWidth: '1px', borderColor: 'white' }} />
      </Box>

      <input
        value={searchText}
        placeholder={checkSelectedLanguageText('RECHERCHES...', 'Search Services...')}
        onChange={handleChange}
        onKeyDown={event => handleKeyDown(event)}
        type="text"
        className={`${styles.customSearchField} notranslate`}
      />
    </Box>
  );
}

export default SearchInput;

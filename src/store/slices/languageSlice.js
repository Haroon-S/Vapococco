import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'fr',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelectedLanguage: (state, action) => ({
      ...state,
      selectedLanguage: action.payload,
    }),
  },
});

export const {
  setSelectedLanguage,
} = languageSlice.actions;

export default languageSlice.reducer;

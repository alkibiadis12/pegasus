import { languageTypes, reducer } from '../translateReducer/translateReducer';

export const createLanguageSlice = set => ({
  selectedLanguage:
    JSON.parse(localStorage.getItem('language-storage')).state
      .selectedLanguage || languageTypes.gr,
  changeLanguage: args => set(state => reducer(state, args)),
});

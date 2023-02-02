import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createCardsWithRoutesSlice } from './translateSlices/cardsWithRoutesSlice';
import { createSmallDateSlice } from './translateSlices/smallDateSlice';
import { languageTypes, reducer } from './translateReducer/translateReducer';
import { createSchemaSlice } from './translateSlices/schemaSlice';

let store = (...a) => ({
  selectedLanguage: languageTypes.gr,
  ...createCardsWithRoutesSlice(...a),
  ...createSmallDateSlice(...a),
  ...createSchemaSlice(...a),
  changeLanguage: args => set(state => reducer(state, args)),
});

store = persist(store, {
  name: 'language-storage',
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    selectedLanguage: state.selectedLanguage,
  }),
});

export const useLanguageStore = create(store);

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createLanguageSlice } from './translateSlices/languageSlice';
import { createCardsWithRoutesSlice } from './translateSlices/cardsWithRoutesSlice';
import { createSmallDateSlice } from './translateSlices/smallDateSlice';
import { createMenusSlice } from './translateSlices/menusSlice';
import { createSchemaSlice } from './translateSlices/schemaSlice';
import { createBreadcrumbSlice } from './translateSlices/breadcrumb';
import { createPricingPopUpSlice } from './translateSlices/pricingPupUpSlice';
import { createPage2Slice } from './slices/page2Slice';

let store = (...a) => ({
  ...createLanguageSlice(...a),
  ...createCardsWithRoutesSlice(...a),
  ...createSmallDateSlice(...a),
  ...createMenusSlice(...a),
  ...createBreadcrumbSlice(...a),
  ...createPricingPopUpSlice(...a),
  ...createPage2Slice(...a),
  ...createSchemaSlice(...a),
});

store = persist(store, {
  name: 'language-storage',
  storage: createJSONStorage(() => localStorage),
  partialize: state => ({
    selectedLanguage: state.selectedLanguage,
  }),
});

export const useTranslateStore = create(store);

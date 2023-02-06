import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createPage1Slice } from './slices/page1Slice';
import { createPage2Slice } from './slices/page2Slice';

let store = (...a) => ({
  ...createPage1Slice(...a),
  ...createPage2Slice(...a),
});

store = persist(store, {
  name: 'menu-storage',
  storage: createJSONStorage(() => sessionStorage),
  partialize: state => ({
    selectedRoute: state.selectedRoute,
    selectedPort: state.selectedPort,
    selectedDate: state.selectedDate,
  }),
});

export const useBoundStore = create(store);

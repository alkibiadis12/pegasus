export const createPage1Slice = set => ({
  selectedRoute: null,
  selectedPort: null,
  selectedDate: null,
  selectedCard: null,
  setSelectedRoute: newSelectedRoute =>
    set(state => ({ ...state, selectedRoute: newSelectedRoute })),
  setSelectedPort: newSelectedPort =>
    set(state => ({ ...state, selectedPort: newSelectedPort })),
  setSelectedDate: newSelectedDate =>
    set(state => ({ ...state, selectedDate: newSelectedDate })),
  setSelectedCard: newSelectedCard =>
    set(state => ({ ...state, selectedCard: newSelectedCard })),
});

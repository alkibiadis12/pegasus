import { peopleReducer } from '../reducers/peopleReducer';
import { peoplePriceReducer } from '../reducers/peoplePriceReducer';

export const createPage1Slice = set => ({
  selectedRoute: null,
  selectedPort: null,
  selectedDate: null,
  selectedCard: null,
  selectedPeople: { adults: 0, infants: 0, children: 0 },
  finalPrice: null,
  selectedPeoplePrice: { adultsPrice: 0, infantsPrice: 0, childrenPrice: 0 },
  setSelectedRoute: newSelectedRoute =>
    set(state => ({ ...state, selectedRoute: newSelectedRoute })),
  setSelectedPort: newSelectedPort =>
    set(state => ({ ...state, selectedPort: newSelectedPort })),
  setSelectedDate: newSelectedDate =>
    set(state => ({ ...state, selectedDate: newSelectedDate })),
  setSelectedCard: newSelectedCard =>
    set(state => ({ ...state, selectedCard: newSelectedCard })),
  setSelectedPeople: args => set(state => peopleReducer(state, args)),
  resetSelectedPeople: () =>
    set(state => ({
      ...state,
      selectedPeople: { adults: 0, infants: 0, children: 0 },
    })),
  setFinalPrice: newFinalPrice =>
    set(state => ({ ...state, finalPrice: newFinalPrice })),
  setSelectedPeoplePrice: args => set(state => peoplePriceReducer(state, args)),
});

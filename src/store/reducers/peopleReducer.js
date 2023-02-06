export const peopleReducer = (state, { typeOfPerson, by = 1 }) => {
  switch (typeOfPerson) {
    case 'AD':
      if (by < 0 && state.selectedPeople.adults === 0) {
        return { selectedPeople: { ...state.selectedPeople } };
      } else {
        return {
          selectedPeople: {
            ...state.selectedPeople,
            adults: state.selectedPeople.adults + by,
          },
        };
      }
    case 'CH':
      if (by < 0 && state.selectedPeople.children === 0) {
        return { selectedPeople: { ...state.selectedPeople } };
      } else {
        return {
          selectedPeople: {
            ...state.selectedPeople,
            children: state.selectedPeople.children + by,
          },
        };
      }
    case 'IN':
      if (by < 0 && state.selectedPeople.infants === 0) {
        return { selectedPeople: { ...state.selectedPeople } };
      } else {
        return {
          selectedPeople: {
            ...state.selectedPeople,
            infants: state.selectedPeople.infants + by,
          },
        };
      }
  }
};

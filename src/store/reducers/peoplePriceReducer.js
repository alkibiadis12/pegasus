export const peoplePriceReducer = (state, { typeOfPerson, newPrice }) => {
  switch (typeOfPerson) {
    case 'AD':
      return {
        selectedPeoplePrice: {
          ...state.selectedPeoplePrice,
          adultsPrice: newPrice,
        },
      };
    case 'CH':
      return {
        selectedPeoplePrice: {
          ...state.selectedPeoplePrice,
          childrenPrice: newPrice,
        },
      };
    case 'IN':
      return {
        selectedPeoplePrice: {
          ...state.selectedPeoplePrice,
          infantsPrice: newPrice,
        },
      };
  }
};

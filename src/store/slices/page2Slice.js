export const createPage2Slice = set => ({
  usersInformation: [],
  setSelectedUsersInformation: newUserInfo =>
    set(state => ({ ...state, usersInformation: newUserInfo })),
});

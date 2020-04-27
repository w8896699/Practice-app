import { createSelector } from 'reselect';

const selectUser = (state) => state.user;


export const selectCurrentUser = createSelector(
  [selectUser], // example of use other reducer's state can be found in 118 2:30
  (user) => user.currentUser,
);

export default selectUser;

import { createSelector } from 'reselect';

const postSelector = state => state.user;
const getUserId = createSelector(userSelector, state => state.userId);

// const getIsValid = createSelector(getUserId, id => 1000 < id && id <= 9999);

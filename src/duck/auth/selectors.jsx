import { createSelector } from 'reselect';

const userName = state => state.firebase;

export const visibleTodosSelector = createSelector(
  userName,
  (visibilityFilter, todos) => {},
);

import { createSelector } from 'reselect';

const userSelector = state => state.get('user');

export const authenticatedSelector = () => createSelector(
  userSelector,
  user => user.get('authenticated'),
);

export const tokenSelector = () => createSelector(
  userSelector,
  user => user.get('token'),
);

export const profileSelector = () => createSelector(
  userSelector,
  user => user.get('profile'),
);

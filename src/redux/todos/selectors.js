import { createSelector } from 'reselect';

const todosSelector = state => state.get('todos');

export const fetchingSelector = () => createSelector(
  todosSelector,
  todos => todos.get('isFetching'),
);

export const listSelector = () => createSelector(
  todosSelector,
  todos => todos.get('list'),
);

export const errorSelector = () => createSelector(
  todosSelector,
  todos => todos.get('err'),
);

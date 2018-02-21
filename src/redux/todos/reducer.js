import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFetching: false,
  err: null,
  list: [],
});

function todosReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case 'GET_TODO_LIST_REQUEST':
      return state
        .set('isFetching', true);
    case 'GET_TODO_LIST_SUCCESS':
      return state
        .set('isFetching', false)
        .set('err', null)
        .set('list', fromJS(payload));
    case 'GET_TODO_LIST_FAILURE':
      return state
        .set('isFetching', false)
        .set('err', payload)
        .set('list', fromJS([]));
    default:
      return state;
  }
}

export default todosReducer;

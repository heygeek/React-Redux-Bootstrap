import { fromJS } from 'immutable';

import SET_AUTH from './constants';

const defaultState = fromJS({
  authenticated: false,
  token: {},
  profile: {},
});

function userReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return state
        .set('authenticated', true)
        .set('token', fromJS(payload.token))
        .set('profile', fromJS(payload.profile));
    default:
      return state;
  }
}

export default userReducer;

import SET_AUTH from './constants';

const setAuth = payload => ({
  type: SET_AUTH,
  payload,
});

export default setAuth;

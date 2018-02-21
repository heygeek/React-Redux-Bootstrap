import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import SocialLogin from '../components/SocialLogin';
import setAuth from '../redux/user/actions';

const mapDispathToProps = dispatch => ({
  setAuth: payload => dispatch(setAuth(payload)),
  push: url => dispatch(push(url)),
});

export default connect(null, mapDispathToProps)(SocialLogin);

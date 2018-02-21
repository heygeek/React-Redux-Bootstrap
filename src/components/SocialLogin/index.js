import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../config';
import SocialButton from './SocialButton';

const styles = {
  loginBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
};

class Login extends React.Component {
  static propTypes = {
    setAuth: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  handleSocialLoginSuccess = (user) => {
    this.props.setAuth({
      token: user._token,
      profile: user._profile,
    });
    this.props.push('/');
  }

  handleSocialLoginFailure = (err) => {
    console.log(err);
  }

  render() {
    const pageTitle = `Login - ${config.app.title}`;

    return (
      <div className="container">
        <Helmet title={pageTitle} />
        <SocialButton
          style={styles.loginBtn}
          provider="google"
          appId="200430016192-l1sspsgdsarke6jfbnnjhr9n9cldlkue.apps.googleusercontent.com"
          onLoginSuccess={this.handleSocialLoginSuccess}
          onLoginFailure={this.handleSocialLoginFailure}
        >
          Login with Google
        </SocialButton>
      </div>
    );
  }
}

export default Login;

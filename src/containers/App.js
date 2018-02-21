import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import App from '../components/App';
import { authenticatedSelector, profileSelector } from '../redux/user/selectors';

const mapStateToProps = createStructuredSelector({
  authenticated: authenticatedSelector(),
  profile: profileSelector(),
});

export default connect(mapStateToProps)(App);

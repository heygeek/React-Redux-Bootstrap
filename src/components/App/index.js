import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Link from 'react-router-dom/Link';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import { ListItemLink } from '../../components';
import { renderRoutes } from '../../routes';

require('./styles.css');

class App extends React.Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    profile: ImmutablePropTypes.contains().isRequired,
  };

  state = {
    navExpanded: false
  }

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  }

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    const { route, authenticated, profile } = this.props;

    return (
      <div>
        <Navbar staticTop expanded={this.state.navExpanded} onToggle={this.onNavbarToggle}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" onClick={this.onNavItemClick}>
                <span>TodoApp</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar role="navigation">
              <ListItemLink to="/login" onClick={this.onNavItemClick}>
                Login
              </ListItemLink>
            </Nav>
            <Nav navbar pullRight>
              <NavItem>
                <div>
                  { authenticated ? profile.get('name') : 'Not authenticated' }
                </div>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Helmet from 'react-helmet';

import config from '../../config';
import CustomGrid from '../CustomGrid';

const styles = require('./styles.css');

class Home extends React.Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    todoList: ImmutablePropTypes.list.isRequired,
    fetchTodos: PropTypes.func.isRequired,
  };

  state = {
    columns: [
      { name: 'id', title: 'ID' },
      { name: 'userId', title: 'User ID' },
      { name: 'title', title: 'Title' },
      { name: 'completed', title: 'Completed', getCellValue: row => (row.completed ? 'Completed' : 'Incompleted') },
    ],
    gridPageSize: 10,
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { columns, gridPageSize } = this.state;
    const { fetching, todoList } = this.props;

    return (
      <div className={styles.main}>
        <Helmet title={config.app.title} />
        <div className="container">
          <div className={styles.content}>
            {fetching ?
              'Loading...'
              :
              <CustomGrid
                rows={todoList.toJS()}
                cols={columns}
                pageSize={gridPageSize}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

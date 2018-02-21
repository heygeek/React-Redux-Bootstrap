import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from '../components/Home';
import { fetchTodoRequest } from '../redux/todos/actions';
import { listSelector, fetchingSelector } from '../redux/todos/selectors';

const mapStateToProps = createStructuredSelector({
  todoList: listSelector(),
  fetching: fetchingSelector(),
});

const mapDispathToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodoRequest()),
});

export default connect(mapStateToProps, mapDispathToProps)(Home);

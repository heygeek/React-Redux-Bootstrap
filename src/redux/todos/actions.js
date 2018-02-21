import { HTTP_REQUEST } from '../../constants';

export const fetchTodoRequest = () => ({
  type: HTTP_REQUEST,
  payload: {
    model: 'TODO_LIST',
    method: 'get',
    url: '/todos',
    hasToken: true,
  },
});

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    ),

    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  );

  const store = createStore(rootReducer, fromJS(initialState), middleware);

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}

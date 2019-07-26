import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from '../history';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'newoa',
      })
    : compose;

const enhancer = composeEnhancers(
  // Middleware you want to use in development:
  applyMiddleware(routerMiddleware(history)),
);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  enhancer,
);

export default store;

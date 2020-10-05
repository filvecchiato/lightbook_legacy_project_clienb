import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import mainReducer from './store/reducers/mainReducer';
import Router from './screens/Router';
const composeEnhancers =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const rootReducer = combineReducers({
  general: mainReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;

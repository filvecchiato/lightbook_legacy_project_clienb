import React from 'react';
import Wrapper from './screens/Wrapper';
import Welcome from './screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import mainReducer from './store/reducers/mainReducer';
import Upload from './screens/Upload';

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

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Wrapper" component={Wrapper} />
          <Stack.Screen name="Upload" component={Upload} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

//if no user, create. if logged out, show login. else:

export default App;

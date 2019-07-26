import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createAppContainer } from 'react-navigation';
import thunk from 'redux-thunk';
import AppNavigator from './app/AppNavigator';

import AppReducer from './app/reducers';

const AppContainer = createAppContainer(AppNavigator);
const store = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>  
)

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// export default from './storybook';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './src/routes';
import store from './src/store/';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;

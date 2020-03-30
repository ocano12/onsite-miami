import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../screens';

const UnAuthScreens = createStackNavigator(
  {
    Login,
  },
  {
    defaultNavigationOptions: () => ({
      header: null,
    }),
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    UnAuthScreens: UnAuthScreens,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;

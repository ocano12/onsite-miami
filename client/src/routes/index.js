import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Role, SignUpForm } from '../screens';
import { theme } from '../styles';

const defaultHeaderOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    title: null,
    headerStyle: {
      backgroundColor: theme.palette.primary,
      shadowColor: 'transparent',
    },
    headerBackTitle: ' ',
  }),
};

const UnAuthScreens = createStackNavigator(
  {
    Login,
    Role,
    SignUpForm,
  },
  defaultHeaderOptions,
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    UnAuthScreens: UnAuthScreens,
  },
  {
    initialRouteName: 'UnAuthScreens',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;

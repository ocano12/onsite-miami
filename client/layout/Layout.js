import React from 'react';
import { SafeAreaView, View } from 'react-native';
import LayoutStyles from './Layout.styles';

export const Layout = props => {
  return (
    <SafeAreaView style={LayoutStyles.safeArea}>
      <View style={LayoutStyles.container}>{props.children}</View>
    </SafeAreaView>
  );
};

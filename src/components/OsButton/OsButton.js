import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { OsText } from '../OsText';
import { theme } from '../../styles';
import buttonStyles from './OsButton.styles';

export const OsButton = props => {
  const { title, onPress, bgColor, disabled, txtColor } = props;

  const buttonRender = (
    <View style={[buttonStyles.button, { backgroundColor: bgColor }]}>
      <OsText text={title} align="center" color={txtColor}></OsText>
    </View>
  );

  if (disabled) {
    return (
      <View style={[buttonStyles.disabled, { backgroundColor: bgColor }]}>
        {buttonRender}
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress}>{buttonRender}</TouchableOpacity>
    );
  }
};

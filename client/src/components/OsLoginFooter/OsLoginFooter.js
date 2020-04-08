import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { OsText } from '../OsText';
import { theme } from '../../styles';

export const OsLoginFooter = props => {
  const { text, buttonText, onPress } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <OsText text={text} />
      <View
        style={{
          marginHorizontal: theme.space.tiny,
        }}>
        <TouchableOpacity onPress={() => onPress()}>
          <OsText text={buttonText} color={theme.palette.action}></OsText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

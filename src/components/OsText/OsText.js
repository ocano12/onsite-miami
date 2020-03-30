import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export const OsText = props => {
  const { text, color, size, lineHeight, weight, align } = props;

  const getLineHeight = size => {
    let fontSize = Number(theme.fontSize[size]);
    return 1.5 * fontSize;
  };

  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: Number(theme.fontSize[size]),
          lineHeight: getLineHeight(size),
          textAlign: align,
          fontFamily: theme.fontFamily[weight],
        }}>
        {text}
      </Text>
    </View>
  );
};

OsText.defaultProps = {
  fontFamily: theme.fontFamily.regular,
  size: 'regular',
};

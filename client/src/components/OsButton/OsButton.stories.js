import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { OsButton } from './';
import { theme } from '../../styles';
import { Alert, View } from 'react-native';
import { ThemeColors } from 'react-navigation';

const handlePress = () => {
  Alert.alert('pressed');
};

storiesOf('Button', module)
  .add('default', () => <OsButton title={'default'} onPress={handlePress} />)
  .add('border', () => (
    <View
      style={{
        marginHorizontal: theme.space.default,
        marginTop: theme.space.default,
      }}>
      <OsButton
        title={'with border'}
        txtColor={theme.palette.white}
        bgColor={theme.palette.action}
      />
    </View>
  ))
  .add('disabled', () => (
    <OsButton
      title={'default'}
      txtColor={theme.palette.primary}
      bgColor={theme.palette.action}
      onPress={handlePress}
      disabled
    />
  ));

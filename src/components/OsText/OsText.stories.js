import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { OsText } from './';
import { theme } from '../../styles';

const Lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';

storiesOf('OsText', module)
  .add('default', () => <OsText text={Lorem} />)
  .add('bold', () => <OsText text={Lorem} weight="bold" />)
  .add('sizes', () => (
    <View>
      <OsText text={Lorem} size="tiny" />
      <OsText text={Lorem} size="small" />
      <OsText text={Lorem} size="regular" />
      <OsText text={Lorem} size="medium" />
      <OsText text={Lorem} size="large" />
      <OsText text={Lorem} size="huge" />
    </View>
  ));

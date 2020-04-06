import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { OsLogo } from './';

storiesOf('Logo', module)
  .add('default', () => <OsLogo />)
  .add('horizontal', () => <OsLogo horizontal />);

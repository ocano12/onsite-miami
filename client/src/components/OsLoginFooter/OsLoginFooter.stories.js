import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { OsLoginFooter } from './';

storiesOf('Logo', module).add('default', () => (
  <OsLoginFooter text="Already have an account?" buttonText="Login" />
));

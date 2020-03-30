import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import inputStyles from './FormInput.styles';

export const FormInput = props => {
  const { height } = props;
  const [active, setActive] = useState(false);

  return (
    <TextInput
      {...props}
      style={[active ? inputStyles.active : inputStyles.inactive]}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
  );
};

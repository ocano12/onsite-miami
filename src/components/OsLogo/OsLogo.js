import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../../assets/icons/logo.png';
import logoHorizontal from '../../../assets/icons/logoHorizontal.png';

export const OsLogo = props => {
  const { horizontal } = props;

  const width = {
    horizontal: 250,
    regular: 200,
  };

  return (
    <Image
      source={horizontal ? logoHorizontal : logo}
      style={[
        horizontal ? width.horizontal : width.regular,
        { height: 80, width: 250 },
      ]}
      resizeMode="contain"
    />
  );
};

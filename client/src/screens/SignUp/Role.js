import React from 'react';
import { View } from 'react-native';
import { Layout } from '@layout';
import { OsText, OsButton, OsLogo } from '@components';
import { theme } from '@styles';
import signUpStyles from './SignUp.styles';

// TODO:  1. get userTypes from DB

const Role = props => {
  const { navigation } = props;
  const userTypes = ['Client', 'Staff'];

  const BuildUserTypes = () =>
    userTypes.map((type, index) => (
      <OsButton
        key={index}
        title={type}
        txtColor={theme.palette.white}
        bgColor={theme.palette.action}
        onPress={() => navigation.navigate('SignUpForm', { userType: type })}
      />
    ));

  return (
    <Layout>
      <View style={signUpStyles.roleLogo}>
        <OsLogo />
      </View>
      <View style={signUpStyles.roleText}>
        <OsText text={'PLEASE SELECT YOUR '} color={theme.palette.text} />
        <OsText text={'USER TYPE'} color={theme.palette.text} weight="bold" />
      </View>
      <View style={signUpStyles.roleButtonContainer}>
        <BuildUserTypes />
      </View>
      <View style={signUpStyles.roleFooter} />
    </Layout>
  );
};

export default Role;

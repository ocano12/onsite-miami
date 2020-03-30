import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { FormInput, OsButton } from '../../components';
import { theme } from '../../styles/theme';
import Layout from '../../../layout/Layout';

const Login = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          padding: theme.space.default,
          backgroundColor: theme.palette.primary,
        }}>
        <FormInput placeholder={'username'} />
        <FormInput />
        <OsButton
          title={'Login'}
          bgColor={theme.palette.action}
          txtColor={theme.palette.white}
        />
      </View>
    </Layout>
  );
};

export default Login;

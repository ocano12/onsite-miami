import React, { useState } from 'react';
import { SafeAreaView, View, Alert, Image } from 'react-native';
import { FormInput, OsButton } from '../../components';
import { theme, global } from '../../styles/theme';
import Layout from '../../../layout/Layout';
import LoginStyles from './index.styles';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    Alert.alert(`${userName} and ${password}`);
  };

  return (
    <Layout>
      <View style={LoginStyles.container}>
        <View style={LoginStyles.imageContainer}>
          <Image
            source={require('../../../assets/icons/logo.png')}
            style={LoginStyles.image}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={LoginStyles.username}>
            <FormInput
              placeholder={'Username'}
              onChangeText={setUserName}
              placeholderTextColor={theme.palette.greyLight}
            />
          </View>
          <View style={LoginStyles.password}>
            <FormInput
              placeholder={'Password'}
              onChangeText={setPassword}
              placeholderTextColor={theme.palette.greyLight}
              secureTextEntry={!showPassword}
            />
            <View style={LoginStyles.showPassword}>
              {password ? (
                <OsButton
                  title={'show'}
                  txtColor={theme.palette.action}
                  onPress={() => setShowPassword(!showPassword)}
                />
              ) : null}
            </View>
          </View>
        </View>
        <View style={LoginStyles.loginButton}>
          <OsButton
            title={'Login'}
            bgColor={theme.palette.action}
            txtColor={theme.palette.white}
            onPress={submit}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Login;

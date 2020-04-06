import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  FormInput,
  OsButton,
  OsText,
  OsLogo,
  OsLoginFooter,
} from '@components';
import { theme, global } from '@styles';
import { Layout } from '@layout';
import LoginStyles from './index.styles';

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    Alert.alert(`${userName} and ${password}`);
  };

  const signUp = () => {
    props.navigation.navigate('Role');
  };

  return (
    <Layout>
      <KeyboardAvoidingView style={LoginStyles.container} behavior="padding">
        <View style={LoginStyles.imageContainer}>
          <OsLogo />
        </View>
        <View style={LoginStyles.inputContainer}>
          <View style={LoginStyles.username}>
            <FormInput placeholder={'Username'} onChangeText={setUserName} />
          </View>
          <View style={LoginStyles.password}>
            <FormInput
              placeholder={'Password'}
              onChangeText={setPassword}
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
        <View style={LoginStyles.signUpContainer}>
          <OsLoginFooter
            text="Don't have an account?"
            buttonText="Sign Up"
            onPress={signUp}
          />
        </View>
      </KeyboardAvoidingView>
    </Layout>
  );
};

Login.navigationOptions = {
  headerShown: false,
};

export default Login;

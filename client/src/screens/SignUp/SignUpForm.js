//TO DO: move this logic out of here. Logic is pretty delicate

import React, { useState, useReducer, useEffect } from 'react';
import { TouchableOpacity, View, ScrollView, Text, Alert } from 'react-native';
import { Layout } from '@layout';
import {
  FormInput,
  OsText,
  OsLogo,
  OsButton,
  OsLoginFooter,
} from '@components';
import { theme } from '@styles';
import signUpStyles from './SignUp.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as signUpActions from '../../store/actions/signup';

const SignUpForm = (props) => {
  const { navigation, updateForm, valid, message, values } = props;
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const userType = navigation.getParam('userType');

  const handleInput = (inputIdentifier, text) => {
    let isValid = false;
    let errorMessage = '';
    let emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    switch (inputIdentifier) {
      case 'name':
        if (text.trim().length > 0) {
          isValid = true;
        }
        break;

      case 'email':
        if (emailRegex.test(String(text).toLowerCase()) == true) {
          isValid = true;
        }
        break;

      case 'password':
        if (text.length > 5) {
          isValid = true;
          if (values.confirmPassword.length > 5) {
            if (text === values.confirmPassword) {
              updateForm('confirmPassword', text, true, errorMessage);
            } else {
              isValid = false;
              errorMessage = 'Passwords must match!';
            }
          }
        } else {
          errorMessage = 'Password must have at least 6 characters!';
        }
        break;

      case 'confirmPassword':
        if (text === values.password && text.length > 5) {
          if (values.password.length > 5) {
            updateForm('password', text, true, errorMessage);
            isValid = true;
          } else {
            isValid = true;
          }
        } else {
          errorMessage = 'Passwords must match!';
        }
    }
    updateForm(inputIdentifier, text, isValid, errorMessage);
  };

  const submitHandler = () => {
    setNameError(!valid.name);
    setEmailError(!valid.email);
    setPasswordError(!valid.password);
    setConfirmPasswordError(!valid.confirmPassword);

    if (valid.name && valid.email && valid.password && valid.confirmPassword) {
      Alert.alert('formSubmit');
    } else {
      return;
    }
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <Layout>
      <View style={signUpStyles.signUpLogo}>
        <OsLogo horizontal />
      </View>
      <View style={signUpStyles.signUpFormContainer}>
        {/* <Icon name='md-person' size={30}/> */}
        <View style={signUpStyles.signUpForm}>
          <FormInput
            placeholder="Name"
            onChangeText={(text) => handleInput('name', text)}
            hasErrors={nameError && !valid.name}
            errorMessage={message.name}
          />
          <FormInput
            placeholder="Email"
            onChangeText={(text) => handleInput('email', text)}
            hasErrors={emailError && !valid.email}
            errorMessage={message.email}
          />
          <FormInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleInput('password', text)}
            hasErrors={passwordError && !valid.password}
            errorMessage={message.password}
          />
          <FormInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => handleInput('confirmPassword', text)}
            hasErrors={confirmPasswordError && !valid.confirmPassword}
            errorMessage={message.confirmPassword}
          />
          <OsButton
            title={'Sign Up'}
            txtColor={theme.palette.white}
            bgColor={theme.palette.action}
            onPress={submitHandler}
          />
        </View>
      </View>
      <OsLoginFooter
        text="Already have an account?"
        buttonText="Login"
        onPress={login}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  valid: state.signUp.inputValid,
  message: state.signUp.inputErrorMessage,
  values: state.signUp.inputValues,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (input, value, isValid, message) =>
    dispatch(signUpActions.updateForm(input, value, isValid, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

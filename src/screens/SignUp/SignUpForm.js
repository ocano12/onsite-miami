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

const SignUpForm = (props) => {
  const { navigation } = props;
  const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const userType = navigation.getParam('userType');

  const initalState = {
    inputValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    inputValid: {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
    inputErrorMessage: {
      name: 'Please enter a name!',
      email: 'Please enter an email!',
      password: 'Please enter a password!',
      confirmPassword: 'Please re enter the password!',
    },
  };

  const formReducer = (state, action) => {
    let updateErrorMessage;
    // console.log(action.input, action.message);
    if (action.type === FORM_INPUT_UPDATE) {
      const updateValue = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updateIsValid = {
        ...state.inputValid,
        [action.input]: action.isValid,
      };
      if (action.message.length > 0) {
        updateErrorMessage = {
          ...state.inputErrorMessage,
          [action.input]: action.message,
        };
      } else {
        updateErrorMessage = {
          ...state.inputErrorMessage,
          [action.input]: initalState.inputErrorMessage[action.input],
        };
      }
      return {
        inputValues: updateValue,
        inputValid: updateIsValid,
        inputErrorMessage: updateErrorMessage,
      };
    } else {
      return state;
    }
  };

  const [formState, dispatchFormUpdate] = useReducer(formReducer, initalState);

  ///add a action for when the form is submitted

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
          if (formState.inputValues.confirmPassword.length > 5) {
            if (text === formState.inputValues.confirmPassword) {
              dispatchFormUpdate({
                type: FORM_INPUT_UPDATE,
                value: text,
                isValid: true,
                input: 'confirmPassword',
                message: errorMessage,
              });
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
        if (text === formState.inputValues.password && text.length > 5) {
          if (formState.inputValues.password.length > 5) {
            dispatchFormUpdate({
              type: FORM_INPUT_UPDATE,
              value: text,
              isValid: true,
              input: 'password',
              message: errorMessage,
            });
            isValid = true;
          } else {
            isValid = true;
          }
        } else {
          errorMessage = 'Passwords must match!';
        }
    }
    dispatchFormUpdate({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input: inputIdentifier,
      message: errorMessage,
    });
  };

  const submitHandler = () => {
    setNameError(!formState.inputValid.name);
    setEmailError(!formState.inputValid.email);
    setPasswordError(!formState.inputValid.password);
    setConfirmPasswordError(!formState.inputValid.confirmPassword);

    if (
      formState.inputValid.name &&
      formState.inputValid.email &&
      formState.inputValid.password &&
      formState.inputValid.confirmPassword
    ) {
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
            hasErrors={nameError && !formState.inputValid.name}
            errorMessage={formState.inputErrorMessage.name}
          />
          <FormInput
            placeholder="Email"
            onChangeText={(text) => handleInput('email', text)}
            hasErrors={emailError && !formState.inputValid.email}
            errorMessage={formState.inputErrorMessage.email}
          />
          <FormInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleInput('password', text)}
            hasErrors={passwordError && !formState.inputValid.password}
            errorMessage={formState.inputErrorMessage.password}
          />
          <FormInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => handleInput('confirmPassword', text)}
            hasErrors={
              confirmPasswordError && !formState.inputValid.confirmPassword
            }
            errorMessage={formState.inputErrorMessage.confirmPassword}
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

export default SignUpForm;

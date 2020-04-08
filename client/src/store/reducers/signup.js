import { _UPDATE_FORM_INPUT } from '../actions/signup';

const _initialState = {
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

export default signUp = (state = _initialState, action) => {
  let updateErrorMessage;
  switch (action.type) {
    case _UPDATE_FORM_INPUT:
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
          [action.input]: _initialState.inputErrorMessage[action.input],
        };
      }
      return {
        ...state,
        inputValues: updateValue,
        inputValid: updateIsValid,
        inputErrorMessage: updateErrorMessage,
      };
  }
  return state;
};

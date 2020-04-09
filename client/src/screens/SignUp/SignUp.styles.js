import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

const signUpStyles = {
  roleLogo: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  roleButtonContainer: {
    flex: 3,
    paddingHorizontal: theme.space.large,
    justifyContent: 'space-around',
  },
  roleFooter: {
    flex: 4,
  },
  signUpLogo: {
    flex: 0.5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  signUpFormContainer: {
    flex: 3,
  },
  signUpForm: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: theme.space.default,
  },
};

export default signUpStyles;

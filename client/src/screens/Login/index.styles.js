import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.space.small,
  },
  imageContainer: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.space.default,
  },
  inputContainer: {
    flex: 1.3,
    justifyContent: 'space-evenly',
  },
  password: {
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    right: theme.space.small,
  },
  loginButton: {
    flex: 0.7,
    justifyContent: 'center',
  },
  signUpContainer: {
    flex: 2,
    justifyContent: 'center',
  },
});

//TO DO when screen shrinks reorganize css

export default LoginStyles;

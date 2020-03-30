import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.space.default,
    backgroundColor: theme.palette.primary,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: theme.space.default,
  },
  image: {
    height: 200,
    width: 200,
  },
  username: {
    marginVertical: theme.space.default,
  },
  password: {
    position: 'relative',
    marginVertical: theme.space.default,
  },
  showPassword: {
    position: 'absolute',
    right: theme.space.small,
  },
  loginButton: {
    flex: 2,
    marginTop: theme.space.large,
  },
});

export default LoginStyles;

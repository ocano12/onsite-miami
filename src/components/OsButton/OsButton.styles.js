import { StyleSheet } from 'react-native';
import { theme } from '../../styles/';

const buttonSytle = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    padding: theme.space.default,
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.3,
  },
});

export default buttonSytle;

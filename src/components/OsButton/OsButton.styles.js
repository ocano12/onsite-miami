import { StyleSheet } from 'react-native';
import { theme } from '../../styles/';

const buttonSytle = StyleSheet.create({
  button: {
    padding: theme.space.default,
    borderRadius: 6,
  },
  disabled: {
    opacity: 0.3,
  },
});

export default buttonSytle;

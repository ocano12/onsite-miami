import { StyleSheet } from 'react-native';
import { theme, global } from '../../styles';

const input = {
  padding: theme.space.default,
  borderRadius: 6,
  borderWidth: 1,
  maxHeight: 60,
  color: theme.palette.black,
  backgroundColor: theme.palette.white,
};

const inputStyles = StyleSheet.create({
  active: {
    ...input,
    borderColor: theme.palette.action,
  },
  inactive: {
    ...input,
    borderColor: theme.palette.greyLight,
  },
});

export default inputStyles;

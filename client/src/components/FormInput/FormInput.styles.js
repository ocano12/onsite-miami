import { StyleSheet } from 'react-native';
import { theme, global } from '../../styles';
import { ThemeContext } from 'react-navigation';

const input = {
  padding: theme.space.default,
  borderRadius: 6,
  maxHeight: 60,
  color: theme.palette.black,
  backgroundColor: theme.palette.white,
};

const inputStyles = StyleSheet.create({
  active: {
    ...input,
    borderColor: theme.palette.action,
    borderWidth: 2,
  },
  inactive: {
    ...input,
    borderColor: theme.palette.greyLight,
    borderWidth: 1,
  },
  error: {
    ...input,
    borderColor: theme.palette.alert,
    borderWidth: 3,
  },
  errorContainer: {
    flexDirection: 'row',
    padding: theme.space.small,
  },
  icon: {
    paddingHorizontal: theme.space.tiny,
  },
});

export default inputStyles;

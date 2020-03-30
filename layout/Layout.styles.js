import { StyleSheet } from 'react-native';
import { theme } from '../src/styles';

const LayoutStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.palette.primary,
  },
  container: {
    flex: 1,
    padding: theme.space.default,
    paddingBottom: theme.space.large,
  },
});

export default LayoutStyles;

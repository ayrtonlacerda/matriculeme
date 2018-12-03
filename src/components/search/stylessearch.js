import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 330,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    margin: 10,
  },
  input: {
    fontSize: 16,
    color: colors.white,
  }
});

export default styles;

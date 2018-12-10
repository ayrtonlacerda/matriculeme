import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 56,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 1,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flexDirection: 'row'
  },
  title: {
    fontSize: 26,
    color: colors.black
  },
  concert: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    // backgroundColor: colors.black
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    top: 3
  }
});

export default styles;

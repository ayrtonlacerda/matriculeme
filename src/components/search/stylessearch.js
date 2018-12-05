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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    color: colors.white,
    //backgroundColor: colors.black,
    width: 270,
    marginLeft: 5,
  }
});

export default styles;

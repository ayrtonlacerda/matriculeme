import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    alignItems: 'center',
    //paddingHorizontal: 15,
    bottom: 65
    //flex: 1
  },
  view: {
    height: 91,
    backgroundColor: colors.primary
  },
  area: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 330
  },
  concerto: {
    //backgroundColor: colors.secundary,
    width: 80,
    height: 20,
    margin: 5
  },
  button: {
    backgroundColor: colors.secundary,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 35,
    top: 30
  },
  textButton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.primary
  },
  info: {
    width: 330,
    paddingHorizontal: 15,
    //backgroundColor: colors.regular,
    marginTop: 20
  },
  nome: {
    fontSize: 18,
    color: colors.black
  },
  curso: {
    fontSize: 16
  }
});

export default styles;

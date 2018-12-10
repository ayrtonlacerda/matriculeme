import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 4,
    marginTop: 10,
    marginHorizontal: 15
  },
  titleView: {
    width: 310,
    height: 40,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleView2: {
    width: 310,
    height: 40,
    borderRadius: 15,
    backgroundColor: colors.lighter2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black
  },
  safearea: {
    marginTop: 10,
    marginLeft: 5,
    alignItems: 'flex-start',
    width: 310
  },
  professor: {
    fontSize: 16
  },
  turma: {
    fontSize: 16
  },
  horario: {
    marginLeft: 10,
    marginTop: 10
  },
  vagas: {
    flexDirection: 'row',
    marginTop: 10
  },
  area: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  numVagas: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    borderRadius: 15,
    color: colors.white
  },
  status: {
    color: colors.secundary,
    fontSize: 16,
    marginLeft: 5
  }
});

export default styles;

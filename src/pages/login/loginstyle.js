import { StyleSheet } from 'react-native';
import { colors, metrics, constants } from '../../styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogin: {
    //position: 'relative',
    width: 300,
    height: 365,
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    backgroundColor: '#fffcfc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 150,
    marginTop: 15
  },
  info: {
    width: 230,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: colors.darker,
    marginTop: 30,
    marginBottom: 15
  },
  input: {
    width: 230,
    height: 40,
    marginTop: 10,
    color: '#333',
  },
  form: {
    marginBottom: 15
  },
  forms: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 1
  },
  icon: {
    marginRight: 10,
    top: 4,
  },
  touch: {
    //position: 'absolute',
    elevation: 4,
    bottom: 30
  },
  button: {
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    margin: 5,
    borderRadius: 100,
    backgroundColor: colors.secundary,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.8
  },
  textbutton: {
    fontFamily: 'Ubuntu',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: colors.white
  }
});

export default styles;

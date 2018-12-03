import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import styles from './ofertastyles';
import { Header } from '../../components';

const Alunos = () => (
  <View>
    <Header title="Alunos" showExit />
    <Text>Alunos</Text>
  </View>
);

Alunos.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={28} color={tintColor} />
};

export default Alunos;

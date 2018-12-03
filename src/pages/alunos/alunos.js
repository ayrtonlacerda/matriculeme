import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './alunosstyles';
import { Header, Search, Card } from '../../components';

const Alunos = () => (
  <View style={styles.container}>
    <Header title="Alunos" showExit />
    <View style={styles.safearea}>
      <Search description="Digite a matricula ou nome do aluno" />
      <Card showAluno />
      <Card showAluno />
      <Card showAluno />
      <Card showAluno />
      <Card showAluno />
    </View>
  </View>
);

Alunos.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={28} color={tintColor} />
};

export default Alunos;

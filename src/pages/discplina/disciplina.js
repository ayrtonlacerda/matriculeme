import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './disciplinastyles';
import { Header, Search, Card } from '../../components';

const Disciplina = (props) => {
  console.tron.log(props);
  return (
    <View style={styles.container}>
      <Header title="Disciplina" showExit />
      <View style={styles.safearea}>
        <Search description="Digite o cod. da desciplina ou nome" />
        <Card showDisciplina />
        <Card showDisciplina />
        <Card showDisciplina />
        <Card showDisciplina />
        <Card showDisciplina />
      </View>
    </View>
  );
};

Disciplina.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="md-search" size={28} color={tintColor} />
};

export default Disciplina;

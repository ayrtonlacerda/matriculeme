import React from 'react';
import { Text, View } from 'react-native';
import styles from './stylesaluno';
import { Header } from '../../components';

const Aluno = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Aluno" showBack />
      <View style={styles.safeArea}>
        <Text>Aluno</Text>
      </View>
    </View>
  );
};

export default Aluno;

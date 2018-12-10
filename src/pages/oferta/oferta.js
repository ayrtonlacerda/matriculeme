import React from 'react';
import { Text, View } from 'react-native';
import styles from './stylesoferta';
import { Card, Header } from '../../components';

const oferta = {
  codigo: 'A',
  disciplina: {
    codigo: 167975,
    nome: 'METODOLOGIA E DESENVOLVIMENTO DE SOFWARE'
  },
  periodoLetivo: {
    ano: 2017,
    numero: 1
  },
  numeroVagas: 10,
  numeroMatriculas: 0,
  listaHorarioAula: [
    {
      dia: 'QUA',
      hora: '08:00-09:50'
    },
    {
      dia: 'SEX',
      hora: '08:00-09:50'
    }
  ]
};

const Oferta = props => (
    <View style={styles.container}>
      <Header title="Oferta" showBack />
      <View style={styles.safeArea}>
        <Card showOferta data={oferta} />
      </View>
    </View>
  );

export default Oferta;

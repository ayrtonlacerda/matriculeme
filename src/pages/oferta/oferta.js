import React from 'react';
import { Text, View } from 'react-native';
import styles from './stylesoferta';
import { Card, Header } from '../../components';


const Oferta = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Oferta" showBack />
      <View style={styles.safeArea}>
        <Card showOferta />
      </View>
    </View>
  );
};

export default Oferta;

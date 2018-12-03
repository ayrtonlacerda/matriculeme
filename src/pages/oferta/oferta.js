import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ofertastyles';
import { Header } from '../../components';

const Oferta = () => (
  <View style={styles.container}>
    <Header title="Oferta" showExit />
    <Text>componentName</Text>
  </View>
);

Oferta.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="md-search" size={28} color={tintColor} />
};

export default Oferta;

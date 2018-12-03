import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './headerstyles';

const Header = props => {
  const { title, showBack, showExit } = props;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {showBack ? (
        <Icon name="md-arrow-back" size={25} style={styles.icon} />
      ) : (
        <View style={styles.concert} />
      )}
      <Text style={styles.title}>{title}</Text>
      {showExit ? (
        <Icon name="md-exit" size={25} style={styles.icon} />
      ) : (
        <View style={styles.concert} />
      )}
    </View>
  );
};

export default Header;

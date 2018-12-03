import React from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import styles from './headerstyles';

const Header = props => {
  const { title, showBack, showExit, navigation } = props;

  const navigateToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Login' }),
      ]
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="md-arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>

      ) : (
        <View style={styles.concert} />
      )}
      <Text style={styles.title}>{title}</Text>
      {showExit ? (
        <TouchableOpacity>
          <Icon name="md-exit" size={25} style={styles.icon} onPress={() => navigateToLogin()} />
        </TouchableOpacity>
      ) : (
        <View style={styles.concert} />
      )}
    </View>
  );
};

export default withNavigation(Header);

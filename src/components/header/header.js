import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import styles from './headerstyles';
import LottieView from 'lottie-react-native';


class Header extends Component {
  state ={
    progress: new Animated.Value(0)
  }

  componentWillMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
    }).start();
  }

  navigateToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Login' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const { title, showBack, showExit, navigation } = this.props;
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
  }
};

export default withNavigation(Header);

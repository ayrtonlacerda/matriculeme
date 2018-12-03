import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './loginstyle';

const Login = props => {
  const navigateToLogged = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        // Logged
        NavigationActions.navigate({ routeName: 'Logged' }),
      ]
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <ImageBackground source={require('../../assets/imgs/background.png')} style={styles.background}>
      <StatusBar backgroundColor="#017EF3" barStyle="light-content" />
      <View style={styles.containerLogin}>
        <Image source={require('../../assets/imgs/unblogo.png')} style={styles.image} />
        <Text style={styles.info}>Por favor digite seu usuario e senha</Text>
        <View style={styles.form}>
          <View style={styles.forms}>
            <Icon name="md-person" size={26} color="#222" style={styles.icon} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu CPF"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <View style={styles.forms}>
            <Icon name="md-lock" size={27} color="#222" style={styles.icon} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="senha"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.9}
        onPress={() => navigateToLogged()}
      >
        <View style={styles.button}>
          <Text style={styles.textbutton}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

Login.navigationOptions = {
  header: null
};

export default Login;

import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, ScrollView, Animated, Easing, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './disciplinastyles';
import { Header, Search, Card } from '../../components';
import LottieView from 'lottie-react-native';


class Disciplina extends Component {
  state = {
    disciplina: null,
    erro: '',
    loader: null,
    progress: new Animated.Value(0),
  }

  async componentWillMount() {
    this.setState({ loader: true });
    console.tron.log('willmounte');
    this.requisicaoDisciplina();
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  requisicaoDisciplina = async () => {
    console.tron.log('requ');
    axios.get('http://164.41.222.81/entidade/disciplina')
        .then(response => {
            console.tron.log(response);
            this.setState({ disciplina: response.data });
            this.setState({ loader: false });
        })
        .catch(error => {
            console.tron.log(error);
        });
  }
  render() {
    const { disciplina, loader } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Disciplina" showExit />
        <View style={styles.safearea}>
        <ScrollView>
          <Search description="Digite o cod. ou nome da disciplina" />
          {
            disciplina && (
                disciplina.map(item => (
                  <Card showDisciplina data={item} />
                ))
            )
          }
        </ScrollView>
        {
          loader && (
            <View style={styles.loaderView}>
              <LottieView
                source={require('../../assets/animation/gears.json')}
                autoPlay
                loop
                style={styles.loader}
                size={50}
              />
            </View>
          )
        }

        </View>
      </View>
    );
  }
}

Disciplina.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="md-search" size={28} color={tintColor} />
};

export default Disciplina;

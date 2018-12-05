import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './alunosstyles';
import { Header, Search, Card } from '../../components';
import axios from 'axios';
import LottieView from 'lottie-react-native';


class Alunos extends Component {
  state = {
    alunos: null,
    loader: true,
  }

  componentWillMount() {
    this.requisicaoAlunos();
  }
  requisicaoAlunos = async () => {
    console.tron.log('alun');
    axios.get('http://164.41.222.81/entidade/aluno')
        .then(response => {
            console.tron.log(response);
            this.setState({ alunos: response.data });
            this.setState({ loader: false });
        })
        .catch(error => {
            console.tron.log(error);
        });
  }

  render() {
    const { alunos, loader } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Alunos" showExit />
        <View style={styles.safearea}>
          <ScrollView>
            <Search description="Digite a matricula ou nome do aluno" />
            {
              alunos && (
                alunos.map(item => (
                    <Card showAluno data={item} />
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
                />
              </View>
            )
          }
        </View>
      </View>
    );
  }
}
Alunos.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={28} color={tintColor} />
};

export default Alunos;

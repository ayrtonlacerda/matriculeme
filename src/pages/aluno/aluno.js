import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './stylesaluno';
import { Header, Card } from '../../components';


class Aluno extends Component {
  state = {
    aluno: null,
    status: null,
    loader1: true,
    loader2: true,
    loader: true,    
  }

  async componentWillMount() {
    const matricula = this.props.navigation.getParam('data.matricula');        
    this.requisicaoAluno(matricula);
    this.requisicaoStatus(matricula);
  }

  requisicaoAluno = async matricula => {
    console.tron.log('requ');
    axios.get(`http://164.41.222.81/entidade/aluno/${matricula}`)
        .then(response => {
            console.tron.log(response);
            this.setState({ aluno: response.data });
            this.setState({ loader1: false });
        })
        .catch(error => {
            console.tron.log(error);
        });
  }

  requisicaoStatus = async matricula => {
    console.tron.log('requ');
    axios.get(`http://164.41.222.81/entidade/matricula/2017/1/aluno/${matricula}`)
        .then(response => {
            console.tron.log(response);
            this.setState({ status: response.data });
            this.setState({ loader2: false });
        })
        .catch(error => {
            console.tron.log(error);
        });
  }

  render() {
    const { status, aluno, loader, loader1, loader2 } = this.state;
    const { nome, curso, matricula, periodoIngresso } = aluno;
    if (!loader1 && !loader2) {
      this.setState({ loader: false });
    }
    return (
      <View style={styles.container}>
        <Header title="Aluno" showBack />
        <View style={styles.view} />
        <View style={styles.safeArea}>
          <View style={styles.area}>
            <View style={styles.concerto} />
            <Image source={require('../../assets/imgs/noprofile.jpg')} style={styles.image} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Historico')}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Historico</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
          {
            aluno && (
              <View style={styles.info}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.curso}>{curso.nome}</Text>
                <Text style={styles.curso}>{matricula}</Text>
                <Text style={styles.curso}>
                  Ingresso: {periodoIngresso.numero}/{periodoIngresso.ano}
                </Text>
              </View>
            )
          }            
          {
            status && (
              status.map(item => (
                <Card showStatus data={item} />
              ))
            )
          }
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
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Aluno;

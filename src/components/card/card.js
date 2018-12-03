import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './stylescard';


const Card = (props) => {
  console.tron.log(props);
  const { showDisciplina, showAluno, showOferta } = props;
  const showStatus = false;

  return (
    <View style={styles.container}>
     {
        showDisciplina && (
          <TouchableOpacity onPress={() => props.navigation.navigate('Oferta')}>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.title}>113034 - Calculo 1</Text>
              </View>
              <View style={styles.safearea}>
                <Text style={styles.pofessor}>Professor: Adail de castro</Text>
                <Text style={styles.turma}>Turma: A</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
      {
        showOferta && (
          <TouchableOpacity>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.title}>Turma A</Text>
              </View>
              <View style={styles.safearea}>
                <Text style={styles.professor}>Professor: Adail de castro</Text>
                <View style={styles.horario}>
                  <Text style={styles.turma}>SEG de 14:00-16:00</Text>
                  <Text style={styles.turma}>SEG de 14:00-16:00</Text>
                  <Text style={styles.turma}>SEG de 14:00-16:00</Text>
                </View>
                <View style={styles.vagas}>
                  <Text style={styles.turma}>Vagas: </Text>
                  <Text style={styles.numVagas}>15</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
      {
        showStatus && (
          <TouchableOpacity>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.title}>113034 - Calculo 1</Text>
              </View>
              <View style={styles.safearea}>
                <View style={styles.vagas}>
                  <Text style={styles.turma}>Status:</Text>
                  <Text style={styles.status}>Pre-Matriculado</Text>
                </View>
                <View style={styles.area}>
                  <Text style={styles.turma}>Priorida: 1</Text>
                  <Text style={styles.turma}>Turma:A</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
      {
        showAluno && (
          <TouchableOpacity onPress={() => props.navigation.navigate('Aluno')}>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.title}>DANIEL AKIRA ANDO</Text>
              </View>
              <View style={styles.safearea}>
                <Text style={styles.pofessor}>Matricula: 16/67011</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default withNavigation(Card);

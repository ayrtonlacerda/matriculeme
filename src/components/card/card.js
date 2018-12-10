import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './stylescard';

const Card = props => {
  // console.tron.log(props);
  const { showDisciplina, showAluno, showOferta, showStatus, showHistorico, data } = props;

  return (
    <View style={styles.container}>
      {showDisciplina && (
        <TouchableOpacity onPress={() => props.navigation.navigate('Oferta')}>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>{data.codigo}</Text>
            </View>
            <View style={styles.safearea}>
              <Text style={styles.turma}>{data.nome}</Text>
              <Text style={styles.pofessor}>Departamento: {data.unidadeAcademica}</Text>
              <Text style={styles.turma}>Creditos: {data.creditos}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {showOferta && (
        <TouchableOpacity>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>Turma {data.codigo}</Text>
            </View>
            <View style={styles.safearea}>
              <Text style={styles.professor}>
                {data.disciplina.codigo} - {data.disciplina.nome}
              </Text>
              <View style={styles.horario}>
                {data.listaHorarioAula.map(item => (
                  <Text style={styles.turma}>
                    {item.dia} de {item.hora}
                  </Text>
                ))}
              </View>
              <View style={styles.vagas}>
                <Text style={styles.turma}>Vagas: </Text>
                <Text style={styles.numVagas}>{data.numeroVagas}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {showStatus && (
        <TouchableOpacity>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>{data.turma.disciplina.codigo}</Text>
            </View>
            <View style={styles.safearea}>
              <Text style={styles.turma}>{data.turma.disciplina.nome}</Text>
              <View style={styles.vagas}>
                <Text style={styles.turma}>Status:</Text>
                <Text style={styles.status}>{data.status}</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.turma}>Priorida: 1</Text>
                <Text style={styles.turma}>Turma: {data.turma.codigo}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {showAluno && (
        <TouchableOpacity onPress={() => props.navigation.navigate('Aluno', data.matricula)}>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>{data.matricula}</Text>
            </View>
            <View style={styles.safearea}>
              <Text style={styles.pofessor}>Nome: {data.nome}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {showHistorico && (
        <View>
          <View style={styles.titleView2}>
            <Text style={styles.title2}>{data.disciplina.codigo}</Text>
          </View>
          <View style={styles.safearea}>
            <Text style={styles.turma}>{data.disciplina.nome}</Text>
            <Text style={styles.pofessor}>
              Periodo: {data.periodoLetivo.numero}/{data.periodoLetivo.ano}
            </Text>
            <View style={styles.vagas}>
              <Text style={styles.turma}>Mensão: </Text>
              <Text style={styles.numVagas}>{data.mencao}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default withNavigation(Card);

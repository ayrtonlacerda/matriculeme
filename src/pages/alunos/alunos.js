import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './alunosstyles';
import { Header, Search, Card } from '../../components';

const alunos = [
  {
    matricula: '16/74106',
    nome: 'DANIEL AKIRA ANDO'
  },
  {
    matricula: '16/67011',
    nome: 'VICTOR HUGO DE SOUSA'
  },
  {
    matricula: '16/39637',
    nome: 'RAYAN JHONNYE ALVES ALEXANDRINO'
  },
  {
    matricula: '16/31644',
    nome: 'JADE MARTINS ARANTES'
  },
  {
    matricula: '16/23561',
    nome: 'ALINE DOS SANTOS PEREIRA'
  },
  {
    matricula: '15/48490',
    nome: 'VINICIUS ALVES DE OLIVEIRA'
  },
  {
    matricula: '15/25481',
    nome: 'MAIRA LEITE CONCEICAO'
  },
  {
    matricula: '15/131492',
    nome: 'VICTOR NUNES GOMES'
  },
  {
    matricula: '15/127053',
    nome: 'VITOR DE AGUIAR CARAZZA'
  },
  {
    matricula: '15/124941',
    nome: 'THAMARA GUIMARAES SILVA'
  },
  {
    matricula: '15/122761',
    nome: 'ROGERIO OSENO PONTES'
  },
  {
    matricula: '15/122256',
    nome: 'ROBERTO DUARTE JUNIOR'
  },
  {
    matricula: '15/121535',
    nome: 'REBECCA CAROLINNE FREITAS ALVES'
  },
  {
    matricula: '15/119433',
    nome: 'PEDRO PAULO MARTINS DOS SANTOS'
  },
  {
    matricula: '15/119310',
    nome: 'PEDRO ISSA HELOU'
  },
  {
    matricula: '15/115730',
    nome: 'MATEUS MARCUZZO DA ROSA'
  },
  {
    matricula: '15/111521',
    nome: 'LUANA DAHER LOPES'
  },
  {
    matricula: '15/110177',
    nome: 'LARYSSA DAYSE VILAR E SILVA'
  },
  {
    matricula: '15/96077',
    nome: 'CARLOS EDUARDO DE MORAIS LEAL'
  },
  {
    matricula: '15/51821',
    nome: 'IVAN GUILHERME PAGANI FERNANDES'
  },
  {
    matricula: '15/50905',
    nome: 'ARTHUR PACHECO DOS SANTOS'
  },
  {
    matricula: '15/48650',
    nome: 'BRUNO SALDANHA CARMINATI'
  },
  {
    matricula: '15/41663',
    nome: 'VITOR CARDOSO BORGES LEAL'
  },
  {
    matricula: '15/31111',
    nome: 'IGOR VIRGILIO AQUINO MARTINS DE A'
  },
  {
    matricula: '15/30815',
    nome: 'HUDSON DE MORAES FILHO'
  },
  {
    matricula: '15/28268',
    nome: 'EDUARDO COSTA DE CARVALHO LOUREIRO'
  },
  {
    matricula: '15/22162',
    nome: 'YAN MACHADO FERNANDES DE SOUSA'
  },
  {
    matricula: '15/21999',
    nome: 'WALISSON FRANCISCO DE ALBUQUERQUE'
  },
  {
    matricula: '15/21948',
    nome: 'VIVIAN VARELA'
  },
  {
    matricula: '15/17487',
    nome: 'MARINA MAIA HEREJK'
  },
  {
    matricula: '15/16138',
    nome: 'LUDIMILA DE OLIVEIRA FELIX'
  },
  {
    matricula: '15/15298',
    nome: 'LEONARDO LACERDA DE OLIVEIRA'
  },
  {
    matricula: '15/10156',
    nome: 'EDUARDO RAFAEL ALVES VARGAS'
  },
  {
    matricula: '15/9492',
    nome: 'DANIEL MENESES CURY'
  },
  {
    matricula: '15/8712',
    nome: 'CARLOS ALEXANDRE GRIEBLER'
  },
  {
    matricula: '14/93654',
    nome: 'ERICK SILVA DE MORAES'
  },
  {
    matricula: '14/93600',
    nome: 'LAURO MARTINS'
  },
  {
    matricula: '14/47288',
    nome: 'PABLO PIORNO BALTORE'
  },
  {
    matricula: '14/44891',
    nome: 'LEANDRO CLAUDINO'
  },
  {
    matricula: '14/42511',
    nome: 'FELIPE REGIS GONCALVES CABRAL'
  },
  {
    matricula: '14/10619',
    nome: 'ISRAEL PEREIRA DE ALMEIDA'
  },
  {
    matricula: '14/9327',
    nome: 'RENAN BITTENCOURT COELHO SCORZA GONCALVES'
  },
  {
    matricula: '14/134290',
    nome: 'TITO FONTES VIEIRA CIDADE'
  },
  {
    matricula: '14/133579',
    nome: 'THAYANE RODRIGUES VIANA'
  },
  {
    matricula: '14/129679',
    nome: 'RAFAELA GALVAO TEIXEIRA'
  },
  {
    matricula: '14/126521',
    nome: 'MOACIR BALESTRINI FILHO'
  },
  {
    matricula: '14/115244',
    nome: 'GREGORY LUIZ RIBEIRO CORREA'
  },
  {
    matricula: '14/113101',
    nome: 'FELIPE SILVA DOS SANTOS'
  },
  {
    matricula: '14/43723',
    nome: 'MATHEUS FONTENELE DOS SANTOS BESSA'
  },
  {
    matricula: '14/37995',
    nome: 'HUGO LEITE FLORENCO MAIA'
  },
  {
    matricula: '14/20405',
    nome: 'RACHMYNE SABANA DIABATE'
  },
  {
    matricula: '14/14456',
    nome: 'THIAGO COSTA NASCIMENTO'
  },
  {
    matricula: '14/12348',
    nome: 'PETRONIO HENRIQUE MOREIRA CRUZ'
  }
];
const Alunos = () => (
  <View style={styles.container}>
    <Header title="Alunos" showExit />
    <View style={styles.safearea}>
      <ScrollView>
        <Search description="Digite a matricula ou nome do aluno" />
        {alunos.map(item => (
          <Card showAluno data={item} />
        ))}
      </ScrollView>
    </View>
  </View>
);

Alunos.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={28} color={tintColor} />
};

export default Alunos;

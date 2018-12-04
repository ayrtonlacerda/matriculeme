import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './disciplinastyles';
import { Header, Search, Card } from '../../components';

const discilina = {
  codigo: 113034,
  nome: 'CALCULO 1',
  creditos: 6,
  unidadeAcademica: {
    codigo: 'MAT',
    nome: 'DEPARTAMENTO DE MATEMATICA'
  }
};

const oferta = {
  codigo: 'A',
  disciplina: {
    codigo: 167975,
    nome: 'METODOLOGIA E DESENVOLVIMENTO DE SOFWARE'
  },
  periodoLetivo: {
    ano: 2017,
    numero: 1
  },
  numeroVagas: 10,
  numeroMatriculas: 0,
  listaHorarioAula: [
    {
      dia: 'QUA',
      hora: '08:00-09:50'
    },
    {
      dia: 'SEX',
      hora: '08:00-09:50'
    }
  ]
};

const matricula = {
  matricula: '15/25481',
  nome: 'MAIRA LEITE CONCEICAO',
  periodoIngresso: {
    ano: '2015',
    numero: '2'
  },
  curso: {
    codigo: 2,
    nome: 'ENGENHARIA DE REDES DE COMUNICACAO'
  }
};

const aluno = {
  matricula: '16/74106',
  nome: 'DANIEL AKIRA ANDO'
};

const historico = {
  mencao: 'MS',
  disciplina: {
    codigo: 118001,
    nome: 'FISICA 1'
  },
  periodoLetivo: {
    ano: 2014,
    numero: '1'
  }
};

const diciplinas = [
  {
    codigo: 108529,
    nome: 'REDES DE TELECOMUNICACOES',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 108537,
    nome: 'LABORATORIO REDES DE TELECOMUNICACOES',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 108545,
    nome: 'ARQUITETURA PROTOCOLOS REDES',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 108553,
    nome: 'LABORATORIO ARQUITETURA E PROTOCOLOS DE REDES',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 110302,
    nome: 'INTRODUCAO A MECANICA DOS SOLIDOS',
    creditos: 4,
    unidadeAcademica: 'ENC'
  },
  {
    codigo: 113034,
    nome: 'CALCULO 1',
    creditos: 6,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113042,
    nome: 'CALCULO 2',
    creditos: 6,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113051,
    nome: 'CALCULO 3',
    creditos: 6,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113069,
    nome: 'VARIAVEL COMPLEXA 1',
    creditos: 6,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113093,
    nome: 'INTRODUCAO A ALGEBRA LINEAR',
    creditos: 4,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113301,
    nome: 'EQUACOES DIFERENCIAIS 1',
    creditos: 4,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113417,
    nome: 'CALCULO NUMERICO',
    creditos: 4,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113522,
    nome: 'METODOS MATEMATICOS FISICA 1',
    creditos: 6,
    unidadeAcademica: 'MAT'
  },
  {
    codigo: 113913,
    nome: 'INTRODUCAO A CIENCIA DA COMPUTACAO',
    creditos: 4,
    unidadeAcademica: 'CIC'
  },
  {
    codigo: 114626,
    nome: 'QUIMICA GERAL TEORICA',
    creditos: 4,
    unidadeAcademica: 'IQD'
  },
  {
    codigo: 114634,
    nome: 'QUIMICA GERAL EXPERIMENTAL',
    creditos: 2,
    unidadeAcademica: 'IQD'
  },
  {
    codigo: 115045,
    nome: 'PROBABILIDADE E ESTATISTICA',
    creditos: 6,
    unidadeAcademica: 'EST'
  },
  {
    codigo: 118001,
    nome: 'FISICA 1',
    creditos: 4,
    unidadeAcademica: 'IFD'
  },
  {
    codigo: 118010,
    nome: 'FISICA 1 EXPERIMENTAL',
    creditos: 2,
    unidadeAcademica: 'IFD'
  },
  {
    codigo: 118028,
    nome: 'FISICA 2',
    creditos: 4,
    unidadeAcademica: 'IFD'
  },
  {
    codigo: 118036,
    nome: 'FISICA 2 EXPERIMENTAL',
    creditos: 4,
    unidadeAcademica: 'IFD'
  },
  {
    codigo: 122408,
    nome: 'CIENCIAS DO AMBIENTE',
    creditos: 2,
    unidadeAcademica: 'ECL'
  },
  {
    codigo: 132012,
    nome: 'INTRODUCAO A ECONOMIA',
    creditos: 4,
    unidadeAcademica: 'ECO'
  },
  {
    codigo: 134465,
    nome: 'INTRODUCAO A SOCIOLOGIA',
    creditos: 4,
    unidadeAcademica: 'SOL'
  },
  {
    codigo: 160032,
    nome: 'CONTROLE DINAMICO',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 160041,
    nome: 'ANALISE DINAMICA LINEAR',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 162019,
    nome: 'DESENHO TECNICO',
    creditos: 4,
    unidadeAcademica: 'ENC'
  },
  {
    codigo: 163872,
    nome: 'INTRODUCAO A ENGENHARIA ELETRICA',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167011,
    nome: 'CIRCUITOS ELETRICOS 1',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167029,
    nome: 'CIRCUITOS ELETRICOS 2',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167037,
    nome: 'ELETROMAGNETISMO 1',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167045,
    nome: 'ELETROMAGNETISMO 2',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167053,
    nome: 'ELETRONICA 1',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167061,
    nome: 'ELETRONICA 2',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167070,
    nome: 'MATERIAIS ELETRICOS E MAGNETICOS',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167088,
    nome: 'CONVERSAO DE ENERGIA',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167193,
    nome: 'SISTEMAS DE COMUNICACOES 1',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167266,
    nome: 'TEORIA DA INFORMACAO',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167401,
    nome: 'ANALISE DE SISTEMAS DE POTENCIA',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167410,
    nome: 'INSTALACOES ELETRICAS',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167746,
    nome: 'ARQUITETURA DE PROCESSADORES DIGITAIS',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167878,
    nome: 'COMUNICACOES DIGITAIS',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167959,
    nome: 'FUNDAMENTOS DE REDES',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167975,
    nome: 'METODOLOGIA E DESENVOLVIMENTO DE SOFWARE',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167983,
    nome: 'SISTEMAS DIGITAIS 1',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 167991,
    nome: 'SISTEMAS DIGITAIS 2',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 168203,
    nome: 'FENOMENOS DE TRANSPORTE',
    creditos: 5,
    unidadeAcademica: 'ENM'
  },
  {
    codigo: 168921,
    nome: 'HIGIENE E SEGURANCA DO TRABALHO',
    creditos: 2,
    unidadeAcademica: 'EPR'
  },
  {
    codigo: 169072,
    nome: 'LABORATORIO CONVERSAO DE ENERGIA',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169081,
    nome: 'CIRCUITOS POLIFASICOS',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169111,
    nome: 'LABORATORIO PRINCIPIOS DE COMUNICACAO',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169129,
    nome: 'TRABALHO CONCLUSAO DE CURSO 2',
    creditos: 8,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169188,
    nome: 'PRINCIPIOS DE COMUNICACAO',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169196,
    nome: 'TRABALHO CONCLUSAO DE CURSO 1',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169234,
    nome: 'MAQUINAS ELETRICAS',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169650,
    nome: 'REDES DE COMUNICACAO DE DADOS',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169676,
    nome: 'COMPUTACAO PARA ENGENHARIA',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 169749,
    nome: 'SISTEMAS DE PROGRAMACAO',
    creditos: 4,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 170381,
    nome: 'PROJETO FINAL DE GRADUACAO 1',
    creditos: 2,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 170399,
    nome: 'PROJETO FINAL DE GRADUACAO 2',
    creditos: 6,
    unidadeAcademica: 'ENE'
  },
  {
    codigo: 181315,
    nome: 'ORGANIZACAO INDUSTRIAL',
    creditos: 4,
    unidadeAcademica: 'EPR'
  },
  {
    codigo: 184802,
    nome: 'NOCOES DE DIREITO',
    creditos: 4,
    unidadeAcademica: 'FDD'
  }
];

const Disciplina = props => {
  console.tron.log(props);
  return (
    <View style={styles.container}>
      <Header title="Disciplina" showExit />
      <View style={styles.safearea}>
        <ScrollView>
          <Search description="Digite o cod. da desciplina ou nome" />
          {diciplinas.map(item => (
            <Card showDisciplina data={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

Disciplina.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="md-search" size={28} color={tintColor} />
};

export default Disciplina;

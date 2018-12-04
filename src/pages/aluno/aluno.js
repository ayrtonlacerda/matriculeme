import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './stylesaluno';
import { Header, Card } from '../../components';

const aluno = {
  matricula: '16/74106',
  nome: 'DANIEL AKIRA ANDO',
  periodoIngresso: {
    ano: '2016',
    numero: '1'
  },
  curso: {
    codigo: 1,
    nome: 'ENGENHARIA ELETRICA'
  }
};

const status = [
  {
    status: 'Pedido',
    prioridade: 1,
    turma: {
      codigo: 'D',
      disciplina: {
        codigo: 113417,
        nome: 'CALCULO NUMERICO',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'TER',
          hora: '14:00-15:50'
        },
        {
          dia: 'QUI',
          hora: '14:00-15:50'
        }
      ]
    }
  },
  {
    status: 'Pedido',
    prioridade: 2,
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 167975,
        nome: 'METODOLOGIA E DESENVOLVIMENTO DE SOFWARE',
        creditos: 4
      },
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
    }
  },
  {
    status: 'Confirmado',
    turma: {
      codigo: 'B',
      disciplina: {
        codigo: 132012,
        nome: 'INTRODUCAO A ECONOMIA',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '10:00-11:50'
        },
        {
          dia: 'QUA',
          hora: '10:00-11:50'
        }
      ]
    }
  },
  {
    status: 'Confirmado',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 167266,
        nome: 'TEORIA DA INFORMACAO',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'TER',
          hora: '16:00-17:50'
        },
        {
          dia: 'QUI',
          hora: '16:00-17:50'
        }
      ]
    }
  },
  {
    status: 'Confirmado',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 108529,
        nome: 'REDES DE TELECOMUNICACOES',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '16:00-17:50'
        },
        {
          dia: 'QUA',
          hora: '16:00-17:50'
        }
      ]
    }
  },
  {
    status: 'Confirmado',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 108537,
        nome: 'LABORATORIO REDES DE TELECOMUNICACOES',
        creditos: 2
      },
      listaHorarioAula: [
        {
          dia: 'SEX',
          hora: '10:00-11:50'
        }
      ]
    }
  },
  {
    status: 'Retirado',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 167878,
        nome: 'COMUNICACOES DIGITAIS',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '08:00-09:50'
        },
        {
          dia: 'QUA',
          hora: '08:00-09:50'
        }
      ]
    }
  },
  {
    status: 'Erro',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 113522,
        nome: 'METODOS MATEMATICOS FISICA 1',
        creditos: 6
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '10:00-11:50'
        },
        {
          dia: 'QUA',
          hora: '10:00-11:50'
        },
        {
          dia: 'SEX',
          hora: '10:00-11:50'
        }
      ]
    }
  },
  {
    status: 'PreMatricula',
    turma: {
      codigo: 'D',
      disciplina: {
        codigo: 113417,
        nome: 'CALCULO NUMERICO',
        creditos: 4
      },
      listaHorarioAula: [
        {
          dia: 'TER',
          hora: '14:00-15:50'
        },
        {
          dia: 'QUI',
          hora: '14:00-15:50'
        }
      ]
    }
  },
  {
    status: 'Retirado Coordenador',
    turma: {
      codigo: 'B',
      disciplina: {
        codigo: 113051,
        nome: 'CALCULO 3',
        creditos: 6
      },
      listaHorarioAula: [
        {
          dia: 'TER',
          hora: '08:00-09:50'
        },
        {
          dia: 'QUI',
          hora: '08:00-09:50'
        },
        {
          dia: 'SEX',
          hora: '08:00-09:50'
        }
      ]
    }
  },
  {
    status: 'Retirado Coordenador',
    turma: {
      codigo: 'K',
      disciplina: {
        codigo: 113042,
        nome: 'CALCULO 2',
        creditos: 6
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '14:00-15:50'
        },
        {
          dia: 'QUA',
          hora: '14:00-15:50'
        },
        {
          dia: 'SEX',
          hora: '14:00-15:50'
        }
      ]
    }
  },
  {
    status: 'Matriculado',
    turma: {
      codigo: 'J',
      disciplina: {
        codigo: 113034,
        nome: 'CALCULO 1',
        creditos: 6
      },
      listaHorarioAula: [
        {
          dia: 'SEG',
          hora: '14:00-15:50'
        },
        {
          dia: 'QUA',
          hora: '14:00-15:50'
        },
        {
          dia: 'SEX',
          hora: '14:00-15:50'
        }
      ]
    }
  },
  {
    status: 'Matriculado',
    turma: {
      codigo: 'A',
      disciplina: {
        codigo: 110302,
        nome: 'INTRODUCAO A MECANICA DOS SOLIDOS',
        creditos: 4
      },
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
    }
  }
];

const Aluno = props => {
  console.tron.log(props);
  const { nome, periodoIngresso, matricula, curso } = aluno;
  return (
    <View style={styles.container}>
      <Header title="Aluno" showBack />
      <View style={styles.view} />
      <View style={styles.safeArea}>
        <View style={styles.area}>
          <View style={styles.concerto} />
          <Image source={require('../../assets/imgs/noprofile.jpg')} style={styles.image} />
          <TouchableOpacity onPress={() => props.navigation.navigate('Historico')}>
            <View style={styles.button}>
              <Text style={styles.textButton}>Historico</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.info}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.curso}>{curso.nome}</Text>
            <Text style={styles.curso}>{matricula}</Text>
            <Text style={styles.curso}>
              Ingresso: {periodoIngresso.numero}/{periodoIngresso.ano}
            </Text>
          </View>
          {status.map(item => (
            <Card showStatus data={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Aluno;

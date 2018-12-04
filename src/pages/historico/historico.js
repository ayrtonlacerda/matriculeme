import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styleshistorico';
import { Header, Card } from '../../components';

const historico = [
  {
    mencao: 'MS',
    disciplina: {
      codigo: 118001,
      nome: 'FISICA 1'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 113093,
      nome: 'INTRODUCAO A ALGEBRA LINEAR'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 113034,
      nome: 'CALCULO 1'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 118010,
      nome: 'FISICA 1 EXPERIMENTAL'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 167959,
      nome: 'FUNDAMENTOS DE REDES'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '1'
    }
  },
  {
    mencao: 'MM',
    disciplina: {
      codigo: 113042,
      nome: 'CALCULO 2'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 118028,
      nome: 'FISICA 2'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 118036,
      nome: 'FISICA 2 EXPERIMENTAL'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 115045,
      nome: 'PROBABILIDADE E ESTATISTICA'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 169676,
      nome: 'COMPUTACAO PARA ENGENHARIA'
    },
    periodoLetivo: {
      ano: 2014,
      numero: '2'
    }
  },
  {
    mencao: 'MM',
    disciplina: {
      codigo: 113051,
      nome: 'CALCULO 3'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 113301,
      nome: 'EQUACOES DIFERENCIAIS 1'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 169749,
      nome: 'SISTEMAS DE PROGRAMACAO'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 167983,
      nome: 'SISTEMAS DIGITAIS 1'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 167037,
      nome: 'ELETROMAGNETISMO 1'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '2'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 167011,
      nome: 'CIRCUITOS ELETRICOS 1'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 113522,
      nome: 'METODOS MATEMATICOS FISICA 1'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '2'
    }
  },
  {
    mencao: 'MM',
    disciplina: {
      codigo: 167991,
      nome: 'SISTEMAS DIGITAIS 2'
    },
    periodoLetivo: {
      ano: 2015,
      numero: '2'
    }
  },
  {
    mencao: 'MM',
    disciplina: {
      codigo: 167746,
      nome: 'ARQUITETURA DE PROCESSADORES DIGITAIS'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 122408,
      nome: 'CIENCIAS DO AMBIENTE'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 167070,
      nome: 'MATERIAIS ELETRICOS E MAGNETICOS'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '1'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 167975,
      nome: 'METODOLOGIA E DESENVOLVIMENTO DE SOFWARE'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '1'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 167029,
      nome: 'CIRCUITOS ELETRICOS 2'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '1'
    }
  },
  {
    mencao: 'MM',
    disciplina: {
      codigo: 167053,
      nome: 'ELETRONICA 1'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 169111,
      nome: 'LABORATORIO PRINCIPIOS DE COMUNICACAO'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 108553,
      nome: 'LABORATORIO ARQUITETURA E PROTOCOLOS DE REDES'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '2'
    }
  },
  {
    mencao: 'MS',
    disciplina: {
      codigo: 108545,
      nome: 'ARQUITETURA PROTOCOLOS REDES'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '2'
    }
  },
  {
    mencao: 'SS',
    disciplina: {
      codigo: 169188,
      nome: 'PRINCIPIOS DE COMUNICACAO'
    },
    periodoLetivo: {
      ano: 2016,
      numero: '2'
    }
  }
];

const Historico = () => (
  <View style={styles.container}>
    <Header title="Historico" showBack />
    <View style={styles.safeArea}>
      <ScrollView>
        {historico.map(item => (
          <Card showHistorico data={item} />
        ))}
      </ScrollView>
    </View>
  </View>
);

export default Historico;

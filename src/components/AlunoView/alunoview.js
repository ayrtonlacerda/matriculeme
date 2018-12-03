import React from 'react';
import { Text, View } from 'react-native';
import styles from './stylescard';


const AlunoView = (props) => {
  const showDescription = false;
  const showOferta = false;
  const showStatus = true;
  return (
    <View style={styles.container}>
     {
        showDescription && (
          <View>
            <View style={styles.titleView}>
              <Text style={styles.title}>113034 - Calculo 1</Text>
            </View>
            <View style={styles.safearea}>
              <Text style={styles.pofessor}>Professor: Adail de castro</Text>
              <Text style={styles.turma}>Turma: A</Text>
            </View>
           </View>
        )
      }
    </View>
  );
};

export default AlunoView;

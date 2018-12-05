import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './stylessearch';
import Icon from 'react-native-vector-icons/Ionicons';


const Search = (props) => {
  const { description, displina, oferta } = props;
  return (
    <View style={styles.container}>
      <Icon name="md-search" size={25} color="rgba(255,255,255, 0.8)" />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={description}
          placeholderTextColor="rgba(255,255,255, 0.8)"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
    </View>
  );
};

export default Search;

import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Search.style';

const Search = ({changeText, valueToDo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={valueToDo}
        onChangeText={changeText}
        placeholderTextColor={'#fff'}
        style={styles.searchBar}
        placeholder="Yapılacak..."
      />
    </View>
  );
};

export default Search;

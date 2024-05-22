import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from './components/input';
import Card from './components/cards';

const App = () => {
  const [addToDo, setAddToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [countToDo, setCountToDo] = useState(0);

  const AddButton = () => {
    if (addToDo.trim()) {
      setToDoList([...toDoList, addToDo]);
      setAddToDo('');
      setCountToDo(countToDo + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_app}>
        <Text style={styles.title}>ToDo App</Text>
      </View>
      <View style={styles.todo_container}>
        <Text style={styles.todo_title}>Yapılacaklar</Text>
        <Text style={styles.todo_title}>{countToDo}</Text>
      </View>
      <View style={styles.content_container}>
        <FlatList
          data={toDoList}
          renderItem={({item}) => <Card text={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.search_container}>
        <SearchBar valueToDo={addToDo} changeText={setAddToDo} />
        <View style={styles.addButton}>
          <Button color={'#112027'} onPress={AddButton} title="Ekle" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027',
  },
  container_app: {
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
  },
  todo_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  todo_title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFA500',
  },
  content_container: {
    flex: 0.8,
  },
  search_container: {
    flex: 0.2,
    backgroundColor: '#36474F',
    borderRadius: 25,
    margin: 10,
  },
  addButton: {
    backgroundColor: '#FFA500',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    margin: 2,
    padding: 2,
  },
});

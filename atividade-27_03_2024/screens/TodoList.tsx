import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TodoItem {
  id: string;
  text: string;
}

const TodoList = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    try {
      const savedTodoList = await AsyncStorage.getItem('todoList');
      if (savedTodoList !== null) {
        setTodoList(JSON.parse(savedTodoList));
      }
    } catch (error) {
      console.error('Error fetching todo list:', error);
    }
  };

  const saveTodoList = async (updatedTodoList: TodoItem[]) => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    } catch (error) {
      console.error('Error saving todo list:', error);
    }
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      const updatedTodoList: TodoItem[] = [...todoList, { id: Date.now().toString(), text }];
      setTodoList(updatedTodoList);
      saveTodoList(updatedTodoList);
      setText('');
    }
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodoList: TodoItem[] = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
    saveTodoList(updatedTodoList);
  };

  const renderItem = ({ item }: { item: TodoItem }) => (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginRight: 10 }}
          placeholder="Descrição da Tarefa"
          onChangeText={setText}
          value={text}
        />
        <Button title="Adicionar Tarefa" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;
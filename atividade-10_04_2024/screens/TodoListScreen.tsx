import React from 'react';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from '../types/TodoItem';

const storageTodoListKey = '@todo-list-key'

const RenderItem = ({
  todoItem,
  onDelete,
}: {
  todoItem: TodoItem
  onDelete: (item: TodoItem) => void
}) => (
    <TouchableOpacity style={styles.item} onPress={() => onDelete(todoItem)}>
      <Text style={styles.itemText} numberOfLines={1} selectable>
        {todoItem.description}
      </Text>
    </TouchableOpacity>
)

const TodoListScreen = () => {
  const [todoItemList, setTodoItemList] = React.useState<TodoItem[]>([])
  const [todoItemDescription, setTodoItemDescription] = React.useState('')

    React.useEffect(() => {
    const getTodoItems = async () => {
      const savedItems = await AsyncStorage.getItem(storageTodoListKey)
      if (savedItems === null) {
        return
      }
      const items = JSON.parse(savedItems) || []
      setTodoItemList(items)
    }
    getTodoItems()
  }, [])

  const handleAddItem = async () => {
    if (!todoItemDescription) {
      alert('Descrição da tarefa inválida!')
      return
    }

    if (!todoItemList.length) {
      const arrTodo = [
        {
          id: 1,
          title: '',
          description: todoItemDescription,
        },
      ]
      await AsyncStorage.setItem(storageTodoListKey, JSON.stringify(arrTodo))

      setTodoItemList(arrTodo)
      setTodoItemDescription('')
      return
    }

    const todoItemListCopy = [...todoItemList]

    const lastItemIdPlusOne = todoItemList[todoItemList.length - 1].id + 1

    const newItem: TodoItem = {
      id: lastItemIdPlusOne,
      title: '',
      description: todoItemDescription,
    }

    todoItemListCopy.push(newItem)

    await AsyncStorage.setItem(
      storageTodoListKey,
      JSON.stringify(todoItemListCopy)
    )

    setTodoItemList(todoItemListCopy)
    setTodoItemDescription('')
  }

  const handleDeleteItem = (item: TodoItem) => {
    const index = todoItemList.findIndex((todo) => todo.id === item.id)

    const todoItemListCopy = todoItemList.toSpliced(index, 1)

    setTodoItemList(todoItemListCopy)
    AsyncStorage.setItem(storageTodoListKey, JSON.stringify(todoItemListCopy))
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={todoItemList}
        renderItem={({ item }) => <RenderItem todoItem={item} onDelete={handleDeleteItem} />}
        contentContainerStyle={{ gap: 5, marginTop: 5 }}
        keyExtractor={(item, i) => (item.id ?? i).toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: 18,
  },
});

export default TodoListScreen;

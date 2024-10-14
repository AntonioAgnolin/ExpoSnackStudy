import { AntDesign, Entypo } from '@expo/vector-icons'
import React from 'react'
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import TodoItemType from '../types/TodoItem'

const RightSwipeActions = ({
  item,
  onDelete,
  progress,
}: {
  item: TodoItemType;
  onDelete: (item: TodoItemType) => void;
  progress: Animated.AnimatedInterpolation<number>;
}) => {
  const transform = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });
  return (
    <Animated.View
      style={[
        styles.actionContainer,
        {
          transform: [{ translateX: transform }],
        },
      ]}>
      <TouchableOpacity style={styles.actionButton} onPress={() => onEdit(item)}>
        <Entypo name="edit" size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => onDelete(item)}>
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};
const LeftSwipeActions = ({
  item,
  onEdit,
  progress,
}: {
  item: TodoItemType;
  onEdit: (item: TodoItemType) => void;
  progress: Animated.AnimatedInterpolation<number>;
}) => {
  const transform = progress.interpolate({
    inputRange: [1, 0],
    outputRange: [0, 10],
  });

  return (
    <Animated.View
      style={[
        styles.item,
        {
          backgroundColor: 'lightcoral',
          alignItems: 'flex-end',
          transform: [{ translateX: transform }],
        },
      ]}>
      <TouchableOpacity style={styles.actionButton} onPress={() => onEdit(item)}>
        <Entypo name="edit" size={18} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => onDelete(item)}>
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};
const TodoItem = ({
  todoItem,
  onDelete,
  onEdit,
}: {
  todoItem: TodoItemType;
  onDelete: (item: TodoItemType) => void;
  onEdit: (item: TodoItemType) => void;
}) => {
  return (
    <Swipeable
      renderRightActions={(
        progressAnimatedValue: Animated.AnimatedInterpolation<string | number>
      ) => (
        <RightSwipeActions
          item={todoItem}
          onDelete={onDelete}
          progress={progressAnimatedValue}
        />
      )}
      renderLeftActions={(
        progressAnimatedValue: Animated.AnimatedInterpolation<string | number>
      ) => (
        <LeftSwipeActions
          item={todoItem}
          onEdit={onEdit}
          progress={progressAnimatedValue}
        />
      )}>
      <View style={styles.item}>
        <Text style={styles.itemText} numberOfLines={1} selectable>
          {todoItem.description}
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  actionButton: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodoItem;

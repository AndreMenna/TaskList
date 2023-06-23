import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const HistoryScreen = () => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <View>
      <Text>Tarefas Concluídas:</Text>
      {completedTasks.map((task) => (
        <Text key={task.id}>{task.name}</Text>
      ))}
    </View>
  );
};

export default HistoryScreen;
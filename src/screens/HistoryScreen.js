import React, { useContext } from 'react';
import { View, TouchableOpacity  } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { Text } from '/src/styles/Text';
import { TextTaskCompleted } from '/src/styles/TextTaskCompleted';
import { Container } from '/src/styles/Container';
import { styles } from '/src/styles/HistoryScreenStyle';

const HistoryScreen = () => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <View style={styles.container}>
      <Container>
        <Text> Lista de tarefas Concluídas:</Text>
        <br></br>
        {completedTasks.map((task) => (
        <TextTaskCompleted key={task.id}>{task.name}</TextTaskCompleted>))}
      </Container>
    </View>
  );
};

export default HistoryScreen;
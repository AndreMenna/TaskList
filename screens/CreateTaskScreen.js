import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { styles } from '/src/styles/LoginScreenStyle';

const CreateTaskScreen = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');

  const handleCreateTask = () => {
    if (taskName) {
      // Adicione a nova tarefa ao contexto
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cadastre uma tarefa aqui."
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Criar Tarefa" onPress={handleCreateTask} />
    </View>
  );
};

export default CreateTaskScreen;
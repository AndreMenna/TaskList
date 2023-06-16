import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { styles } from '/src/styles/CreateTaskScreenStyle';
import { Button } from '/src/styles/Button';
import { ButtonText } from '/src/styles/ButtonText';
import { Container } from '/src/styles/Container';
import { Form } from '/src/styles/Form';
import { Input } from '/src/styles/Input';

const CreateTaskScreen = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');

  const handleCreateTask = () => {
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.container}>
      <Container>
        <br></br><br></br>
        <Form>
          <Text>Inserir tarefa</Text>
          <Input
              value={taskName}
              onChangeText={setTaskName}
            />
        </Form>
        <Button onPress={handleCreateTask}>
            <ButtonText>Inserir tarefa</ButtonText>
        </Button>
      </Container>
    </View>
  );
};

export default CreateTaskScreen;
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TaskContext } from '/src/context/TaskContext';
import { styles } from '/src/styles/MainScreenStyle';
import { Button } from '/src/styles/Button';
import { ButtonText } from '/src/styles/ButtonText';
import { Container } from '/src/styles/Container';

const MainScreen = ({ navigation }) => {
  const { tasks, markTaskAsCompleted, clearTasks } = useContext(TaskContext);
  const handleLogout = () => {
    clearTasks();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Container>
        <Text>Lista de tarefas | Clique na tarefa para concluir.</Text>
        {tasks.length === 0 ? (<Text>Não há tarefas cadastradas.</Text>
        ) : (
          tasks.map((task) => (
            <Text
              style={{
                color: task.completed ? 'green' : 'red',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
              key={task.id}
              onPress={() => markTaskAsCompleted(task.id)}
            >
              {task.name} | {task.completed ? 'Concluída' : 'Não concluída'}
            </Text>
          ))
        )}
        <br></br>
        <Button onPress={() => navigation.navigate('Crie suas tarefas')}>
          <ButtonText>Criar Tarefas</ButtonText>
        </Button>
        <br></br>
        <Button onPress={() => navigation.navigate('Histórico de tarefas concluídas')}>
          <ButtonText>Histórico de tarefas</ButtonText>
        </Button>
        <br></br>
        <Button onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Container>
    </View>
  );
};

export default MainScreen;
import React, { useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
//import { TaskContext } from '../context/TaskContext';
import { TaskContext } from '/src/context/TaskContext';
import { styles } from '/src/styles/LoginScreenStyle';

const MainScreen = ({ navigation }) => {
  const { tasks, markTaskAsCompleted } = useContext(TaskContext);

  const handleLogout = () => {
    // Remova as tarefas do contexto ao deslogar
    // e redireciona para a tela de login
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Tarefas:</Text>
      {tasks.map((task) => (
        <Text key={task.id} onPress={() => markTaskAsCompleted(task.id)}>
          {task.name} - {task.completed ? 'Concluída' : 'Não concluída'}
        </Text>
      ))}
      <Button title="Logout" onPress={handleLogout} />

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTask')}
        style={{ marginTop: 10, backgroundColor: 'lightblue', padding: 10 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Criar Tarefa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={{ marginTop: 10, backgroundColor: 'lightblue', padding: 10 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Histórico de Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MainScreen;
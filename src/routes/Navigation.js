import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TaskProvider } from '/src/context/TaskContext';
import LoginScreen from '/src/screens/LoginScreen';
import MainScreen from '/src/screens/MainScreen';
import CreateTaskScreen from '/src/screens/CreateTaskScreen';
import HistoryScreen from '/src/screens/HistoryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Lista de tarefas" component={MainScreen} />
          <Stack.Screen name="Crie suas tarefas" component={CreateTaskScreen} />
          <Stack.Screen name="Histórico de tarefas concluídas" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};

export default Navigation;
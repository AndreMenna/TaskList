import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '/src/styles/LoginScreenStyle';
import { Button } from '/src/styles/Button';
import { ButtonText } from '/src/styles/ButtonText';
import { Container } from '/src/styles/Container';
import { Form } from '/src/styles/Form';
import { Input } from '/src/styles/Input';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.replace('Lista de tarefas');
    } else {
      alert('Usuário e senha são obrigatórios!');
    }
  };

  return (
    <View style={styles.container}>
      <Container>
        <br></br><br></br>
        <Form>
          <Text>Usuário</Text>
          <Input
              value={username}
              onChangeText={setUsername}
            />
          <Text>Senha</Text>
          <Input
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
        </Form>
        <br></br>
          <Button onPress={handleLogin}>
              <ButtonText>Acessar</ButtonText>
          </Button>
      </Container>
    </View>
  );
};

export default LoginScreen;
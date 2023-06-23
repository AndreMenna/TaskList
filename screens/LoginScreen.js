import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '/src/styles/LoginScreenStyle';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Salve a informação de que o usuário está logado no contexto
      // e redirecione para a tela principal
      navigation.replace('Main');
    } else {
        alert("Usuário e senha são obrigatórios!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o seu usuário:"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Digite a sua senha:"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Acessar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
import React, {  useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import FormInput from '../../components/form/FormInput';
import FormButton from '../../components/form/FormButton';

const TelaLogin = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (usuario === 'teste' && senha === '123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Falhou', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
      <FormInput
        label="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuário"
        style={styles.input}
      />
      <FormInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />
      <FormButton onPress={fazerLogin} title="Login" backgroundImage={require('../../../assets/images/botao.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 50,
    borderRadius: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  googleButton: {
    backgroundColor: '#FFA500',
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TelaLogin;

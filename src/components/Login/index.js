import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, LogBox } from 'react-native';

import firebase from '../../services/firebaseConnection';
LogBox.ignoreAllLogs(true)

export default function Login({ changeStatus }) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

    if (type === 'login') {
      // Aqui fazemos o Login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((e) => {
          console.log(e)
          alert('Ops houve um erro!')
          return;
        })
    }
    else {
      // Aqui cadastramos o usuário
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((e) => {
          console.log(e)
          alert('Ops, Houve um erro!')
          return;
        })
    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        placeholder='Seu email'
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder='*******'
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }]}
        onPress={handleLogin}
      >
        <Text style={{ color: '#fff', fontSize: 17 }}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}
      >
        <Text style={{ textAlign: 'center' }}>
          {type === 'login' ? 'Criar conta' : 'Já tenho uma conta'}
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10
  }
});
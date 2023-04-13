import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email === '' || password === '') {
      alert('Email & Password are required');
      return;
    }

    if (email === 'codes.sg@gmail.com' || password === '123456') {
      AsyncStorage.setItem('email', email);
      navigation.replace('Home', {email});
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: 'bold',
          marginVertical: 30,
          textAlign: 'center',
        }}>
        LOGIN
      </Text>
      <TextInput
        value={email}
        onChangeText={val => setEmail(val)}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        style={{
          marginVertical: 10,
          marginHorizontal: 40,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />
      <TextInput
        value={password}
        onChangeText={val => setPassword(val)}
        placeholder="Password"
        placeholderTextColor="gray"
        keyboardType="default"
        secureTextEntry={true}
        style={{
          marginVertical: 10,
          marginHorizontal: 40,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}
      />
      <TouchableOpacity
        onPress={login}
        style={{
          elevation: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          alignSelf: 'center',
          backgroundColor: 'lightgray',
          marginVertical: 10,
        }}>
        <Text style={{color: 'black', fontSize: 19, textAlign: 'center'}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Signup')}>
        <Text
          style={{
            color: 'blue',
            fontSize: 19,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

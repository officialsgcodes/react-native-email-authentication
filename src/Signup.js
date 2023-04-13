import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [contact_number, setContactnumber] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (email === '' || password === '' || contact_number === '') {
      alert('Email, Contact & Password are required');
      return;
    }

      AsyncStorage.setItem('email', email);
      navigation.replace('Home', {email});
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
        REGISTER
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
        value={contact_number}
        onChangeText={val => setContactnumber(val)}
        placeholder="Contact"
        placeholderTextColor="gray"
        keyboardType="number-pad"
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
        onPress={signup}
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
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Text
          style={{
            color: 'blue',
            fontSize: 19,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

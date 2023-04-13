import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  const [email, setEmail] = useState(props.route.params.email);

  const logout = () => {
    AsyncStorage.clear();
    props.navigation.replace('Login')
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
          color: 'black'
        }}>
        {email}
      </Text>
      <TouchableOpacity
        onPress={logout}
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
          Logout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}></TouchableOpacity>
    </View>
  );
};

export default Home;

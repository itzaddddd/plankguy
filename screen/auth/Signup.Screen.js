import React from 'react';
import { Image,  Linking,  StyleSheet,  Platform,  Text,  View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUpScreen from './Signup.Screen';

export default function SignupScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ลงทะเบียน</Text>
      </View>
    );}
  }
  
  const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };
  
  const styles = StyleSheet.create({
  

    container: {
      flex: 1,
      backgroundColor: '#C0E3FF',
      justifyContent: 'center',
      paddingTop: 200,
    },

    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    header: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10,
      marginBottom: 30,
    },

    logoIcon: {
      // flex: 1,
      aspectRatio: 1.5, 
      resizeMode: 'contain',
      margin: 0,
    },

    text1: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 0,
      fontSize: 20,
    },

    text2: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 0,
      fontSize: 15,
    },

    textBold: {
      fontWeight:'bold',
      fontSize: 20,
      marginTop: 10,
      textShadowColor: '#000',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },

    buttonLogin: {
      // color: '#79B6E6',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 100,
      // marginBottom: 20,
    },

  });
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>เช้าสู่ระบบ</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
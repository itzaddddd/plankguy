import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ข้อมูลผู้ใช้</Text>
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
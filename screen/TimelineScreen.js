import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>หน้าหลัก</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C0E3FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
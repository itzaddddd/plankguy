import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyDiaryScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ไดอารี่ของฉัน</Text>
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
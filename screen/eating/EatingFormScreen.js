import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EatingFormScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>บันทึกผลการกินในแต่ละมื้อ</Text>
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
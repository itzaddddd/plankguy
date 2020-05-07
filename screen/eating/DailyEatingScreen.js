import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DailyEatingScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>สรุปผลการกินในแต่ละวัน</Text>
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
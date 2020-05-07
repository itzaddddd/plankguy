import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DailyEatingDetailScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>รายละเอียดการกินในแต่ละวัน</Text>
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
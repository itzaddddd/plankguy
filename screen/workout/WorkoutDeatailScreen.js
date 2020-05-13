import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutDetailScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>รายละเอียดชาเลนจ์ออกกำลังกาย</Text>
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
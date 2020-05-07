import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutChallengeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>สร้างชาเลนจ์ออกกำลังกาย</Text>
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
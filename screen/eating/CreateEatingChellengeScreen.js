import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EatChallengeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>ชาเลนจ์การกิน</Text>
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
    Header:{
      fontSize: 40,
      fontFamily: 'K2D'
    }
  });
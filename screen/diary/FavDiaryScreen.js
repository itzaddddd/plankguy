import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavDiaryScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ไดอารี่โปรด</Text>
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
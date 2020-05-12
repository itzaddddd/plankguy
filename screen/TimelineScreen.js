import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EachPost from '../components/EachDiaryOnTimeline'

export default function HomeScreen({navigation}) {
    return (
      <ScrollView style={styles.diaryContainer}>
        <EachPost/>
        <EachPost/>
        <EachPost/>
        <EachPost/>
        <EachPost/>
        <EachPost/>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    diaryContainer: {
      flex: 1,
      backgroundColor: '#C0E3FF',
      paddingTop: 40,
      paddingBottom: 200,
    },
  });
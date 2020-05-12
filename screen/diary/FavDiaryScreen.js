import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EachPost from '../../components/EachDiaryOnTimeline'


export default function FavDiaryScreen({navigation}) {
    return (
      <ScrollView style={styles.diaryContainer}>
        <View>
          <Text style={styles.topicMyDiary}>ไดอารี่โปรด</Text>
        </View>
        <View style={styles.showDiary}>
          <EachPost/>
          <EachPost/>
          <EachPost/>
          <EachPost/>
          <EachPost/>
          <EachPost/>
        </View>
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
    topicMyDiary: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: '#A0D1F7',
      borderBottomWidth: 2,
      paddingVertical: 3,
      paddingHorizontal: 20,
      textAlign: 'center'
    
    },
  });
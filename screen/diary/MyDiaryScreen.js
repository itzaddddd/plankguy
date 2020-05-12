import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EachDiary from '../../components/EachMyDiary';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Popup from '../../components/Popup'
<<<<<<< HEAD
=======

>>>>>>> feeb8de088c963d1ed7ea6c12baf8739cebf2233
export default function MyDiaryScreen({navigation}) {
    return (

      <View style={styles.container}>
        <Text style={styles.topicMyDiary}>ไดอารี่ของฉัน</Text>
        <ScrollView style={{paddingBottom:100,}}>
          <EachDiary/>
          <EachDiary/>
          <EachDiary/>
          <EachDiary/>
        </ScrollView>
        <Popup/>
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 75,
    },
    topicMyDiary: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: '#A0D1F7', //blue
      borderBottomWidth: 2,
      paddingVertical: 3,
      paddingHorizontal: 20,
      marginBottom: 5,
    },
  });
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EachDiary from '../../components/EachMyDiary';
import Popup from '../../components/Popup'
<<<<<<< HEAD
=======

>>>>>>> 182b4a6c975a94ef3317618ba8e0f952aa0ee7a0
export default function MyDiaryScreen({navigation}) {
    return (

      <View style={styles.container}>
        <Text style={styles.topicMyDiary}>ไดอารี่ของฉัน</Text>
        <View>
          <EachDiary/>
        </View>
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
      borderBottomColor: '#A0D1F7',
      borderBottomWidth: 2,
      paddingVertical: 3,
      paddingHorizontal: 20,
    },
  });
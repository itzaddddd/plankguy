import React from 'react';
import { StyleSheet, Text, View, Image, ViewBase } from 'react-native';
import WorkOutChallenge from '../../components/WorkOutChallengeBox'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function WorkoutChallengeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.headerWorkOut}>
            <Image 
              source={require('../../assets/work-out.png')}  
              style={{width:80, height: 80}} 
            />
            <View style={{marginLeft:10,}}>
              <Text style={styles.Header}>WORK OUT</Text>
              <Text style={styles.Header2}>เลือกการแปลงกายที่ต้องการได้เลย</Text>
            </View>
          </View>

          <TouchableOpacity onPress={()=> navigation.navigate('MyWorkout')}>
            <WorkOutChallenge />
          </TouchableOpacity>
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
    headerWorkOut: {
      width: 310,
      height:100,
      backgroundColor: '#fff',
      alignContent: 'center',
      flexDirection: 'row'
    },
    Header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#5A5B5B',
      // fontFamily: 'K2D'
    },
    Header2:{
      fontSize: 15,
      color: '#5A5B5B',
      // fontFamily: 'K2D'
    },
  });
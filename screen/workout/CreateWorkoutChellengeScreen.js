import React from 'react';
import { StyleSheet, Text, View, Image, ViewBase } from 'react-native';
import WorkOutChallenge from '../../components/WorkOutChallengeBox'
<<<<<<< HEAD
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
=======
import { ScrollView } from 'react-native-gesture-handler';
>>>>>>> 87a53cf2f04ce4bb8fd7ccb631ab4c306392a3d9

export default function WorkoutChallengeScreen({navigation}) {
    return (
      <ScrollView>
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

<<<<<<< HEAD
          <TouchableOpacity onPress={()=> navigation.navigate('MyWorkout')}>
            <WorkOutChallenge />
          </TouchableOpacity>
      </View>
=======
            <View>
              <WorkOutChallenge />
            </View>
        </View>
      </ScrollView>
>>>>>>> 87a53cf2f04ce4bb8fd7ccb631ab4c306392a3d9
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerWorkOut: {
      width: 310,
      height:100,
      alignContent: 'center',
      flexDirection: 'row',
      marginTop: 100,
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
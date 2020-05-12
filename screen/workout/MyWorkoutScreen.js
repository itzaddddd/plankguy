import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import MyWorkOutList from '../../components/MyWorkOutList'

export default function MyWorkoutScreen({navigation}) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerWorkOut}>
            <Image 
              source={require('../../assets/work-out.png')}  
              style={{width:80, height: 80}} 
            />
            <View style={{marginLeft:10,}}>
              <Text style={styles.Header}>My Work Out</Text>
              <Text style={styles.Header2}>การออกกำลังกายของฉัน</Text>
            </View>
          </View>

          <View>
            <MyWorkOutList/>
          </View>
        </View>
      </ScrollView>
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
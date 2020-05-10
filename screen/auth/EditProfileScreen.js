import React from 'react';
import {Image,  StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CompletedChallenge from '../../components/CompletedChallenge'

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            weight1: "",
            weight2: "",
        };
    }
    render() {

    return (
    <ScrollView >
      <View style={styles.headerContainer}>
        <View>
          <Image
            style={styles.userImage}
            source={require('../../assets/avatar.png')} 
          />
          </View>
      </View>
      <View style={styles.userRow}>
        <View style={styles.userNameRow}>
          <FontAwesome5
            size={20}
            color="#000"
            solid
            name="user"
            style={{marginHorizontal: 10,paddingVertical: 5,}}
          />
          <TextInput 
            require
            style={styles.userNameText}
            maxLength={15}
            placeholder="ชื่อผู้ใช้"
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}/>
        </View>

        <View style={styles.userWeightRow}>
          <FontAwesome5
            size={20}
            type="entypo"
            color="#000"
            name="weight"
            style={{marginHorizontal: 6,paddingVertical: 5,}}
          />
          <TextInput 
            require
            style={styles.userWeightText}
            maxLength={4}
            placeholder="น้ำหนักเริ่มต้น"
            keyboardType='number-pad'
            value={this.state.weight1}
            onChangeText={(weight1) => this.setState({ weight1 })}/>
            
          <FontAwesome5
            size={20}
            type="entypo"
            color="#000"
            name="weight"
            style={{marginHorizontal: 6,paddingVertical: 5,}}
          />
          <TextInput 
            require
            style={styles.userWeightText}
            maxLength={4}
            placeholder="น้ำหนักเป้าหมาย"
            keyboardType='number-pad'
            value={this.state.weight2}
            onChangeText={(weight2) => this.setState({ weight2 })}/>
        </View>

        <TouchableOpacity  style={styles.buttonSaveProfile}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>
            บันทึก
          </Text>
        </TouchableOpacity>
      </View>      
    </ScrollView>

    );}
  }
  
  const styles = StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#A0D1F7', //blue color
      margin: 0,
      paddingTop: 80,
    },
    scroll: {
      backgroundColor: '#FFF', // gray 
    },
    userBioRow: {
      marginHorizontal: 40,
      paddingHorizontal: 20,
    },
    userBioText: {
      color: 'gray',
      fontSize: 13.5,
      textAlign: 'center',
    },
    userBioWeight: {
      marginHorizontal: 20,
      marginBottom: 20,
    },
    userImage: {
      height: 160,
      width: 160,
      marginTop: 70,
      marginBottom: -70,
      borderRadius: 160/2,
      borderColor: '#EEE',
      borderWidth:5,
      backgroundColor: '#EEE',
    },
    userNameRow: {
      marginBottom: 10,
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    userWeightRow :{
      marginTop: 10,
      marginBottom: 40,
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    userNameText: {
      color: '#5B5A5A',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingHorizontal: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#5B5A5A',
      width: 277,
//      alignSelf: 'stretch',
    },
    userWeightText: {
      color: '#5B5A5A',
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center',
      paddingHorizontal: 6,
      borderBottomWidth: 2,
      borderBottomColor: '#5B5A5A',
    //   alignSelf: 'stretch',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 120,
      marginBottom: 12,
    },
    buttonSaveProfile: {
      marginVertical: 50,
      backgroundColor: '#79B6E6',
      elevation: 2, 
      height: 40,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 20,
  },
  })
import React, {Component} from 'react';
import {Image,  StyleSheet, Text, View, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CompletedChallenge from '../../components/CompletedChallenge'
import * as firebase from 'firebase'

class ProfileScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }

  }

  signOutFacebook = async () => {
    firebase.auth().signOut()
    .catch((err)=>console.log(err))
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user !== null){
        // let userData = user.providerData[0]
        // firebase.database().ref(`users/${userData.uid}`).set({
        //   name: userData.displayName,
        //   email: userData.email,
        //   photo: userData.photoURL
        // })
        this.setState({user:user.providerData[0]})
      }else{
        this.setState({user:null})
      }
    })
  }

  render(){
    let {user} = this.state
    if(user){
      return (
        <ScrollView >
          <View style={styles.headerContainer}></View>
          <Image
            source={{uri:`${user.photoURL}?height=200`}}
            style={styles.avatar}
          />
          <View style={styles.userRow}>
            <View style={styles.userNameRow}>
              <FontAwesome5
                size={20}
                color="#000"
                solid
                name="user"
                style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
              <Text style={styles.userNameText}>{user.displayName}</Text>
            </View>
    
            <View style={styles.userWeightRow}>
              <FontAwesome5
                size={20}
                type="entypo"
                color="#000"
                name="weight"
                style={{marginHorizontal: 6,paddingVertical: 5,}}
              />
              <Text style={styles.userWeightText}>น้ำหนักเริ่มต้น</Text>
                
              <FontAwesome5
                size={20}
                type="entypo"
                color="#000"
                name="weight"
                style={{marginHorizontal: 6,paddingVertical: 5,}}
              />
              <Text style={styles.userWeightText}>น้ำหนักเป้าหมาย</Text>
                {/* <Text style={styles.userBioText}>น้ำหนักเป้าหมาย</Text> */}
            </View>
    
            <TouchableOpacity  style={styles.buttonLogOut} onPress={this.signOutFacebook}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>
                ออกจากระบบ
              </Text>
            </TouchableOpacity>
          </View>
    
          <View
            style={{
              borderBottomColor: '#5B5A5A',
              borderBottomWidth: 2,
              marginTop: 30,
              marginHorizontal:40,
            }}/>
    
          <View
            style={{
              borderBottomColor: '#5B5A5A',
              borderBottomWidth: 2,
              marginVertical: 20,
              marginHorizontal:100,
              paddingBottom:5,
            }}>
              <Text style ={{
                textAlign:'center',
                fontWeight:'bold',
                fontSize:20,
                textShadowColor: '#5B5A5A',
                textShadowRadius: 3,
                textShadowOffset: {width:1,height:1},
              }}>
                ชาเลนจ์ที่ทำสำเร็จ
              </Text>
          </View>
    
          <CompletedChallenge/>
          <CompletedChallenge/>
          <CompletedChallenge/>
    
          
        </ScrollView>
    
        );
    }

    return (
      <View>
        <Text>กรุณาเข้าสู่ระบบ</Text>
      </View>
    )
    
    }
  }
  export default ProfileScreen
  
  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#A0D1F7', //blue color
      margin: 0,
      paddingTop: 80,
      height:190,
    },
    avatar: {
      width: 180,
      height:180,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:100
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
      textAlign: 'center',
      paddingHorizontal: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#5B5A5A',
      alignSelf: 'stretch',
    },
    userWeightText: {
      color: '#5B5A5A',
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center',
      paddingHorizontal: 6,
      borderBottomWidth: 2,
      borderBottomColor: '#5B5A5A',
      alignSelf: 'stretch',
    },
    userRow: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 110,
      marginBottom: 12,
    },
    buttonEditProfile: {
      marginVertical: 10,
      backgroundColor: '#79B6E6',
      elevation: 2, 
      height: 40,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 20,
  },
  buttonLogOut: {
      marginVertical: 10,
      backgroundColor: '#CC0000',
      elevation: 2, 
      height: 40,
      width: 160,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 20,
  },
  })
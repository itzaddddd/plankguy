import React, {Component} from 'react';
import {Image,  StyleSheet, Text, View, ScrollView, YellowBox} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CompletedChallenge from '../../components/CompletedChallenge'
import * as firebase from 'firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Facebook from 'expo-facebook'
class ProfileScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
    YellowBox.ignoreWarnings(['Setting a timer']);


  }

  loginWithFacebook = async () => {
    await Facebook.initializeAsync('242743737044656');
    const {type, token} = await Facebook.logInWithReadPermissionsAsync('242743737044656',{
      permissions:['public_profile']
    })

    if(type == 'success'){
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential)
      .catch(err => console.log(err))
    }
  }

  signOutFacebook = async () => {
    firebase.auth().signOut()
    .catch((err)=>console.log(err))
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user !== null){
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
      <View style={styles.container2}>
            
                <View style={styles.content}>
                  {/* <View style={styles.avatar}>
                    <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
                  </View> */}
                  <Text style={styles.header}>
                    ยินดีต้อนรับ
                  </Text>
                  <Text>
                    
                  </Text>
                  <Text style={styles.text1}>
                    ร่วมแปลงกายกับเรา
                  </Text>
                  <Image 
                    source={require('../../assets/logo-plankguy.png')} 
                    style={styles.logoIcon} />
                  <Text style={styles.text1}>
                      เข้าสู่ระบบ
                  </Text>
                  <Text style={styles.text2}>
                      ด้วย
                  </Text>
                </View>
            
            {/* Login buttons */}
            <View style={styles.buttonLogin}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
                {...iconStyles}
              >
                เข้าสู่ระบบด้วย Facebook
              </Icon.Button>    
            </View>
    
            <View style={styles.content2}>
              <Text style={styles.text2}>
                ยังไม่มีไดอารี่แปลงกาย ?
              </Text>
              <TouchableOpacity /*onPress={() => navigation.navigate('SignUp')}*/>
                <Text style={styles.textBold}>
                  ลงทะเบียนที่นี่
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
    )
    
    }
  }
  export default ProfileScreen
  
  const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };

  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
    container2: {
      flex: 1,
      backgroundColor: '#C0E3FF',
      justifyContent: 'center',
      paddingTop: 200,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    
  },

  header: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30,
  },

  logoIcon: {
    // flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
    margin: 0,
  },

  text1: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 0,
    fontSize: 20,
  },

  text2: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 0,
    fontSize: 15,
  },

  textBold: {
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 10,
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },

  buttonLogin: {
    // color: '#79B6E6',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    // marginBottom: 20,
  },
  })
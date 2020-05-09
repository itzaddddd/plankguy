import React from 'react';
import { Image, StyleSheet, Text,  View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUpScreen from './Signup.Screen';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
            <View style={styles.content}>
              {/* <View style={styles.avatar}>
                <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
              </View> */}
              <Text style={styles.header}>
                ยินดีต้อนรับ
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
            // onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Facebook
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            // onPress={this.loginWithGoogle}
            {...iconStyles}
          >
            Google
          </Icon.Button>
          <Icon.Button
            name="twitter"
            backgroundColor="#50ABF1"
            // onPress={this.loginWithGoogle}
            {...iconStyles}
          >
            Twitter
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
    );}
  }
  
  const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };
  
  const styles = StyleSheet.create({
  

    container: {
      flex: 1,
      backgroundColor: '#C0E3FF',
      justifyContent: 'center',
      paddingTop: 200,
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
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 100,
      // marginBottom: 20,
    },

  });
import React from 'react';
import {Image,  StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DiaryFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        day: "",
        description: "",
    };
  }
    render() {

    return (
      <View style={styles.container}>

        <View style={styles.detailsdiary}>
          
        <Text style={styles.texttop}>สร้างไดอารี่ของฉัน</Text>
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="book"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
              <TextInput 
                require
                style={styles.textinbox}
                maxLength={15}
                placeholder="Day 1"
                value={this.state.day}
                onChangeText={(day) => this.setState({ day })}
                />
            </View>

            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="file-alt"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
                />
                  <TextInput 
                require
                style={styles.textinbox}
                maxLength={15}
                placeholder="รายละเอียด"
                value={this.state.description}
                onChangeText={(description) => this.setState({ description })}
                />
            </View>
              <Text style={styles.texttopimage}>เพิ่มรูปภาพในไดอารี่</Text>
              <TouchableOpacity  style={styles.button}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>
                เพิ่มรูปภาพ
                </Text>
              </TouchableOpacity>

              <View style={styles.boximage}>
                <Image style={styles.tinyimage}
                  source={require('../../assets/image.png')}
                />
                <Image style={styles.tinyimage}
                  source={require('../../assets/image.png')}
                />
                <Image style={styles.tinyimage}
                  source={require('../../assets/image.png')}
                />
   
              </View>
              <TouchableOpacity  style={styles.button}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>
                  บันทึกไดอารี่
                </Text>
              </TouchableOpacity>
            </View>

      </View>
    );} 
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A0D1F7',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 75,
    },
    textrow: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
      flexDirection: 'row', 
    },
    detailsdiary: {
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 30,
      padding: 5,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#A0D1F7',
      height:500,
      },
      tinyimage: {
        marginHorizontal: 10,
        width: 70,
        height: 70,
      },
      boximage: {
        flexDirection: 'row', 
        justifyContent: 'center',
        width: 350,
      },
      textinbox: {
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#5B5A5A',
        width: 277,
        
      },
      texttopimage: {
        textAlign: 'center',
        margin: 10,
      },
      texttop: {
        textAlign: 'center',
        margin: 10,
      },
      button: {
        marginVertical: 20,
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
import React from 'react';
import {Image,  StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
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

      this.day = 1

    return (
      <ScrollView style={styles.container}>
        <View style={styles.detailsdiary}>
          <View>
            <Text style={styles.texttop}>ไดอารี่วันที่ {this.day} ของฉัน</Text>
          </View>

          <View style={styles.textrow}>
            <FontAwesome5
              size={20}
              color="#000"
              solid
              name="book"
              style={{marginHorizontal: 5,paddingVertical: 5,}}
            />
            <Text style={styles.textinbox}>
              Day {this.day}
            </Text>
          </View>

          <View style={styles.textrow}>
            <FontAwesome5
              size={20}
              color="#000"
              solid
              name="file-alt"
              style={{marginHorizontal: 5,paddingVertical: 5,}}
            />
            <TextInput 
              require
              style={styles.textinbox}
              multiline = {true}
              numberOfLines = {2}
              maxLength={700}
              placeholder="รายละเอียด"
              value={this.state.description}
              onChangeText={(description) => this.setState({ description })}
            />
          </View>

          <View style={styles.ImageBox}>
            <Text style={styles.texttopimage}>เพิ่มรูปภาพในไดอารี่</Text>
            <TouchableOpacity  style={styles.button}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>
                เพิ่มรูปภาพ
              </Text>
            </TouchableOpacity>

            <View style={styles.boximage}>
              {/* <Image style={styles.tinyimage}
                source={require('../../assets/image.png')}
              />
              <Image style={styles.tinyimage}
                source={require('../../assets/cup.png')}
              />
              <Image style={styles.tinyimage}
                source={require('../../assets/avatar.png')}
              />
              <Image style={styles.tinyimage}
                source={require('../../assets/plate.png')}
              /> */}
            </View>
          </View>
          
          <View style={{marginTop:50,marginBottom:70,}}>
            <TouchableOpacity  style={styles.button2}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>
              บันทึกไดอารี่
            </Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    );} 
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0D1F7',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingTop: 75,
  },
  textrow: {
    paddingVertical: 10,
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
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    },
  tinyimage: {
    marginVertical:5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    width: 90,
    height: 90,
  },
  boximage: {
    flexDirection: 'row', 
    justifyContent: 'center',
    flexWrap: 'wrap',
    
  },
  textinbox: {
    paddingHorizontal: 10,
    paddingBottom:10,
    borderBottomWidth: 2,
    borderBottomColor: '#5B5A5A',
    width: 277,
    fontSize: 16,
  },
  ImageBox: {
    textAlign: 'left',
    borderColor: '#5A5B5B',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal:'5%',
  },
  texttopimage: {
    textAlign: 'center',
    margin: 10,
    fontSize: 18,
    fontWeight:'bold',
    paddingHorizontal: 50,

  },
  texttop: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: '#A0D1F7', //blue
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
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
    alignSelf: 'center',
  },
  button2: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#79B6E6',
    elevation: 2, 
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    alignSelf: 'center',
  },
})

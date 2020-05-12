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
          </View>

          <View style={styles.boximage}>
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
    flex: 1,
    justifyContent: 'center',
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
    paddingBottom:10,
    borderBottomWidth: 2,
    borderBottomColor: '#5B5A5A',
    width: 277,
    fontSize: 16,
  },
  texttopimage: {
    textAlign: 'left',
    margin: 10,
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
  },
  ImageBox: {
    textAlign: 'left',
  },
})
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { render } from 'react-dom';
import { ScrollView } from 'react-native-gesture-handler';

export default class DiaryPageScreen extends React.Component {
  constructor(props){
    super(props)
    this.username = "",
    this.day = "",
    this.detail = "",
    this.image = ""
  }
  render() {
    this.username = "xxxxx",
    this.day = "1",
    this.detail = "วันนี้ออกกำลังกายโดยใช้วัสดุภายในบ้านแทนการออกไปที่ยิมและช่วยประหยัดค่าใช้จ่าย นั่นคือการเอาขวดน้ำแบบ 1.5 ลิตรยกแทนดัมเบลล์จำนวน 30 ครั้ง สลับกัน 2 ข้าง",
    this.image = ""
    return (
      <ScrollView style={styles.container}>
        <View style={styles.detailsdiary}>
          
            <View style={styles.textrow1}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="user"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
                  <Text style={styles.textinbox}>{this.username}</Text>
            </View>
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="book"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
              <Text style={styles.textinbox}>Day {this.day}</Text>
            </View>
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="file-alt"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
                />
                <Text style={styles.textDetail}>{this.detail}</Text>
            </View>

            <Text style={styles.texttopimage}>รูปภาพในไดอารี่</Text>
            <View style={styles.ImageBox} >
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
                <Image style={styles.tinyimage}
                  source={require('../../assets/image.png')}
                />
              </View>
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
  textrow1: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row', 
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
    borderRadius: 10,
  },
  tinyimage: {
    marginVertical:5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    width: 90,
    height: 90,
  },
  boximage: {
    flexDirection: 'row', 
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20%',
  },
  ImageBox: {
    textAlign: 'left',
    paddingHorizontal:'5%',
    paddingVertical:'2%',
  },
  textinbox: {
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#5B5A5A',
    width: 277,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDetail: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#5B5A5A',
    width: 277,
    fontSize: 15,
  },
  texttopimage: {
    textAlign: 'left',
    margin: 10,
    paddingHorizontal:80,
    paddingBottom:5,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: '#5A5B5B',
    borderBottomWidth: 2,
  },
});
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DiaryPageScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.detailsdiary}>
          
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="user"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
                  <Text style={styles.textinbox}>ชื่อผู้ใช้</Text>
            </View>
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="book"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
              <Text style={styles.textinbox}>Day 1</Text>
            </View>
            <View style={styles.textrow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="file-alt"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
                />
                  <Text style={styles.textinbox}>วันนี้ออกกำลังกายโดยใช้วัสดุภายในบ้านแทนการออกไปที่ยิมและช่วยประหยัดค่าใช้จ่าย นั่นคือการเอาขวดน้ำแบบ 1.5 ลิตรยกแทนดัมเบลล์จำนวน 30 ครั้ง สลับกัน 2 ข้าง</Text>
            </View>
              <Text style={styles.texttopimage}>รูปภาพในไดอารี่</Text>
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
            </View>
      </View>
    );
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
      marginHorizontal: 20,
      width: 70,
      height: 70,
    },
    boximage: {
     flexDirection: 'row', 
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
  });
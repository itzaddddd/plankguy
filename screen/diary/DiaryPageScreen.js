import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DiaryPageScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.detailsdiary}>
          <Text>แสดงรายละเอียดไดอารี่</Text>
            <View style={styles.userNameRow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="user"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
                  <Text>ชื่อผู้ใช้</Text>
            </View>
            <View style={styles.userNameRow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="book"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
              />
              <Text>Day 1</Text>
            </View>
            <View style={styles.userNameRow}>
              <FontAwesome5
                  size={20}
                  color="#000"
                  solid
                  name="file-alt"
                  style={{marginHorizontal: 10,paddingVertical: 5,}}
                />
                  <Text>วันนี้ออกกำลังกายโดยใช้วัสดุภายในบ้านแทนการออกไปที่ยิมและช่วยประหยัดค่าใช้จ่าย นั่นคือการเอาขวดน้ำแบบ 1.5 ลิตรยกแทนดัมเบลล์จำนวน 30 ครั้ง สลับกัน 2 ข้าง</Text>
            </View>
              <Text>รูปภาพในไดอารี่</Text>
            </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userNameRow: {
      borderStyle: 'solid',
      borderWidth: 1.5,
      borderColor: '#c6c6c6',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row', 
    },
    detailsdiary: {
      marginHorizontal: 30,
    },

  });
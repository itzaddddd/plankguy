import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default class WorkoutDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      challengeName: "",
      goal: "",
      detail: ""
    }
  }
  render() {

    this.number = 1,
    this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน",
    this.goal = "ลดน้ำหนัก รักษารูปร่าง",
    this.detail = "เป็นการออกกำลังกายที่สามารถทำได้จากที่บ้าน ใช้อุปกรณ์ที่มีอยู่ในบ้าน"

    return (
        <View>
          <View style={styles.goal}>
            <Text style={{fontSize:18, fontWeight:'bold',textAlign:'center'}}>
              เป้าหมาย   <Text style={{fontWeight:'normal'}}> {this.goal}</Text>
            </Text>
          </View>
  
          <View style={styles.detailBox}>
            <Text style={styles.detail}>
              รายละเอียดของรูปแบบที่ {this.number} {"\n"}
              {this.detail}
            </Text>
            <TouchableOpacity style={styles.buttonAddChallenge}>
              <Text style={{fontSize:16,}}>
                เพิ่มในการออกกำลังกายของฉัน
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );}
  }
  
const styles = StyleSheet.create({
  goal: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#79B6E6",
    backgroundColor: "#79B6E6",
    padding: 10,
    marginHorizontal: 20,
  },
  detailBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingTop:10,
    paddingBottom:20,
    paddingHorizontal:10,
    backgroundColor: '#C0E3FF',
  },
  detail: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal:10,
  },
  buttonAddChallenge: {
    backgroundColor: '#CC0000',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  buttonBack: {
    marginVertical: 50,
    backgroundColor: '#79B6E6',
    elevation: 2, 
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  }
});
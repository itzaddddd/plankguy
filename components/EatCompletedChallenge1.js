import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


import Card from './BoxChallange';

export default class EachDiary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            diaryDate: "",
            diaryContent: "",
        };
    }

    render() {
        //สมมติข้อมูล
        this.diaryDate = "ชาเลนจ์การกิน สำหรับผู้ที่ต้องการลดน้ำหนัก",
        this.diaryContent = "   สัปดาห์แรก เราควรเน้นอาหารที่เป็นเมนูอกไก่ก่อนเพื่อให้รู้สึกอิ่ม"

    return (
      <View style={styles.container}>
        <Card>
            <View  style={styles.headerTopic} >
                <View>
                    <Text   style={styles.diaryDate} >
                    {this.diaryDate}
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#EEEEEE',borderBottomStartRadius:17,borderBottomEndRadius:17}}>
            <Text style={styles.diaryContent}>
                {this.diaryContent}
            </Text>
            <TouchableOpacity style={{backgroundColor:'#1a8cff',
                borderRadius:30,
                borderWidth: 1,
                borderColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop:8,
                paddingBottom:8,
                }}>
                <Text style={styles.submitText}>เลือกชาเลนจ์นี้</Text>
            </TouchableOpacity>
            </View>
        </Card>
      </View>
    );}
  }
  
  const width="100%"
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      width: 350,
      marginHorizontal: 0,
    },
    headerTopic: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: '#A0D1F7',
        width: width,
        borderTopStartRadius:17,
        borderTopEndRadius:17,
        flexDirection: "row",
        alignContent: 'flex-end',
        alignItems: "center"
    },
    diaryContent: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    diaryDate: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop:10,
        paddingBottom:10,
        textAlign:"center",
        alignContent: 'center'
    },
    submitText:{
        color:'white',
        textAlign:'center',
    }
  });
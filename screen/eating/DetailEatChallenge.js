import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import NavigationBar from 'react-native-navbar';

export default class DetailEatChallenge extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            Topic: "",
            Description: "",
        };
    }

    render() {
        //สมมติข้อมูล
        this.Topic = "ชาเลนจ์การกิน รูปแบบเพื่อสุขภาพที่ดี",
        this.Description = "ผักและผลไม้ 2 กำต่อมื้อ\nโปรตีน 2 ฝ่ามือต่อมื้อ\nนม 1 แก้วต่อมื้อ"
    return (
      <ScrollView>
        {/* <NavigationBar
        containerStyle ={Bar}
        tintColor='#C0E3FF'
        title= {titleConfig}
        style={{position:'relative'}}
      /> */}
      <View style={styles.container}>
          <View style={styles.container2}>
            <Image 
            source={require('../../assets/plate.png')}  
            style={{width:80, height: 80}} 
            />
            <Text style={styles.Header}> ชาเลนจ์การกิน {"\n"}<Text style={styles.Header2}>เลือกชาเลนจ์การกิน และบันทึกการกิน</Text></Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container3}>
            <Text style={styles.body}>ชาเลนจ์การกินของคุณ</Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container4}>
            <Text style={styles.body3}>
              {this.Topic}
            </Text>
            <TouchableOpacity style={styles.cancel}>
                <Text style={styles.cancelText}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container3}>
            <Text style={styles.body}>อาหารที่ทาน</Text>
          </View>
          <Text>
          {"\n"}
          </Text>
          <View style={styles.container4}>
              <Text style={{fontSize:20,textAlign:"center",marginTop:10}}>
                รายการอาหารที่แนะนำ
              </Text>
              <Text style={{marginLeft:20,paddingBottom:10}}>
                 {this.Description}
              </Text>
          </View>
          <Text>
              {"\n"}
          </Text>
          <TouchableOpacity style={styles.submit} onPress={()=> this.props.navigation.navigate('SelectChallenge')}>
          <Image source={require('../../assets/plus.png')}  
            style={{width:20, height: 20}}/>
          <Text style={styles.submitText}>บันทึกรายการอาหารที่ทาน</Text>
          </TouchableOpacity>
          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>

          
          
      </View>
      </ScrollView>
    );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop:50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      width: 310,
      height:100,
      backgroundColor: '#fff',
      alignContent: 'center',
      flexDirection: 'row'
    },
    container3: {
      width: 310,
      height:100,
      backgroundColor: '#C0E3FF',
      alignContent: 'center',
      flexDirection: 'column',
      borderWidth: 3,
      borderColor: '#e6e6e6',
      justifyContent: 'center',
    },
    container4: {
      width: 310,
      backgroundColor: '#fff',
      alignContent: 'center',
      flexDirection: 'column',
      borderWidth: 3,
      borderColor: '#d9d9d9',
      borderRadius: 20,
    },
    Header:{
      fontSize: 30,
      // fontFamily: 'K2D'
    },
    Header2:{
      fontSize: 15,
      // fontFamily: 'K2D'
    },
    body:{
      alignContent: 'center',
      fontSize: 30,
      textAlign:"center",
      // fontFamily: 'K2D'
    },
    body2:{
      textAlign:"center",
      
      flexDirection: 'column',
      fontSize: 15,
      // fontFamily: 'K2D'
    },
    body3:{
        textAlign:"center",
        marginTop:10,
        marginRight:10,
        marginLeft:10,
        flexDirection: 'column',
        fontSize: 20,
        // fontFamily: 'K2D'
      },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    submit:{
      paddingTop:20,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom:20,
      backgroundColor:'#1a8cff',
      borderRadius:30,
      borderWidth: 1,
      borderColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    submitText:{
        color:'#fff',
        textAlign:'center',
    },
    cancel:{
        marginTop:20,
      paddingTop:17,
      paddingBottom:17,
      backgroundColor:'red',
      borderBottomStartRadius:17,
      borderBottomEndRadius:17,
      borderColor: '#fff',
      justifyContent: 'center',
      textAlign:'center',
      alignItems:"center"
    },
    cancelText:{
        color:'#fff',
        textAlign:'center',
    }
  });

const titleConfig = {
  title: 'ชาเลนจ์การกิน',
  tintColor:'black'
};
const Bar = {
marginTop:20
};
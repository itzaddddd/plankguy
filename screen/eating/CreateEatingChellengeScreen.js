import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView ,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar';

export default function EatChallengeScreen({navigation}) {
    return (
      <ScrollView>
        <NavigationBar
        containerStyle ={Bar}
        tintColor='#C0E3FF'
        title= {titleConfig}
      />
      <View style={styles.container}>
          <View style={styles.container2}>
            <Image 
            source={require('../../assets/plate.png')}  
            style={{width:80, height: 80}} 
            />
            <Text style={styles.Header}> ชาเลนจ์การกิน {"\n"}<Text style={styles.Header2}>เลือกชาเลนจ์การกิน {"\n"}และบันทึกการกิน</Text></Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container3}>
            <Text style={styles.body}>ชาเลนจ์การกินของคุณ</Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container4}>
            <Text style={styles.body2}><Image 
            source={require('../../assets/cross.png')}  
            style={{width:50, height: 50}} 
            />
            {"\n"}
            {"\n"}
            {"\n"}
            <Text>
              คุณยังไม่มีชาเลนจ์ โปรดเลือกชาเลนจ์ของคุณ
            </Text>
            </Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={styles.container3}>
            <Text style={styles.body}>อาหารที่ทาน</Text>
          </View>
          <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          </Text>
          <TouchableOpacity
          style={styles.submit}
          underlayColor='#fff'>
          <Image source={require('C:/Users/ACER/plankguy/assets/plus.png')}  
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
      height:150,
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
    }
  });

const titleConfig = {
  title: 'ชาเลนจ์การกิน',
  tintColor:'black'
};
const Bar = {
marginTop:20
};
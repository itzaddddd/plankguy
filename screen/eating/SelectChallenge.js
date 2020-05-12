import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView } from 'react-native';
import ECC1 from '../../components/EatCompletedChallenge1';
import ECC2 from '../../components/EatCompletedChallenge2';
import ECC3 from '../../components/EatCompletedChallenge3';

export default class SelectChallenge extends React.Component {
    static navigationOptions = {
        title: "Profile"
    }
    render(){
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
            <Image 
            source={require('../../assets/plate.png')}  
            style={{width:80, height: 80}} 
            />
            <Text style={styles.Header}> ชาเลนจ์การกิน {"\n"}<Text style={styles.Header2}>เลือกชาเลนจ์การกิน และบันทึกการกิน</Text></Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.body}>ชาเลนจ์การกินของคุณ</Text>
          </View>
          <ECC1/>
          <ECC2/>
          <ECC3/>
      </View>
      <Text>
      {"\n"}
      {"\n"}
      </Text>
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
  });
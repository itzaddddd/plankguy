import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WorkOut from './WorkOut'

export default function MyWorkOutList({navigation}) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: "",
    //         challengeName: ""
    //     };
    // }

    // render() {

        // this.number = 1,
        // this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน"

    return (
        <View style={styles.workOutList}>
            <WorkOut />
            <TouchableOpacity  style={styles.buttonDelete}  onPress={()=> navigation.navigate('WorkoutChallenge')}>
                <Text style={{fontSize:16, fontWeight:'bold',textAlign:'center'}}>
                    ลบรายการนี้
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    workOutList: {
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 2,
        paddingHorizontal: 50,
        borderColor: '#A0D1F7',
        borderRadius: 30,
    },
    buttonDelete: {
      marginTop: 10,
      marginBottom: 15,
      backgroundColor: '#CC0000',
      elevation: 2, 
      height: 40,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      textAlign: 'center',
    },
  });
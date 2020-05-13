import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView } from 'react-native';
import EachWorkOutGoal from './EachWorkOutGoal'
import RadioUpdateWorkOut from './RadioUpdateWorkOut'


export default class UpdateWorkOut extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        show1: false,
        show2: false,
        number: "",
        challengeName: "",
      };
    }

    ShowHideComponent1 = () => {
      if (this.state.show1 == false) {
        this.setState({ show1: true });
      } else {
        this.setState({ show1: false });
      }
    };

    ShowHideComponent2 = () => {
      if (this.state.show2 == false) {
        this.setState({ show2: true });
      } else {
        this.setState({ show2: false });
      }
    };


    render() {
      //สมมติข้อมูล
      this.number = 1,
      this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน"
    return (
        <ScrollView>
            {/* <NavigationBar
            containerStyle ={Bar}
            tintColor='#C0E3FF'
            title= {titleConfig}
            style={{position:'relative'}}
            /> */}
            <View style={styles.container}>
                <View style={styles.headerWorkOut}>
                    <Image 
                    source={require('../assets/work-out.png')}  
                    style={{width:80, height: 80}} 
                    />
                    <View style={{marginLeft:10,}}>
                    <Text style={styles.Header}>รูปแบบที่ {this.number}</Text>
                    <Text style={styles.Header2}>{this.challengeName}</Text>
                    </View>
                </View>

                <View style={{marginBottom: 30,}}>
                    <EachWorkOutGoal/>
                </View>

                <View>
                    <Text style={{
                        marginLeft:20,
                        fontSize:18, 
                        fontWeight:'bold',
                        borderBottomColor: '#A0D1F7', 
                        borderBottomWidth: 2, 
                        paddingHorizontal: 70}}>รายการที่ต้องทำ</Text>

                    <View style={{flexDirection:'column', marginTop: 20, marginLeft:20,}}>
                        <View style={styles.toDoList}>
                            <Text style={styles.toDoName}>วิ่ง 30 นาที</Text>
                            <RadioUpdateWorkOut/>
                        </View>
                        <View style={styles.toDoList}>
                            <Text style={styles.toDoName}>เดินเร็ว 15 นาที</Text>
                        </View>
                        <View style={styles.toDoList}>
                            <Text style={styles.toDoName}>วิดพื้น 30 ครั้ง</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWorkOut: {
        width: 310,
        height:100,
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    Header:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5A5B5B',
        // fontFamily: 'K2D'
    },
    Header2:{
        fontSize: 15,
        color: '#5A5B5B',
        // fontFamily: 'K2D'
    },
    toDoList: {
        flexDirection: 'row',
        textAlignVertical: 'center',
    },
    toDoName: {
        fontSize: 17,
        paddingVertical:6,
    },
  });

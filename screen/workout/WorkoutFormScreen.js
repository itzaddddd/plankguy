import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EachWorkOutGoal from '../../components/EachWorkOutGoal'
import NavigationBar from 'react-native-navbar';


export default class WorkoutFormScreen extends React.Component  {
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
              source={require('../../assets/work-out.png')}  
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
{/* example for completed challenge */}
          <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
            <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent1}>
              <View style={{backgroundColor:"#A0D1F7"}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft:30,marginTop:10,marginBottom:10}}>Day 1</Text>
              </View>
            </TouchableOpacity>  
            {this.state.show1 ? (
// สำเร็จแล้ว
            <View style={{flexDirection:'row', justifyContent:'center', paddingVertical: 15,}}>
                <FontAwesome5
                  size={20}
                  color="#FFF"
                  solid
                  name="check"
                  style={{backgroundColor:"green", margin:2,padding:3,borderColor: "green", borderWidth: 2, borderRadius:70, width: 30, textAlign:'center', textAlignVertical:'center'}}
                />
                <Text style={{fontWeight: 'bold', fontSize:20, textAlignVertical:'center'}}>  สำเร็จแล้ว</Text>
            </View>
            ) : null}
          </View>
{/* example for not complete challenge */}
          <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
            <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent2}>
              <View style={{backgroundColor:"#A0D1F7"}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft:30,marginTop:10,marginBottom:10}}>Day 2</Text>
              </View>
            </TouchableOpacity>  
            {this.state.show2 ? (
            <View>
{/* ยังไม่สำเร็จ */}
              <View style={{flexDirection:'row', justifyContent:'center', paddingVertical: 15,}}>
                <FontAwesome5
                  size={20}
                  color="#FFF"
                  solid
                  name="times"
                  style={{backgroundColor:"red", margin:2,padding:3,borderColor: "red", borderWidth: 2, borderRadius:70, width: 30, textAlign:'center', textAlignVertical:'center'}}
                />
                <Text style={{fontWeight: 'bold', fontSize:20, textAlignVertical:'center'}}> ยังไม่สำเร็จ</Text>
              </View>

              <Text style={{marginLeft:20,fontSize:18, fontWeight:'bold'}}>รายการที่ต้องทำ</Text>
{/* to do list */}
              <View style={{flexDirection: 'column',marginBottom:10,marginTop:10}}>
                <View style={{flexDirection: 'row', marginVertical:10}}>
                  <FontAwesome5
                    size={20}
                    color="#FFF"
                    solid
                    name="check"
                    style={{backgroundColor:"green", marginLeft:40, marginRight: 10,padding:3,borderColor: "green", borderWidth: 2, borderRadius:70, width: 30, textAlign:'center', textAlignVertical:'center'}}
                  />
                  <Text style={{fontSize:20, textAlignVertical:'center'}}>วิ่ง 30 นาที</Text>                
                </View>

                <View style={{flexDirection: 'row', marginVertical:10}}>
                  <FontAwesome5
                    size={20}
                    color="#FFF"
                    solid
                    name="check"
                    style={{backgroundColor:"green", marginLeft:40, marginRight: 10,padding:3,borderColor: "green", borderWidth: 2, borderRadius:70, width: 30, textAlign:'center', textAlignVertical:'center'}}
                  />
                  <Text style={{fontSize:20, textAlignVertical:'center'}}>เดินเร็ว 15 นาที</Text>                
                </View>

                <View style={{flexDirection: 'row', marginVertical:10}}>
                  <FontAwesome5
                    size={20}
                    color="#FFF"
                    solid
                    name="times"
                    style={{backgroundColor:"red", marginLeft:40, marginRight: 10,padding:3,borderColor: "red", borderWidth: 2, borderRadius:70, width: 30, textAlign:'center', textAlignVertical:'center'}}
                  />
                  <Text style={{fontSize:20, textAlignVertical:'center'}}>วิดพื้น 30 ครั้ง</Text>                
                </View>
              </View>
               
                
                <TouchableOpacity style={{borderRadius:20,backgroundColor:"#79B6E6",marginBottom:10,padding:5, marginHorizontal:20}}>
                  <Text style={{textAlign:"center", fontWeight:'bold',fontSize:18,}}>บันทึกผลการออกกำลังกาย</Text>
                </TouchableOpacity>
            </View>
            ) : null}
          </View>

        </View>
      </ScrollView>
    );
    }
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
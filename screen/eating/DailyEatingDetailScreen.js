import React from 'react';
import { StyleSheet, Text, View , Image ,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import NavigationBar from 'react-native-navbar';

export default class DailyEatingDetailScreen extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            Statusbar1: "",
            Statusbar2: "",
            Statusbar3: "",
            Statusbar4: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
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

    ShowHideComponent3 = () => {
      if (this.state.show3 == false) {
        this.setState({ show3: true });
      } else {
        this.setState({ show3: false });
      }
    };

    ShowHideComponent4 = () => {
      if (this.state.show4 == false) {
        this.setState({ show4: true });
      } else {
        this.setState({ show4: false });
      }
    };

    ShowHideComponent5 = () => {
      if (this.state.show5 == false) {
        this.setState({ show5: true });
      } else {
        this.setState({ show5: false });
      }
    };

    render() {
        //สมมติข้อมูล
            this.Statusbar1 = "ยังไม่ได้บันทึก",
            this.Statusbar2 = "ยังไม่ได้บันทึก",
            this.Statusbar3 = "ยังไม่ได้บันทึก",
            this.Statusbar4 = "ยังไม่ได้บันทึก"
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
            <Text style={styles.Header}> อาหารที่ทาน {"\n"}<Text style={styles.Header2}>ประวัติและข้อมูลการทานอาหารในแต่ละวัน</Text></Text>
          </View>
          <Text>{"\n"}</Text>
            <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
              <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent1}>
                <View style={{backgroundColor:"#A0D1F7"}}>
                  <Text style={{marginLeft:30,marginTop:10,marginBottom:10}}>Day1</Text>
                </View>
              </TouchableOpacity>  
              {this.state.show1 ? (
              <View>
                  <View style={{flexDirection: 'row',marginBottom:10,marginTop:20}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเช้า  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเที่ยง  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:90, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar2}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเย็น 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:97, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารว่าง 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar4}</Text>
                  </View>
                  <TouchableOpacity style={{borderRadius:20,backgroundColor:"#A0D1F7",marginLeft:70,marginRight:70,marginBottom:10,padding:5}}>
                    <Text style={{textAlign:"center"}}>รายละเอียด</Text>
                  </TouchableOpacity>
              </View>
              ) : null}
            </View>
            
            <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
              <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent2}>
                <View style={{backgroundColor:"#A0D1F7"}}>
                  <Text style={{marginLeft:30,marginTop:10,marginBottom:10}}>Day2</Text>
                </View>
              </TouchableOpacity>  
              {this.state.show2 ? (
              <View>
                  <View style={{flexDirection: 'row',marginBottom:10,marginTop:20}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเช้า  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเที่ยง  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:90, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar2}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเย็น 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:97, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารว่าง 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar4}</Text>
                  </View>
                  <TouchableOpacity style={{borderRadius:20,backgroundColor:"#A0D1F7",marginLeft:70,marginRight:70,marginBottom:10,padding:5}}>
                    <Text style={{textAlign:"center"}}>รายละเอียด</Text>
                  </TouchableOpacity>
              </View>
              ) : null}
            </View>

            <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
              <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent3}>
                <View style={{backgroundColor:"#A0D1F7"}}>
                  <Text style={{marginLeft:30,marginTop:10,marginBottom:10}}>Day3</Text>
                </View>
              </TouchableOpacity>  
              {this.state.show3 ? (
              <View>
                  <View style={{flexDirection: 'row',marginBottom:10,marginTop:20}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเช้า  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเที่ยง  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:90, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar2}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเย็น 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:97, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารว่าง 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar4}</Text>
                  </View>
                  <TouchableOpacity style={{borderRadius:20,backgroundColor:"#A0D1F7",marginLeft:70,marginRight:70,marginBottom:10,padding:5}}>
                    <Text style={{textAlign:"center"}}>รายละเอียด</Text>
                  </TouchableOpacity>
              </View>
              ) : null}
            </View>

            <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
              <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent4}>
                <View style={{backgroundColor:"#A0D1F7"}}>
                  <Text style={{marginLeft:30,marginTop:10,marginBottom:10}}>Day4</Text>
                </View>
              </TouchableOpacity>  
              {this.state.show4 ? (
              <View>
                  <View style={{flexDirection: 'row',marginBottom:10,marginTop:20}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเช้า  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเที่ยง  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:90, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar2}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเย็น 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:97, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารว่าง 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar4}</Text>
                  </View>
                  <TouchableOpacity style={{borderRadius:20,backgroundColor:"#A0D1F7",marginLeft:70,marginRight:70,marginBottom:10,padding:5}}>
                    <Text style={{textAlign:"center"}}>รายละเอียด</Text>
                  </TouchableOpacity>
              </View>
              ) : null}
            </View>

            <View style={{borderWidth: 3,borderColor: '#d9d9d9'}}>
              <TouchableOpacity style={{width:320}} onPress={this.ShowHideComponent5}>
                <View style={{backgroundColor:"#A0D1F7"}}>
                  <Text style={{marginLeft:30,marginTop:10,marginBottom:10}}>Day5</Text>
                </View>
              </TouchableOpacity>  
              {this.state.show5 ? (
              <View>
                  <View style={{flexDirection: 'row',marginBottom:10,marginTop:20}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเช้า  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar1}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเที่ยง  
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:90, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar2}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารเย็น 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:97, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar3}</Text>
                  </View>
                  <View style={{flexDirection: 'row',marginBottom:10}}>
                      <Text style={{marginLeft:15}}>
                          อาหารว่าง 
                      </Text>
                      <Text style={{borderRadius:10,backgroundColor:"yellow",marginLeft:100, paddingLeft:10,paddingRight:10,paddingTop:5,borderWidth: 3,borderColor: '#e6e6e6'}}>{this.Statusbar4}</Text>
                  </View>
                  <TouchableOpacity style={{borderRadius:20,backgroundColor:"#A0D1F7",marginLeft:70,marginRight:70,marginBottom:10,padding:5}}>
                    <Text style={{textAlign:"center"}}>รายละเอียด</Text>
                  </TouchableOpacity>
              </View>
              ) : null}
            </View>
        </View>
        <Text>
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
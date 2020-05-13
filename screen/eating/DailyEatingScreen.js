import React from 'react';
import { StyleSheet, Text, View,Modal,Image,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Radio from '../../components/RadioButton'

export default class DailyEatingScreen extends React.Component {
  constructor(){
    super()
    this.state={
      show1:false,
      show2:false,
      show3:false,
      show4:false,
    }
  }
  
    render() {
    return (
      <View style={styles.container}>
          <View style={styles.container2}>
            <Image 
            source={require('../../assets/plate.png')}  
            style={{width:80, height: 80}} 
            />
            <Text style={styles.Header}> อาหารที่ทาน {"\n"}<Text style={styles.Header2}>ประวัติและข้อมูลการทานอาหารในแต่ละวัน</Text></Text>
          </View>
          <Text>{"\n"}</Text>
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{borderRadius:20,borderColor:"#d9d9d9",borderWidth: 3,flexDirection:"row",alignItems:"center",paddingRight:20}}>
                  <Image source = {require('../../assets/correct.png')}
                  style={{width:80,height:80}}
                  />
                  <Text style={{fontSize:20,marginLeft:10,alignContent:"center"}}>
                  อาหารเช้า 
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderColor:"black",borderWidth: 1,borderRadius:20,width:80,height:80,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=> this.setState({show1:true})}>
                  <Text style={{color:"#fff",fontSize:20}}>
                  แก้ไข
                  </Text>
              </TouchableOpacity>
          </View>
          <Modal
         transparent={true}
         visible={this.state.show1}
         >
        <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{backgroundColor:"#ffffff",margin:35,padding:40,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
            <Text style={{fontSize: 20,textAlign:"center"}}>มื้อนี้ {"\n"}คุณได้รับสารอาหารใดบ้าง</Text>
            <View style={{textAlign:"right",flexDirection:"row",marginTop:10,marginLeft:50}}>
                <Text style={{marginLeft:52,fontSize:12}}>ไม่ได้รับ</Text><Text style={{marginLeft:10,fontSize:12}}>น้อย</Text><Text style={{marginLeft:12,fontSize:12}}>พอดี</Text><Text style={{marginLeft:15,fontSize:12}}>มาก</Text><Text style={{marginLeft:10,fontSize:12}}>มากเกินไป</Text>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>โปรตีน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>คาร์โบไฮเดรต</Text>
                <Radio/>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>แร่ธาตุ</Text>
              <View style={{marginLeft:43}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>วิตามิน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>ไขมัน</Text>
                <View style={{marginLeft:48}}>
                  <Radio/>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Button  title="ยืนยัน" onPress={()=>{this.setState({show1:false})}}/>
          </View>
        </View>
          </Modal>

          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{borderRadius:20,borderColor:"#d9d9d9",borderWidth: 3,flexDirection:"row",alignItems:"center",paddingRight:10}}>
                  <Image source = {require('../../assets/correct.png')}
                  style={{width:80,height:80}}
                  />
                  <Text style={{fontSize:20,marginLeft:10,alignContent:"center"}}>
                  อาหารเที่ยง
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderColor:"black",borderWidth: 1,borderRadius:20,width:80,height:80,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=> this.setState({show2:true})}>
                  <Text style={{color:"#fff",fontSize:20}}>
                  แก้ไข
                  </Text>
              </TouchableOpacity>
          </View>
          <Modal
         transparent={true}
         visible={this.state.show2}
         >
        <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{backgroundColor:"#ffffff",margin:35,padding:40,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
            <Text style={{fontSize: 20,textAlign:"center"}}>มื้อนี้ {"\n"}คุณได้รับสารอาหารใดบ้าง</Text>
            <View style={{textAlign:"right",flexDirection:"row",marginTop:10,marginLeft:50}}>
                <Text style={{marginLeft:52,fontSize:12}}>ไม่ได้รับ</Text><Text style={{marginLeft:10,fontSize:12}}>น้อย</Text><Text style={{marginLeft:12,fontSize:12}}>พอดี</Text><Text style={{marginLeft:15,fontSize:12}}>มาก</Text><Text style={{marginLeft:10,fontSize:12}}>มากเกินไป</Text>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>โปรตีน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>คาร์โบไฮเดรต</Text>
                <Radio/>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>แร่ธาตุ</Text>
              <View style={{marginLeft:43}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>วิตามิน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>ไขมัน</Text>
                <View style={{marginLeft:48}}>
                  <Radio/>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Button  title="ยืนยัน" onPress={()=>{this.setState({show2:false})}}/>
          </View>
        </View>
          </Modal>
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{borderRadius:20,borderColor:"#d9d9d9",borderWidth: 3,flexDirection:"row",alignItems:"center",paddingRight:20}}>
                  <Image source = {require('../../assets/correct.png')}
                  style={{width:80,height:80}}
                  />
                  <Text style={{fontSize:20,marginLeft:10,alignContent:"center"}}>
                  อาหารเย็น 
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderColor:"black",borderWidth: 1,borderRadius:20,width:80,height:80,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=> this.setState({show3:true})}>
                  <Text style={{color:"#fff",fontSize:20}}>
                  แก้ไข
                  </Text>
              </TouchableOpacity>
          </View>
          <Modal
         transparent={true}
         visible={this.state.show3}
         >
        <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{backgroundColor:"#ffffff",margin:35,padding:40,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
            <Text style={{fontSize: 20,textAlign:"center"}}>มื้อนี้ {"\n"}คุณได้รับสารอาหารใดบ้าง</Text>
            <View style={{textAlign:"right",flexDirection:"row",marginTop:10,marginLeft:50}}>
                <Text style={{marginLeft:52,fontSize:12}}>ไม่ได้รับ</Text><Text style={{marginLeft:10,fontSize:12}}>น้อย</Text><Text style={{marginLeft:12,fontSize:12}}>พอดี</Text><Text style={{marginLeft:15,fontSize:12}}>มาก</Text><Text style={{marginLeft:10,fontSize:12}}>มากเกินไป</Text>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>โปรตีน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>คาร์โบไฮเดรต</Text>
                <Radio/>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>แร่ธาตุ</Text>
              <View style={{marginLeft:43}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>วิตามิน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>ไขมัน</Text>
                <View style={{marginLeft:48}}>
                  <Radio/>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Button  title="ยืนยัน" onPress={()=>{this.setState({show3:false})}}/>
          </View>
        </View>
          </Modal>
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{borderRadius:20,borderColor:"#d9d9d9",borderWidth: 3,flexDirection:"row",alignItems:"center",paddingRight:20}}>
                  <Image source = {require('../../assets/correct.png')}
                  style={{width:80,height:80}}
                  />
                  <Text style={{fontSize:20,marginLeft:10,alignContent:"center"}}>
                  อาหารว่าง 
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderColor:"black",borderWidth: 1,borderRadius:20,width:80,height:80,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=> this.setState({show4:true})}>
                  <Text style={{color:"#fff",fontSize:20}}>
                  แก้ไข
                  </Text>
              </TouchableOpacity>
          </View>
          <Modal
         transparent={true}
         visible={this.state.show4}
         >
        <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{backgroundColor:"#ffffff",margin:35,padding:40,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
            <Text style={{fontSize: 20,textAlign:"center"}}>มื้อนี้ {"\n"}คุณได้รับสารอาหารใดบ้าง</Text>
            <View style={{textAlign:"right",flexDirection:"row",marginTop:10,marginLeft:50}}>
                <Text style={{marginLeft:52,fontSize:12}}>ไม่ได้รับ</Text><Text style={{marginLeft:10,fontSize:12}}>น้อย</Text><Text style={{marginLeft:12,fontSize:12}}>พอดี</Text><Text style={{marginLeft:15,fontSize:12}}>มาก</Text><Text style={{marginLeft:10,fontSize:12}}>มากเกินไป</Text>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>โปรตีน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>คาร์โบไฮเดรต</Text>
                <Radio/>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>แร่ธาตุ</Text>
              <View style={{marginLeft:43}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>วิตามิน</Text>
                <View style={{marginLeft:42}}>
                  <Radio/>
                </View>
            </View>
            <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2,paddingTop:5,width:300}}>
              <Text style={{marginRight:20,marginLeft:10}}>ไขมัน</Text>
                <View style={{marginLeft:48}}>
                  <Radio/>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Button  title="ยืนยัน" onPress={()=>{this.setState({show4:false})}}/>
          </View>
        </View>
          </Modal>
          <TouchableOpacity style={{backgroundColor:"#A0D1F7",padding:10,borderRadius:10,marginTop:20}}>
            <Text style={{fontSize:20}}>ย้อนกลับ</Text>
          </TouchableOpacity>
        </View>
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

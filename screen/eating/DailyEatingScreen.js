import React from 'react';
import { StyleSheet, Text, View,Modal,Image,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Radio from '../../components/RadioButton'

export default class DailyEatingScreen extends React.Component {
  constructor(){
    super()
    this.state={
      show:false
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
              <TouchableOpacity style={{backgroundColor:"red",borderColor:"black",borderWidth: 1,borderRadius:20,width:80,height:80,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=> this.setState({show:true})}>
                  <Text style={{color:"#fff",fontSize:20}}>
                  แก้ไข
                  </Text>
              </TouchableOpacity>
          </View>
          <Modal
            transparent={true}
            visible={this.state.show}
            >
            <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
              <View style={{backgroundColor:"#ffffff",margin:35,padding:40,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
                <Text style={{fontSize: 18,textAlign:"center"}}>มื้อนี้ {"\n"}คุณได้รับสารอาหารใดบ้าง</Text>
                <View style={{textAlign:"right",flexDirection:"row"}}>
                    <Text style={{marginLeft:5,fontSize:12}}>ไม่ได้รับ</Text><Text style={{marginLeft:5,fontSize:12}}>น้อย</Text><Text style={{marginLeft:5,fontSize:12}}>พอดี</Text><Text style={{marginLeft:5,fontSize:12}}>มาก</Text><Text style={{marginLeft:5,fontSize:12}}>มากเกินไป</Text>
                </View>
                <View style={{flexDirection:"row",borderRadius:20,borderColor:"#e6e6e6",borderWidth:2}}>
                  <Text>โปรตีน</Text>
                    <Radio/>
                </View>
                <View>
                  <Text>คาร์โบไฮเดรต</Text>
                    <Radio/>
                </View>
                <View>
                  <Text>แร่ธาตุ</Text>
                    <Radio/>
                </View>
                <View>
                  <Text>วิตามิน</Text>
                    <Radio/>
                </View>
                <View>
                  <Text>ไขมัน</Text>
                    <Radio/>
                </View>
      
                <Button style={{fontSize: 30}}  title="ยืนยัน" onPress={()=>{this.setState({show:false})}}/>
              </View>
            </View>
          </Modal>
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

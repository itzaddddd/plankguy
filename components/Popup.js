import React from 'react';
import {Text, View, Modal, Button, TextInput } from 'react-native';
import * as firebase from 'firebase'
import UUIDGenerator from 'react-native-uuid-generator'
export default class Popup extends React.Component {
    constructor()
    {
      super();
      this.state={
        show:true,
        user: null
      }
    }
   
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
        if(user !== null){
          this.setState({user:user.providerData[0]})
        }else{
          this.setState({user:null})
        }
      })
    }
   render() {
    return (
  
        
        <Modal
         transparent={true}
         visible={this.state.show}
        >
        <View style={{backgroundColor:"#000000aa",flex:1,alignItems:"center",justifyContent:"center"}}>
          <View style={{backgroundColor:"#ffffff",margin:35,padding:40,width:300,height:200,alignItems:"center",justifyContent:"center",borderRadius: 10,}}>
            <Text style={{fontSize: 15,}}>ยังไม่มีไดอารี่หรอ ?</Text>
            <Text style={{fontSize: 25,}}>สร้างไดอารี่ได้ที่นี่ 
                {"\n"}
            </Text>
            <Button style={{fontSize: 30}}  title="สร้างไดอารี่" onPress={()=>{
              let diaryRef = firebase.database().ref('diaries')
              let initialDiary = {
                diary_day: 1,
                diary_content: 'มาเริ่มวันแรกไปด้วยกัน',
                diary_image: null,
                diary_create: Date.now()
              }
              diaryRef.push({
                user_id: this.state.user.uid,
                diary_create: Date.now(),
                diary_days: 14
              })
              .then(snapshot => {
                let key =snapshot.key
                diaryRef.child(key).child('diary_set').push(initialDiary)
              })
              
              this.setState({show:false})
            }}/>
            {/*<Button 
              style={{fontSize:10,backgroundColor:"white"}}
              title="ยกเลิก"
              onPress={()=>this.setState({show:false})}
            />*/}
          </View>
        </View>
          </Modal>
        
    )
   }
}


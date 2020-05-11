import React from 'react';
import {Text, View, Modal, Button } from 'react-native';
export default class Popup extends React.Component {
    constructor()
    {
      super();
      this.state={
        show:true
      }
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
            <Button style={{fontSize: 30}}  title="สร้างไดอารี่" onPress={()=>{this.setState({show:false})}}/>
          </View>
        </View>
          </Modal>
        
    )
   }
<<<<<<< HEAD
}
=======
}
>>>>>>> 182b4a6c975a94ef3317618ba8e0f952aa0ee7a0

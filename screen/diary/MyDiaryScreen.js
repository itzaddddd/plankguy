import React,{Component} from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import EachDiary from '../../components/EachMyDiary';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Popup from '../../components/Popup'
import * as firebase from 'firebase'
export default class MyDiaryScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null,
      mydiary: null
    }
    YellowBox.ignoreWarnings(['Setting a timer'])
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user !== null){
        this.setState({user:user.providerData[0]})
      }else{
        this.setState({user:null})
      }
    })

    // get my diary
    setTimeout(()=>{
      let diaryRef = firebase.database().ref('diaries')
      diaryRef.on('value',diaries => {
        diaries.forEach(diary => {
          diaryRef.child(diary.key).child('user_id').on('value',user_id => {
            if(user_id.val() == this.state.user.uid){
              this.setState({mydiary:diary.val()})
            }
          })
        })
      })  
    },2000)
  }

  render(){
    let {user, mydiary} = this.state
    let diary_data = []
    if(user && mydiary){
      //console.log(mydiary.diary_set)
      for(let diary_object in mydiary.diary_set){
        diary_data.push(mydiary.diary_set[diary_object])
      }
      console.log('diary data ',diary_data)
      return (

        <View style={styles.container}>
          <Text style={styles.topicMyDiary}>ไดอารี่ของฉัน</Text>
          <ScrollView style={{paddingBottom:100,}}>
              {diary_data.map((diary,index) => 
                <EachDiary 
                  day={diary.diary_day} 
                  date={diary.diary_create} 
                  content={diary.diary_content} 
                  key={index}
                />
              )}   
            
          </ScrollView>
        </View>
  
      );
    }else if(user && (mydiary==null)){
      return (

        <View style={styles.container}>
          <Text style={styles.topicMyDiary}>ไดอารี่ของฉัน</Text>
          <ScrollView style={{paddingBottom:100,}}>
            <EachDiary/>
            <EachDiary/>
            <EachDiary/>
            <EachDiary/>
          </ScrollView>
          <Popup/>
        </View>
  
      );
    }else{
      return (
        <View style={styles.container}>
          <Text style={styles.topicMyDiary}>กรุณาเข้าสู่ระบบ</Text>
        </View>
      )
    }
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 75,
    },
    topicMyDiary: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: '#A0D1F7', //blue
      borderBottomWidth: 2,
      paddingVertical: 3,
      paddingHorizontal: 20,
      marginBottom: 5,
    },
  });
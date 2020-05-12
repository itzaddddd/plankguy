import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import EachWorkOutGoal from '../../components/EachWorkOutGoal'
import EachWorkOutDetail from '../../components/EachWorkOutDetail'

export default class WorkoutDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      challengeName: "",
    }
  }
  render() {

    this.number = 1,
    this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน"

    return (
      <ScrollView>
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
          <View>
            <EachWorkOutGoal/>
            <EachWorkOutDetail/>
          </View>
        </View>
      </ScrollView>
    );}
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWorkOut: {
    width: 310,
    height:100,
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 100,
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
});
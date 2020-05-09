import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


import Card from './CardComponent';

export default class EachDiary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            diaryDate: "",
            diaryContent: "",
        };
    }

    render() {
        //สมมติข้อมูล
        this.diaryDate = "1",
        this.diaryContent = "วันนี้... คุณทำความดีแล้วรึยัง ?"

    return (
      <View style={styles.container}>
        <Card style={styles.diaryCard}>
            <View  style={styles.headerDiary} >
                <Text   style={styles.diaryDate} >
                    Day  {this.diaryDate}
                </Text>
                <TouchableOpacity style={styles.heart}>
                    <Icon
                    style={styles.favDiary}
                        name="heart"
                        // onPress={this.loginWithGoogle}
                        {...iconStyles}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.diaryContent}>
                {this.diaryContent}
            </Text>
        </Card>
      </View>
    );}
  }
  
  const width_ = '100%';

  const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'flex-start',
      paddingTop: 20,
      width: 350,
      marginHorizontal: 0,
    },
    headerDiary: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: '#A0D1F7',
        width: 320,
        flexDirection: "row",
        alignItems: "center"
    },
    diaryContent: {
        backgroundColor: '#EEEEEE',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    diaryDate: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    favDiary: {
        color: '#CC0000', //red heart
        fontSize: 24,
        alignSelf: 'flex-end',
        // textAlignVertical: 'center',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        // alignSelf: 'flex-end',
    },
    heart: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
  });
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


import Card from './CardComponent';

export default class EachDiary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userPic: "",
            userName: "",
            diaryTime: "",
            diaryContent: "",
        };
    }

    render() {
        //สมมติข้อมูล
        this.userPic = <Image style={styles.userImage} source={require('../assets/avatar.png')}/>,
        this.userName = "ส้มหยุด",
        this.diaryTime = "17.07",
        this.diaryContent = "วันนี้... คุณทำความดีแล้วรึยัง ? ฉันทำแล้วล่ะ ฉันทำส้มหยุดให้คนดู ส้มหยุด ส้มหยุด ส้มหยุด ส้มหยุด ส้มหยุด ส้มหยุด ส้มหยุด ส้มหยุด"

    return (
        <View style={{width:'100%',}}>
            <Card>
                <View  style={styles.headerDiary} >
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        {this.userPic}
                        <Text style={styles.userName}>
                            {this.userName}
                        </Text>
                        <Text style={styles.diaryTime}>
                            {this.diaryTime}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heart}>
                        <Icon
                        style={styles.favDiary}
                            name="heart"
                            // onPress={this.loginWithGoogle}
                            {...iconStyles}
                        />
                    </TouchableOpacity>
                </View>
                <View  style={styles.diaryContentBox}>
                    <Text style={styles.diaryContent}>
                        {this.diaryContent}
                    </Text>
                </View>
                
                <View style={styles.diaryImageRow}>
                    <Image
                        style={styles.diaryImage}
                        source={require('../assets/avatar.png')} 
                    />
                    <Image
                        style={styles.diaryImage}
                        source={require('../assets/avatar.png')} 
                    />
                    <Image
                        style={styles.diaryImage}
                        source={require('../assets/avatar.png')} 
                    />
                </View>
            </Card>
        </View>
    );}
  }
  
  const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };

  const styles = StyleSheet.create({
    headerDiary: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 3,
        paddingHorizontal: 10,
        // backgroundColor: '#A0D1F7',
        width: 320,
        flexDirection: "row",
        alignContent: 'flex-end',
        alignItems: "center"
    },
    userImage: {
        width: 35,
        height: 35,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },
    userName: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlignVertical: 'center',
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textShadowOffset: {width:0.5,height:-1},
        textShadowColor: '#5A5B5B',
        textShadowRadius: 1,
    },
    diaryTime: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlignVertical: 'center',
        marginLeft: 5,
        fontSize: 14,
        color: '#5A5B5B',
    },
    diaryContentBox: {
        width: '120%',
        flexWrap: 'nowrap',
    },
    diaryContent: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 14,
    },
    favDiary: {
        color: '#CC0000', //red heart
        fontSize: 26,
        alignSelf: 'flex-end',
        textAlignVertical: 'center',
    },
    heart: {
        textAlign: 'right',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: '65%',
    },
    diaryImageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '120%',
    },
    diaryImage: {
        width: 70,
        height: 70,
        marginBottom: 30,
        marginHorizontal: 5,
    },
  });
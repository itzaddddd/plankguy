import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
        this.diaryContent = "แล้วเราคนเดียวจะไปสู้ไหวหรอ"

    return (
      <View style={styles.container}>
        <Card>
            <View  style={styles.headerDiary} >
                <TouchableOpacity>
                    <Text   style={styles.diaryDate} >
                        Day  {this.props.day}
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
            <Text style={styles.diaryContent}>
                {this.props.content}
            </Text>
            <View style={styles.diaryImageRow}>
                <Image
                    style={styles.diaryImage}
                    source={{uri:"https://www.khunmaejuphuket.com/wp-content/uploads/2018/07/IMG_0516-1.jpg"}} 
                />
                <Image
                    style={styles.diaryImage}
                    source={{uri:"https://th.openrice.com/userphoto/Recipe/0/1D/0009S7EE3C8CAF7D126471l.jpg"}}
                />
                <Image
                    style={styles.diaryImage}
                    source={{uri:"https://f.btwcdn.com/store-41965/product/bad20e17-d05a-d1c3-69bf-5bd5d879e344.jpg"}}
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
        alignContent: 'flex-end',
        alignItems: "center"
    },
    diaryContent: {
        backgroundColor: '#EEEEEE',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    diaryDate: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    favDiary: {
        color: '#CC0000', //red heart
        fontSize: 24,
        alignSelf: 'flex-end',
        textAlignVertical: 'center',
    },
    heart: {
        textAlign: 'right',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: 220,
    },
    diaryImage: {
        width: 70,
        height: 70,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    diaryImageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 50,
    },
  });
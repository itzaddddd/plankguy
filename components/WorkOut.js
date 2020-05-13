import React from 'react';
import { StyleSheet, Text, View, Image, ViewBase } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class WorkOutChallenge extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: "",
    //         challengeName: ""
    //     };
    // }

    render() {

        // this.number = 1,
        // this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน"

    return (
        <View>
            <TouchableOpacity style={styles.challengeSelection}>
                <View>
                    <Text style={styles.number}>รูปแบบที่ 1</Text>
                    <Text style={styles.challengeName}>
                        สำหรับคนที่ต้องการลดความอ้วน
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.challengeSelection}>
                <View>
                    <Text style={styles.number}>รูปแบบที่ 2</Text>
                    <Text style={styles.challengeName}>
                        สำหรับผู้ที่ต้องการมีสุขภาพที่ดี
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.challengeSelection}>
                <View>
                    <Text style={styles.number}>รูปแบบที่ 3</Text>
                    <Text style={styles.challengeName}>
                        สำหรับผู้ที่ต้องการสร้างกล้ามเนื้อ
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
            
        
    );}
}

const styles = StyleSheet.create({
    challengeSelection: {
        borderBottomWidth: 2,
        borderColor: '#A0D1F7',
        paddingVertical: 15,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignItems:'stretch',
    },
    number: {
        fontSize: 18,
        fontStyle:'italic',
        paddingBottom:5,
    },
})
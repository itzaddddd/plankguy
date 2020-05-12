import React from 'react';
import { StyleSheet, Text, View, Image, ViewBase } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class WorkOutChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            challengeName: ""
        };
    }

    render() {

        this.number = 1,
        this.challengeName = "สำหรับคนที่ต้องการลดความอ้วน"

    return (
<<<<<<< HEAD
            <View style={styles.challengeSelection}>
                <View>
                    <Text style={styles.number}>รูปแบบที่ {this.number}</Text>
                    <Text style={styles.challengeName}>
                        {this.challengeName}
                    </Text>
                </View>
            </View>
=======
        <View style={styles.challengeSelection}>
            <TouchableOpacity /*onPress={() => this.props.navigation.navigate("WorkoutDetailScreen")}*/>
                <Text style={styles.number}>รูปแบบที่ {this.number}</Text>
                <Text style={styles.challengeName}>
                    {this.challengeName}
                </Text>
            </TouchableOpacity>
        </View>
>>>>>>> 87a53cf2f04ce4bb8fd7ccb631ab4c306392a3d9
        
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
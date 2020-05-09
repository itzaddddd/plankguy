import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardComponent';

export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missionName: "",
            missionDetail: ""
        };
    }

    render() {

        this.missionName = "TEST",
        this.missionDetail = "DETAIL TEST"
       
    return (
        <View style={styles.missionRow}>
            <View style={styles.missionBox}>
                <TouchableOpacity>
                    <Card>
                        <Text style={styles.missionName}>
                            {this.missionName}
                        </Text>
                        <Text style={styles.missionDetail}>
                            {this.missionDetail}
                        </Text>
                    </Card>
                </TouchableOpacity>
            </View>
        </View>    
        );}
}

const styles = StyleSheet.create({
    // mission completed
    missionRow: {
        marginHorizontal: 30,
    },
    // missionBox: {
    //     borderStyle: 'solid',
    //     borderWidth: 1.5,
    //     borderColor: '#c6c6c6',
    //     margin: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 5,
    //     backgroundColor: '#d6d6d6',
    // },
    missionName: {
        fontSize: 16,
        fontWeight:'bold',
    },
    missionDetail: {
        fontSize: 14,
        paddingHorizontal: 10,
    }

})
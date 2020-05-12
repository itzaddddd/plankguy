import React from 'react';
import { StyleSheet, Text, View, Image, ViewBase } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import WorkOut from './WorkOut';

export default function WorkOutChallenge({navigation}) {
    return (
        <View style={styles.challengeBox}>
            <View style={styles.challengeRow}>
                <Text style={styles.challengeTopic}>เลือกเข้าร่วมชาเลนจ์</Text>
            </View>
            <View >
                <WorkOut/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    challengeBox: {
    //     flexDirection: 'column',
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#A0D1F7',
    },
    challengeRow: {
        borderBottomWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#A0D1F7',
        paddingVertical: 10,
        paddingHorizontal: 70,
        textAlign: 'center',
        backgroundColor: '#A0D1F7'
    },
    challengeTopic: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
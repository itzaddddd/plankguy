import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileScreen({navigation}) {
    return (
        <View style={styles.missionRow}>
            <View style={styles.missionBox}>
                <TouchableOpacity>
                    <Text style={styles.missionName}>
                    ภารกิจ ____
                    </Text>
                    <Text style={styles.missionDetail}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.missionBox}>
                <TouchableOpacity>
                    <Text style={styles.missionName}>
                        ภารกิจ ____
                    </Text>
                    <Text style={styles.missionDetail}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.missionBox}>
                <TouchableOpacity>
                    <Text style={styles.missionName}>
                        ภารกิจ ____
                    </Text>
                    <Text style={styles.missionDetail}>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Text>
                </TouchableOpacity>
            </View>
        </View>    
        );
}

const styles = StyleSheet.create({
    // mission completed
    missionRow: {
        marginHorizontal: 30,
    },
    missionBox: {
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#c6c6c6',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#d6d6d6',
    },
    missionName: {
        fontSize: 16,
        fontWeight:'bold',
    },
    missionDetail: {
        fontSize: 14,
        paddingHorizontal: 10,
    }

})
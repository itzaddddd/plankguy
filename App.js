import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TimelineScreen from './screen/TimelineScreen'
import MyDiaryScreen from './screen/diary/MyDiaryScreen'
import EatChallengeScreen from './screen/eating/CreateEatingChellengeScreen'
import WorkoutChallengeScreen from './screen/workout/CreateWorkoutChellengeScreen'
import FavDiaryScreen from './screen/diary/FavDiaryScreen'
import LoginScreen from './screen/auth/LoginScreen'

const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Timeline" drawerStyle={style.dreawer}>
        <Drawer.Screen name="Timeline" component={TimelineScreen} options={{title:"หน้าหลัก"}} />
        <Drawer.Screen name="MyDiary" component={MyDiaryScreen} options={{title:"ไดอารี่ของฉัน"}} />
        <Drawer.Screen name="EatChallenge" component={EatChallengeScreen} options={{title:"ชาเลนจ์การกิน"}} />
        <Drawer.Screen name="WorkoutChallenge" component={WorkoutChallengeScreen} options={{title:"ชาเลนจ์ออกกำลังกาย"}} />
        <Drawer.Screen name="FavDiary" component={FavDiaryScreen} options={{title:"ไดอารี่โปรด"}} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{title:"เข้าสู่ระบบ"}} />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}

const style = StyleSheet.create({
  dreawer: {
    backgroundColor: '#A0D1F7',
    color:'black'
  }
})
import React from 'react';
import * as firebase from 'firebase'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TimelineScreen from './screen/TimelineScreen'
import MyDiaryScreen from './screen/diary/MyDiaryScreen'
import EatChallengeScreen from './screen/eating/CreateEatingChellengeScreen'
import WorkoutChallengeScreen from './screen/workout/CreateWorkoutChellengeScreen'
import FavDiaryScreen from './screen/diary/FavDiaryScreen'
import LoginScreen from './screen/auth/LoginScreen'
import SignUpScreen from './screen/auth/Signup.Screen'
import ProfileScreen from './screen/auth/ProfileScreen'
import EditProfileScreen from './screen/auth/EditProfileScreen'
import WorkoutDetailScreen from './screen/workout/WorkoutDetailScreen'
import MyWorkOutScreen from './screen/workout/MyWorkoutScreen'
import DiaryPageScreen from './screen/diary/DiaryPageScreen'
import DiaryFormScreen from './screen/diary/DiaryFormScreen'
import SelectChallenge from './screen/eating/SelectChallenge'

const Drawer = createDrawerNavigator()

// Your web app's Firebase configuratio
const firebaseConfig = {
  apiKey: "AIzaSyDpKsn8awo4wKvjZ2a_pAGxB-tcuE6aWr4",
  authDomain: "plankguy-5555.firebaseapp.com",
  databaseURL: "https://plankguy-5555.firebaseio.com",
  projectId: "plankguy-5555",
  storageBucket: "plankguy-5555.appspot.com",
  messagingSenderId: "639160082860",
  appId: "1:639160082860:web:993de85ecbbd1012ba5a09"
};
// Initialize Firebase
if(!firebase.apps.length)firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Timeline" drawerStyle={style.drawer}>
          <Drawer.Screen name="Timeline" component={TimelineScreen} options={{title:"หน้าหลัก"}} />
          <Drawer.Screen name="MyDiary" component={MyDiaryScreen} options={{title:"ไดอารี่ของฉัน"}} />
          <Drawer.Screen name="EatChallenge" component={EatChallengeScreen} options={{title:"ชาเลนจ์การกิน"}} />
          <Drawer.Screen name="WorkoutChallenge" component={WorkoutChallengeScreen} options={{title:"ชาเลนจ์ออกกำลังกาย"}} />
          <Drawer.Screen name="FavDiary" component={FavDiaryScreen} options={{title:"ไดอารี่โปรด"}} />
          <Drawer.Screen name="Login" component={LoginScreen} options={{title:"เข้าสู่ระบบ"}} />

          <Drawer.Screen name="SignUp" component={SignUpScreen} options={{title:"ลงทะเบียน"}} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{title:"โปรไฟล์"}} />
          <Drawer.Screen name="EditProfile" component={EditProfileScreen} options={{title:"แก้ไขโปรไฟล์"}} />
          <Drawer.Screen name="WorkoutDetail" component={WorkoutDetailScreen} options={{title:"รายละเอียดชาเลนจ์ออกกำลังกาย"}} />
          <Drawer.Screen name="MyWorkout" component={MyWorkOutScreen} options={{title:"การออกกำลังกายของฉัน"}} />        
          

        <Drawer.Screen name="DiaryPageScreen" component={DiaryPageScreen} options={{title:"หน้าเขียนไดอารี่"}} />
        <Drawer.Screen name="DiaryFormScreen" component={DiaryFormScreen} options={{title:"หน้าสร้างไดอารี่"}} />

        <Drawer.Screen name="SelectChallenge" component={SelectChallenge} options={{title:"Test"}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  drawer: {
    backgroundColor: '#A0D1F7',
    color:'black'
  }
})
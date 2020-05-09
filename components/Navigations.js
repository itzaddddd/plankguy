// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer'

// import TimelineScreen from '../screen/TimelineScreen'
// import MyDiaryScreen from '../screen/diary/MyDiaryScreen'
// import EatChallengeScreen from '../screen/eating/CreateEatingChellengeScreen'
// import WorkoutChallengeScreen from '../screen/workout/CreateWorkoutChellengeScreen'
// import FavDiaryScreen from '../screen/diary/FavDiaryScreen'
// import LoginScreen from '../screen/auth/LoginScreen'
// import ProfileScreen from '../screen/auth/ProfileScreen'


// // Main Screens for Drawer Navigator
// export const MainStack = createStackNavigator({
//     TimelineScreen: {
//       screen: TimelineScreen,
//       navigationOptions: {
//         title: 'TimelineScreen',
//         gesturesEnabled: false,
//         headerLeft: null
//       }
//     },
  
//     // Notifications: {
//     //   screen: Notifications,
//     //   navigationOptions: {
//     //     title: 'Notifications'
//     //   }
//     // }
//   }, { headerMode: 'screen' } );
  
//   // Drawer Navigator
//   export const Drawer = createDrawerNavigator({
//     EatChallengeScreen: {
//       screen: EatChallengeScreen
//     }
//   });
  
  
//   // Main App Navigation
//   export const AppStack = createStackNavigator({
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false
//       }
//     },
  
//     // Drawer: {
//     //   screen: Drawer,
//     //   navigationOptions: {
//     //     header: null,
//     //     gesturesEnabled: false
//     //   }
//     // }
//   }, { headerMode: 'none' } );
import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CreateStatusScreen from './src/screens/CreateStatusScreen';
import FeedScreen from './src/screens/FeedScreen';
import StatusDetailScreen from './src/screens/StatusDetailScreen';
import StatusListScreen from './src/screens/StatusListScreen';
import StoryScreen from './src/screens/StoryScreen';
import HashtagScreen from './src/screens/HashtagScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
// import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
// import { Provider as LocationProvider } from './src/context/LocationContext';
//import { Provider as StatusProvider } from './src/context/StatusContext';
//import { Provider as ApiProvider } from './src/api/apiContext';
import { FontAwesome } from '@expo/vector-icons';

// import reducer from './src/api/apiReducer';
import { Provider } from 'react-redux';
import store from './store/index';

import { Authenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import FollowScreen from './src/screens/FollowScreen';

Amplify.configure(awsmobile);


const statusListFlow = createStackNavigator({
  StatusList: StatusListScreen,
  Story: StoryScreen,
  // Story: {
  //   screen: StoryScreen,
  //   navigationOptions: {
  //     headerTitle: 'Story',
  //   },
  // },
  //StatusDetail: StatusDetailScreen,
  // Hashtag: HashtagScreen,
  Follow: FollowScreen
});

statusListFlow.navigationOptions = {
  title: 'Story',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const feedFlow = createStackNavigator({
  Feed: FeedScreen,
  Story: StoryScreen,
  StatusDetail: StatusDetailScreen,
  Hashtag: HashtagScreen,
  Follow: FollowScreen
});

feedFlow.navigationOptions = {
  title: 'Feed',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};
// const LoginStack = createStackNavigator({
//   Signup: SignupScreen,
//   Signin: SigninScreen
// });

// const FeedStack = createStackNavigator({
//   Feed: FeedScreen,
//   StatusDetail: StatusDetailScreen,
// });

// const StoryStack = createStackNavigator({
//   Story: StoryScreen,
//   StatusDetail: StatusDetailScreen,
// });

// const StatusListStack = createStackNavigator({
//   StatusList: StatusListScreen,
//   StatusDetail: StatusDetailScreen,
// });

// const BottomTabs = createBottomTabNavigator({
//   Feed: {
//     screen: FeedStack,
//     navigationOptions: {
//       tabBarLabel: 'Feed',
//     },
//   },
//   Story: {
//     screen: StoryStack,
//     navigationOptions: {
//       tabBarLabel: 'Story',
//     },
//   },
//   New: {
//     screen: StatusCreateScreen,
//     navigationOptions: {
//       tabBarLabel: 'Add Tweet',
//     }
//   },
//   Profile: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//     }
//   }
// });

// const switchNavigator = createSwitchNavigator({
//   Auth: {
//     screen: LoginStack,
//   },
//   BottomTabs,
//   My: {
//     screen: StatusListStack,
//   },
//   Others: {
//     screen: StoryStack,
//   },
//   Feed: {
//     screen: FeedStack,
//   },
// });




const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    feedFlow,
    statusListFlow,
    CreateStatus: CreateStatusScreen,
    Profile: ProfileScreen
  }),
});


// console.log("App's current state");
// console.log(store.getState());

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <App
        ref={navigator => {
          setNavigator(navigator);
        }}
        />
      </Provider>
    </AuthProvider>
  );
};

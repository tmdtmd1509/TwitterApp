import React, { Component, useContext, useState } from 'react';
//import { AsyncStorage, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
//import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
//import { Context as StatusContext } from '../context/StatusContext';
//import { Context, Provider } from '../api/apiContext';
import { getFeed } from '../../api/apiContext'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import Status from '../../components/Status'
import { FontAwesome } from '@expo/vector-icons';

import StatusContainer from '../../components/StatusContainer';
import { View } from 'react-native';

import Feed from '../../components/Feed';

// const mapStateToProps = state => ({
//   data: state.apiReducer.data,
// });

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({getFeed}, dispatch)
// };

// //const Feed = ({ navigation, data, getFeed }) => {
// class Feed extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.props.getFeed();
//   // }
//   componentWillMount() {
//     //if(this.props.data !== prevProps.data) {
//     //}
//     this.props.getFeed();
//   };

//   render() {
//     const { data } = this.props;
//     console.log('feed');
//     //console.log(JSON.stringify(this.props.getFeed()));
//     console.log(data);
//     return data == {} ? <StatusContainer data={data} navigation={this.props.navigation} /> : <View/>
//   }
// }
  //const { state, fetchStatuses } = useContext(StatusContext);
  //const { state, getFeed } = useContext(Context);
  //const [feed, setFeed] = useState([]);

  //const getstatuses = async() => {
    //getFeed();
    

    //var tempFeed = [];
    // const user = JSON.parse(await AsyncStorage.getItem("currentUser"));
    // user.followers.map(async (item) => {
    //     const userInfo = JSON.parse(await AsyncStorage.getItem(item));
    //     tempFeed.push(...userInfo.statuses);
    // });

    //console.log(tempFeed);
    //setFeed(tempFeed);
  //}
  //getFeed();
  //console.log(data);
  //return (
    //<>
      // {/* <NavigationEvents onWillFocus={getstatuses()} /> */}
      // {/* <FlatList
//         data={feed}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('StatusDetail', {user: item.alias, status: item })}
//             >
//               <Status
//               user={item.alias}
//               status={item}
//               />
//             </TouchableOpacity>
//           );
//         }}
//       /> */}
//       <StatusContainer data={data} navigation={navigation} />

//     </>
//   );
// };


// const styles = StyleSheet.create({});
//const FeedScreen = connect(mapStateToProps, mapDispatchToProps)(Feed);

class FeedScreen extends Component {
  render() {
    return (
      <Feed/>
    )
  }
}

FeedScreen.navigationOptions = {
  title: 'Feeds',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

export default FeedScreen;

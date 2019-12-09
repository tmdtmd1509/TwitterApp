import React, { Component } from 'react';
import { FlatList, TouchableOpacity, AsyncStorage, Text, View } from 'react-native';
import { url } from '../constants';
import StatusContainer from '../components/StatusContainer';

import { navigate } from '../navigationRef';



class FollowScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: "",
        followers: [],
        followees: [],
    }
}
  // const status = navigation.getParam('status');
  // const user = navigation.getParam('user');
  // let user = "";
  // let status = "";

  componentWillMount() {
    this.getUserFollower();
  }

  getUserFollower = () => {
    AsyncStorage.getItem("selectedUser")
    .then(user => {this.getFollowers(user), this.getFollowees(user)})
  }

  getFollowers = async (user)=> {
    fetch(url+'/followers?user='+user, {
        headers: {
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())    
    .then(json => {
        this.setState({ followers: json })
    })
    .catch(err =>
      console.error(err)
    )
    console.log("followers "+this.state.followers)
  };

  getFollowees = async (user)=> {
    fetch(url+'/followees?user='+user, {
        headers: {
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())    
    .then(json => {
        this.setState({ followees: json })
    })
    .catch(err =>
      console.error(err)
    )
    console.log("followees "+this.state.followees)

  };

  
  render() {
    let followers = this.state.followers;
    let followees = this.state.followees;


    
    return (
      <>
        <Text>Followers: </Text>
        <View>
          { followers.map((item, key)=>(
          <Text key={key} > { item } </Text>)
          )}
         </View>

        {/* <StatusContainer data={this.state.followers}/> */}

        <Text>Followees: </Text>
        <View>
          { followees.map((item, key)=>(
          <Text key={key} > { item } </Text>)
          )}
         </View>

        {/* <StatusContainer data={this.state.followees}/> */}
      </>
    );
  }
};


export default FollowScreen;

import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { url } from '../constants';
import { View, Text, AsyncStorage } from "react-native";
import StatusContainer from '../components/StatusContainer';
import { forEach } from 'iterall';



class FeedScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        feed: [],
    }
  }
  componentWillMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('currentUser')

    this.getFeed(user);
  }


  getFeed = async (user)=> {
    fetch(url+'/feed?user='+user, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'GET',
      })
    .then(res => res.json())   
    //.then(json => this.filterByFollowees(user, json))
    .then(json => this.setState({ feed: json }))
    .then(console.log("set statuses"))
    .catch(err =>
      console.error(err)
    )
  };

  render() {
      console.log("feed");
      console.log(this.state.feed);
      return <StatusContainer data={this.state.feed}/>
  }
}

FeedScreen.navigationOptions = {
  title: 'Feeds',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

export default FeedScreen;

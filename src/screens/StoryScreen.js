import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { url } from '../constants';
import { AsyncStorage, Button } from 'react-native';
import StatusContainer from '../components/StatusContainer';
import FollowScreen from './FollowScreen';


class StoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: "",
        data: [],
        alias: "",
    }
  }
  componentWillMount() {
    AsyncStorage.getItem("currentUser")
    .then(user => {this.setState({ user: user })})
    .then(this.getStory())
  }

  getStory = async ()=> {
    const {navigation} = this.props;
    const alias = navigation.getParam('alias')
    this.setState({ alias: alias });
    console.log("getstory " + alias)
    fetch(url+'/story/' + alias, {
        headers: {
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())    
    .then(json => this.setState({ data: json }))
    .catch(err =>
      console.error(err)
    )
  };

  follow = (user, alias) => {
      fetch(url+'/followers?user='+alias+"&follower="+user, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'PUT',
      })//.then(res => res.json())
      //.then(res => alert(JSON.stringify(res)))
      .catch(err => console.error(err))

      fetch(url+'/followees?user='+user+"&followee="+alias, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'PUT',
      })//.then(res => res.json())
      .then(res => alert(JSON.stringify(res)))
      .catch(err => console.erro(err))
  }

  render() {
    console.log("story");
    console.log(this.state.data);
      return (
        <>
          <Button title="UnFollow" onPress={() => this.follow(this.state.user, this.state.alias)} />
          <Button title="Follow" onPress={() => this.follow(this.state.user, this.state.alias)} />
          <StatusContainer data={this.state.data}/>
        </>
      )
  }
}

StoryScreen.navigationOptions = {
  title: 'Story',
};

export default StoryScreen;

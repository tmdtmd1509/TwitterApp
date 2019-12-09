import React, { Component } from 'react';
import { url } from '../constants';
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import StatusContainer from '../components/StatusContainer';


class StatusListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
    }
  }
  componentWillMount() {
    AsyncStorage.getItem("currentUser")
    .then(res => this.getStatusList(res));
  }

  getStatusList = async (user)=> {
    console.log("get "+ user);

      fetch(url+'/story/'+user, {
          headers: {
            'Accept': 'application/json'
          }
        })
      .then(res => res.json())    
      .then(json => {
          this.setState({ data: json })
      })
      .catch(err =>
        console.error(err)
      )
    };

  render() {
      console.log("statuslist");
      //console.log(this.state.data);
      return <StatusContainer data={this.state.data}/>
  }
};

StatusListScreen.navigationOptions = {
  title: 'My Story',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

export default StatusListScreen;

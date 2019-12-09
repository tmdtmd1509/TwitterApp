import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, Text } from 'react-native';
import Status from '../components/Status'
import { navigate } from '../navigationRef';


class StatusDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: "",
    }
}
  // const status = navigation.getParam('status');
  // const user = navigation.getParam('user');
  // let user = "";
  // let status = "";

  componentWillMount() {
    this.getCurrentUser();
    const {navigation} = this.props;
    const status = navigation.getParam('currentStatus') ; 
    this.setState({status: status});
  }

  getCurrentUser = () => {
    AsyncStorage.getItem("currentUser")
    .then(res => {
      this.setState({ user: res })
    });

    // AsyncStorage.getItem("selectedStatus")
    // .then(value => JSON.parse(value))
    // .then(res => {
    //   this.setState({ status: res })
    // });
  }
  render() {
    return (
      <>
        <Text style={{ fontSize: 22, padding: 10 }}
              onPress={() => navigate('Follow')}>Check Followers</Text>
        <Status
          user={this.state.user}
          status={this.state.status}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default StatusDetailScreen;

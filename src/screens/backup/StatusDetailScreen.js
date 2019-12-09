import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import Status from '../components/Status'


class StatusDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: "",
        status: "",
    }
}
  // const status = navigation.getParam('status');
  // const user = navigation.getParam('user');
  // let user = "";
  // let status = "";

  getStatuses = () => {
    AsyncStorage.getItem("selectedUser")
    .then(res => {
      this.setState({ user: res })
    });

    AsyncStorage.getItem("selectedStatus")
    .then(value => JSON.parse(value))
    .then(res => {
      this.setState({ status: res })
    });
  }

  componentWillMount() {
    this.getStatuses();
  }

  render() {
    return (
      <>
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

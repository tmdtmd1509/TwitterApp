import React, { Component } from 'react';
import Status from '../components/Status'
import { FlatList, TouchableOpacity, AsyncStorage, Text } from 'react-native';
import { navigate } from '../navigationRef';

class StatusContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: "",
    }
  }
  componentWillMount() {
    AsyncStorage.getItem("currentUser")
    .then(user => this.setState({ user: user }))
  }

  goToDetailScreen = (item) => {
    console.log("goto detail function");
    console.log(JSON.stringify(item));
    // try {
    //   await AsyncStorage.setItem("selectedUser", item.alias);
    //   await AsyncStorage.setItem("selectedStatus", JSON.stringify(item));
    // } catch (err) {
    //   console.log(err);
    // }
    AsyncStorage.setItem("selectedUser", item.alias);
    //AsyncStorage.setItem("selectedStatus", JSON.stringify(item));
    return navigate('StatusDetail', {currentStatus: item})
  };
  render() {
    console.log("status container");
  
    return (
      <>
        {this.props.data.message == "Internal server error" ?
          <Text>no status</Text>:
        <FlatList
          style={{
            flex: 1,
            width: '100%',
          }}
          data={this.props.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return(
              <TouchableOpacity onPress={() => this.goToDetailScreen(item)}>
                 <Status user={this.state.user} status={item} />
              </TouchableOpacity>
            )
          }}
        />}
      </>
    );  
  }
}

export default StatusContainer;
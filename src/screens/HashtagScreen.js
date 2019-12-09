import React, { useContext, useState, Component } from 'react';
import { AsyncStorage, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
import { Context as StatusContext } from '../context/StatusContext';
import Status from '../components/Status'
import { navigate } from '../navigationRef';
import Images from '../../assets/images';
import { url } from '../constants';
import StatusContainer from '../components/StatusContainer';




class HashtagScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hashStatuses: []
    }
  }
  componentWillMount() {
    this.getstatuses();
  }
  getstatuses = async() => {
    const {navigation} = this.props;
    const hashtag = navigation.getParam('hashtag');
    //console.log("hashtag "+hashtag)
    fetch(url+'/hashtags?hashtag=' + hashtag, {
        headers: {
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())    
    .then(json => this.setState({ hashStatuses: json }))
    .catch(err =>
      console.error(err)
    )
  }
  render(){
    console.log("hashtags");
    console.log(this.state.hashStatuses);
    return <StatusContainer data={this.state.hashStatuses}/>
  }
};

// const styles = StyleSheet.create({});

export default HashtagScreen;

import React, { Component } from 'react';
import { getFeed } from '../api/actions'
import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux'
import { url } from '../constants';
import StatusContainer from './StatusContainer';


class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentWillMount() {
        this.getFeed();
    }

    getFeed = async ()=> {
        console.log("getFeed got called")
        fetch(url+'/feed', {
            headers: {
              'Accept': 'application/json'
            }
          })
          //.then(this.handleData())
        .then(res => res.json())    
        .then(json => {
            this.setState({ data: json })
        })
        .catch(err =>
          console.error(err)
        )
        console.log("done");
      };

    handleData = () => {
        this.props.getFeed(this.state.data);
        console.log("handle got called");
    };

    render() {
        //const { data } = this.props;
        //this.props.getFeed;
        console.log('feed');
        console.log(this.state.data);
        return <StatusContainer data={this.state.data}/>
    }
}

const mapStateToProps = state => ({
    data: state.apiReducer.data,
  });
  
const mapDispatchToProps = {
    //return { getFeed: bindActionCreators(getFeed, dispatch)}
    getFeed
};

  
Feed = connect(mapStateToProps, mapDispatchToProps)(Feed);
export default Feed;


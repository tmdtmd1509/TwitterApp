import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import Images from '../../assets/images'

//state = { apiResponse: null };

// const getSample = async () => {
//  const path = "/status"; // you can specify the path
//   const apiResponse = await API.get("TwitterAPI" , path); //replace the API name
//   console.log('response:' + apiResponse);
//   this.setState({ apiResponse });
// };


const statusReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_statuses':
      return action.payload;
    default:
      return state;
  }
};
const user = {
  statuses: [],
}

const status1 = {
  id: "1",
  alias: "test1",
  text: "tweet text example 1",
  mention: "",
  attachment: Images.image5,
  hashtag:[],
  url:"",
  time: "2019.10.7 18:20",
}

const fetchStatuses = dispatch => async () => {
  const response = JSON.parse(await AsyncStorage.getItem("currentUser"));
  const res = await AsyncStorage.getItem(response.alias);
  dispatch({ type: 'fetch_statuses', payload: res.statuses });
};
const createStatus = dispatch => async ({ content }) => {
  status1.text = content;
  user.statuses = res.statuses;
  user.statuses.push(status1);

  navigate('StatusList');
};



export const { Provider, Context } = createDataContext(
  statusReducer,
  { fetchStatuses, createStatus },
  {}
);

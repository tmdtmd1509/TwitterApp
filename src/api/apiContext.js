export const GETSTORY = 'GETSTORY';
export const GETFEED = 'GETFEED';
export const GETHASHTAGS = 'GETHASHTAGS';
export const GETFOLLOWERS = 'GETFOLLOWERS';
export const GETFOLLOWEES = 'GETFOLLOWEES';
export const POSTSTATUS = 'POSTSTATUS';
export const PUTFOLLOWER = 'PUTFOLLOWER';
export const PUTFOLLOWEE = 'PUTFOLLOWEE';
export const DELETEFOLLOWEE = 'DELETEFOLLOWEE';
export const EDITPROFILE = 'EDITPROFILE';


const url = "https://jnz7tnqn30.execute-api.us-west-2.amazonaws.com/11-5-2019";


const getStory = dispatch => ({ user }) => {
  fetch(url+'/story', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
  .then(data => dispatch({ type: GETSTORY, payload: data }))
  //.then(data => result = data)
  .catch(err => console.error(err))
};

export const getFeed = () => async ()=> {
  try {
    const datas = await fetch(url+'/feed', {
      headers: {
        'Accept': 'application/json'
      }
    })
    //.then(res => res.json())
    //.then(data => dispatch({ type: GETFEED, payload: data }))
    //.then(data => console.log(data))
    //.catch(err => console.error(err))
    //console.log("copied?");
    const data = await datas.json();
    console.log(JSON.stringify(data));

    return { type: GETFEED, payload: JSON.stringify(data) };
  } catch(err) {
    console.error(err)
  };
};

// export const getFeed = dispatch => {
//   console.log("this is getFeed");
//   const data = fetch(url+'/status', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }).then(res => res.json())
//   .then(data => dispatch(setFeed(data)))
//   .catch(err => console.error(err))
//   console.log('getFeed api got called');
//   //return { type: 'getFeed', payload: JSON.stringify(data) }
// };

const getHashtags = (dispatch) => {
  fetch(url+'/hashtags', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
  .then(data => dispatch({ type: GETHASHTAGS, payload: data }))
  .catch(err => console.error(err))
};

const getFollowers = (dispatch) => {
  fetch(url+'/followers', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
  .then(data => dispatch({ type: GETFOLLOWERS, payload: data }))
  .catch(err => console.error(err))
};

const getFollowees = (dispatch) => {
  fetch(url+'/followees', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
  .then(data => dispatch({ type: GETFOLLOWEES, payload: data }))
  .catch(err => console.error(err))
};

const postStatus = (dispatch) => {
  fetch(url+'/status', {
    headers: {
      'Accept': 'application/json'
    },
    method: 'POST'
  }).then(res => res.json())
  .then(data => dispatch({ type: POSTSTATUS }))
  .catch(err => console.error(err))
};

const putFollower = (dispatch) => {
  fetch(url+'/followers', {
    headers: {
      'Accept': 'application/json'
    },
    method: 'PUT'
  }).then(res => res.json())
  .then(data => dispatch({ type: PUTFOLLOWER }))
  .catch(err => console.error(err))
};

const putFollowee = (dispatch) => {
  fetch(url+'/followees', {
    headers: {
      'Accept': 'application/json'
    },
    method: 'PUT'
  }).then(res => res.json())
  .then(data => dispatch({ type: PUTFOLLOWEE }))
  .catch(err => console.error(err))
};

const deleteFollowee = (dispatch) => {
  fetch(url+'/followees', {
    headers: {
      'Accept': 'application/json'
    },
    method: 'DELETE'
  }).then(res => res.json())
  .then(data => dispatch({ type: DELETEFOLLOWEE }))
  .catch(err => console.error(err))
};

const editProfile = (dispatch) => {
  fetch(url+'/profile', {
    headers: {
      'Accept': 'application/json'
    },
    method: 'PUT'
  }).then(res => res.json())
  .then(data => dispatch({ type: EDITPROFILE }))
  .catch(err => console.error(err))
};


// export const { Provider, Context } = createDataContext(
//   apiReducer,
//   { getStory, getFeed, getStatus, getHashtags, getFollowers, getFollowees, postStatus, putFollower, putFollowee, deleteFollowee, editProfile },
//   { data: {}, errorMessage: '' }
// );
export default {getStory, getFeed, getHashtags, getFollowers, getFollowees, postStatus, putFollower, putFollowee, deleteFollowee, editProfile}
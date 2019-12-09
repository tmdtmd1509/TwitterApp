import {
    GETSTORY,
    GETFEED,
    GETHASHTAGS,
    GETFOLLOWERS,
    GETFOLLOWEES,
    POSTSTATUS,
    PUTFOLLOWER,
    PUTFOLLOWEE,
    DELETEFOLLOWEE,
    EDITPROFILE
} from "./apiContext"

export const getFeed = (feed) => ({
    type: GETFEED,
    payload: { feed }
});


import { combineReducers } from 'redux';


// example reducer
function UserReducer(state=null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
    }

    return state;
}


export default combineReducers({
    users: UserReducer
});

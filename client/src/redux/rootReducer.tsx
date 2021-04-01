import { combineReducers } from 'redux';
import {userReducer} from './festive/festiveReducer';
import {readReducer} from './flights/flightReducers';
import  hotelReducer from './hotels/hotelReducer';
import trainReducer from './trains/trainReducer';
import {user1Reducer} from './user/userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    readData:readReducer,
    hotelData:hotelReducer,
    trainData:trainReducer,
    //user1:user1Reducer
})

export default rootReducer;
import { Buy_Hotel } from './hotelType'

const initialState = {
    numofHotel: 10
}

const hotelReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case Buy_Hotel: return {
            ...state,
            numofHotel: state.numofHotel - 1
        }
        default: return state

    }
}

export default hotelReducer
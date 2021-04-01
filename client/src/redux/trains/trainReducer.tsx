import { Buy_Train } from './trainType'

const initialState = {
    numofTrain: 20
}

const trainReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case Buy_Train: return {
            ...state,
            numofTrain: state.numofTrain - 1
        }
        default: return state

    }
}

export default trainReducer
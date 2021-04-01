import axios from 'axios';

import {Fetch_Data_Request, Fetch_Data_Success,
    Fetch_Data_Failure, explore_Data} from './flightTypes';

export const exploreData = (number = 1) => {
    return {
        type: explore_Data,
        payload: number
    }
}


export const fetchDataRequest = () => {
    return {
        type: Fetch_Data_Request
    };
};

export const fetchDataSuccess = (readData:any) => {
    return {
        type: Fetch_Data_Success,
        payload: readData
    };
};

export const fetchDataFailure = (error:any) => {
    return {
        type: Fetch_Data_Failure,
        payload: error
    };
};

export const fetchData = () => {
    return (dispatch:any) => {
        dispatch(fetchDataRequest)
        axios.get("./FlightContent.json")
            .then((response) => {
                const readData = response.data;
                dispatch(fetchDataSuccess(readData))
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchDataFailure(errorMsg))
            });
    };
};


import {Fetch_Data_Request, Fetch_Data_Success,
    Fetch_Data_Failure} from './flightTypes';

const initialState = {
  loading: false,
  readData: [],
  error: "",
};

export const readReducer = (state = initialState, action:any) => {
  switch (action.type) {
      case Fetch_Data_Request:
          return {
              ...state,
              loading: true,
          };

      case Fetch_Data_Success:
          return {
              loading: false,
              readData: action.payload,
              error: "",
          };

      case Fetch_Data_Failure:
          return {
              loading: false,
              readData: [],
              error: action.payload,
          };

      default:
          return state;
  }
};

import { GET_DATA_ERROR, GET_DATA_RECEIVED, GET_DATA_START } from "../../constants/getDataConstants";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
const getDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case GET_DATA_RECEIVED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default getDataReducer;

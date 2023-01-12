import { POST_DATA_ERROR, POST_DATA_RECEIVED, POST_DATA_START } from "../../constants/postDataConstants";

const initialState = {
  response: null,
  loading: false,
  error: null,
};
const postDataReducer = (state = initialState, action: any) => {
  
  switch (action.type) {
    case POST_DATA_START:
      return {
        ...state,
        response: null,
        loading: true,
        error: null,
      };
    case POST_DATA_RECEIVED:
      return {
        ...state,
        response: action.payload,
        loading: false,
        error: null,
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        response: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default postDataReducer;

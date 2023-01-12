import { DELETE_DATA_ERROR, DELETE_DATA_RECEIVED, DELETE_DATA_START } from "../../constants/deleteDataConstant";

const initialState = {
  response: false,
  loading: false,
  error: null,
};
const deleteDataReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case DELETE_DATA_START:
      return {
        ...state,
        response: false,
        loading: true,
        error: null,
      };
    case DELETE_DATA_RECEIVED:
      return {
        ...state,
        response: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_DATA_ERROR:
      return {
        ...state,
        response: false,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default deleteDataReducer;

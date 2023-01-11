import { GET_DATA_ERROR, GET_DATA_RECEIVED, GET_DATA_START } from "../constants/getDataConstants";

export const getAllData = () => async (dispatch:any) => {
    dispatch({ type: GET_DATA_START });
    try {
      const res = await fetch('http://localhost:5000/fruits')
      const data:any = await res.json();
      dispatch({ type: GET_DATA_RECEIVED, payload: data });
    } catch (error:any) {
      dispatch({ type: GET_DATA_ERROR, payload: error.message });
    }
  };
import { DELETE_DATA_ERROR, DELETE_DATA_RECEIVED, DELETE_DATA_START } from "../constants/deleteDataConstant";
import { GET_DATA_ERROR, GET_DATA_RECEIVED, GET_DATA_START } from "../constants/getDataConstants";
import { POST_DATA_ERROR, POST_DATA_RECEIVED, POST_DATA_START } from "../constants/postDataConstants";

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


export const postData = (body:any) => async (dispatch:any) => {
    dispatch({ type: POST_DATA_START });
    try {
      const res = await fetch('http://localhost:5000/fruits',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      const data:any = await res.json();
      dispatch({ type: POST_DATA_RECEIVED, payload: data });
    } catch (error:any) {
      dispatch({ type: POST_DATA_ERROR, payload: error.message });
    }
  };

export const deleteData = (id:string) => async (dispatch:any) => {
    dispatch({ type: DELETE_DATA_START });
    try {
      const res = await fetch(`http://localhost:5000/fruit/del/${id}`,{
        method: 'DELETE',
        
      })
      const data:any = await res.json();
      dispatch({ type: DELETE_DATA_RECEIVED, payload: data.acknowledged });
    } catch (error:any) {
      dispatch({ type: DELETE_DATA_ERROR, payload: error.message });
    }
  };
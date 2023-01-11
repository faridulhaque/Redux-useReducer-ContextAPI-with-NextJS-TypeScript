import React, { useReducer } from 'react';
import GetData from '../components/arrayComponents/GetData';

const useGlobalData = () => {

    type is = {
        comp: any;
        method: string
    }

    const initialState:is = {
        comp: <GetData></GetData>,
        method: "GET"
    }



    const handleSwitch = (state:any, action:any):any => {
        
        return {
            ...state,
            comp: action.payload || <GetData></GetData>,
            method: action.type || "GET"
            
        }
    }


    const [state, dispatch] = useReducer(handleSwitch, initialState)



    return {
        dispatch,
        state
    }
};

export default useGlobalData;
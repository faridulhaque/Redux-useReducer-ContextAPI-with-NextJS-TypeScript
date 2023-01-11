import { stat } from "fs";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../pages/_app";
import { getAllData } from "../../redux/actions/allDataActions";
import DataTable from "../tables/DataTable";

const GetData = () => {
  const { data, loading, error } = useSelector((state: any) => state.data);
 

  return (
    <div>
      <h1 className="heading">Get data with redux {data?.length}</h1>
      <div className="table-wrapper">
        <DataTable ></DataTable>
      </div>
    </div>
  );
};

export default GetData;

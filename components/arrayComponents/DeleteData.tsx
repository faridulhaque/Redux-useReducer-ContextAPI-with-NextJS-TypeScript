import React from "react";
import DataTable from "../tables/DataTable";

const DeleteData = () => {
  return (
    <div>
      <h1 className="heading">Delete data with redux</h1>
      <div className="table-wrapper">
        <DataTable></DataTable>
      </div>
    </div>
  );
};

export default DeleteData;

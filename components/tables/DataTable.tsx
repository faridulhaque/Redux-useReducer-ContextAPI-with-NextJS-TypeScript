import { stat } from "fs";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../pages/_app";
import { deleteData, getAllData } from "../../redux/actions/allDataActions";

const DataTable = () => {
  const { data, loading, error } = useSelector((state: any) => state?.data);
  const deleteItem = useSelector((state: any) => state?.deleteItem);

  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const dispatch: any = useDispatch();

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    setHasMounted(true);
    dispatch(getAllData());
  }, [dispatch]);

  useEffect(() => {
    if (deleteItem.response) {
      dispatch(getAllData());
    }
  }, [deleteItem, dispatch]);

  if (!hasMounted) {
    return null;
  }

  const handleDelete = (id: string) => {
    dispatch(deleteData(id));
  };

  return (
    <table>
      {loading || (deleteItem.loading && <h1 className="heading">Loading</h1>)}
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        {state.method === "UPDATE" && <th>Edit</th>}
        {state.method === "DELETE" && <th>DELETE</th>}
      </tr>
      {data?.map((d: any) => (
        <tr key={d?._id}>
          <td>{d?.name}</td>
          <td>{d?.price}</td>
          <td>{d?.avlQuantity}</td>
          {state.method === "UPDATE" && (
            <td>
              <button>Update</button>
            </td>
          )}
          {state.method === "DELETE" && (
            <td>
              <button onClick={() => handleDelete(d._id)}>Delete</button>
            </td>
          )}
        </tr>
      ))}
    </table>
  );
};

export default DataTable;

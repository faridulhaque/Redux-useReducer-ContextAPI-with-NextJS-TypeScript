import DeleteData from "../components/arrayComponents/DeleteData";
import GetData from "../components/arrayComponents/GetData";
import PostData from "../components/arrayComponents/PostData";
import UpdateData from "../components/arrayComponents/UpdateData";

export const myArrays: any[] = [
  {
    method: "GET",
    comp: <GetData></GetData>
  },
  {
    method: "POST",
    comp: <PostData></PostData>

  },
  {
    method: "UPDATE",
    comp: <UpdateData></UpdateData>

  },
  {
    method: "DELETE",
    comp: <DeleteData></DeleteData>

  },
];

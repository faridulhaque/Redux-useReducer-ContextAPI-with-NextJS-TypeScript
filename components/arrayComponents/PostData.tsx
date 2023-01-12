import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/actions/allDataActions";

const PostData = () => {
  const dispatch: any = useDispatch();
  const postResponse = useSelector((state: any) => state?.postResponse);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const price = e.target.price.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const avlQuantity = e.target.avlQuantity.value;
    const body = {
      price,
      name,
      email,
      avlQuantity,
    };
    dispatch(postData(body));
    e.target.reset();
  };

  useEffect(() => {
    if(postResponse?.response?.acknowledged){
      return alert("Your data is added successfully")
    }
  },[postResponse]);

  return (
    <div>
      {
        postResponse.loading && <h1 className="heading">Posting Data...</h1>
      }
      <h1 className="heading">Post data with redux</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="">Quantity</label>
            <br />
            <input type="number" name="avlQuantity" />
          </div>
          <div>
            <label htmlFor="">price</label>
            <br />
            <input type="number" name="price" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostData;

import React from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/actions/allDataActions";

const PostData = () => {
  const dispatch: any = useDispatch();
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

  return (
    <div>
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

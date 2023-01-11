import React, { useContext } from "react";

import { myArrays } from "../Arrays/myArrays";
import { GlobalContext } from "../pages/_app";
import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);


  //   console.log(state);

  return (
    <div className={navStyles.nav}>
      <ul>
        {myArrays.map((a: any) => (
          <li
            className={state.method === a.method ? "text-green" : ""}
            onClick={() => dispatch({ type: a.method, payload: a.comp })}
            key={a.method}
          >
            {a.method}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

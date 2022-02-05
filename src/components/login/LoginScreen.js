import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Abelaxo crack",
      },
    });

    navigate("/marvel", {
      replace: true,
    });
  };
  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

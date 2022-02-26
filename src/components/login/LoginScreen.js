import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/marvel";
    dispatch({
      type: types.login,
      payload: {
        name: "Usuario01",
      },
    });

    navigate(lastPath, {
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

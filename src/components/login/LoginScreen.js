import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dc", {
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

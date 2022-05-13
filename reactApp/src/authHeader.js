import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <p>
      Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p>
      Please log in client!{" "}
      <button onClick={() => navigate('/movies/login')}>Login</button>
    </p>
  );
};

export default BaseAuthHeader;
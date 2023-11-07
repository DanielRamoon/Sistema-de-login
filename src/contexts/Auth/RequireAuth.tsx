import { useContext } from "react";
import Login from "../../pages/login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (auth && auth.user) {
    return children;
  }

  return <Login />;
};

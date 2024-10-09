import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserDataContext";

export const Home = () => {
  const { user } = useContext(UserContext);
  const logout = () => {};

  return <>{user ? <h1>{user.email}</h1> : <Link to="/session">INICIAR SESION</Link>}</>;
};

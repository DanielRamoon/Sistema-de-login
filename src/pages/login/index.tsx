import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth?.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Deu errado");
      }
    }
  };

  return (
    <div>
      <h2>Fazer Login</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu Email..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha..."
      />
      <button onClick={handleLogin}>Logar</button>
    </div>
  );
}

export default Login;

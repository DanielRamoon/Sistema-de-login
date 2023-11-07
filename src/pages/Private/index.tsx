import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function Private() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Página Fechada</h2>
      Olá {auth?.user?.name}, Tudo bem ?
    </div>
  );
}

export default Private;

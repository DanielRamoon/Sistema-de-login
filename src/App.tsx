import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Private from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (auth) {
      await auth.signout();
      navigate("/");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Tela de Login</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
          {auth && auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

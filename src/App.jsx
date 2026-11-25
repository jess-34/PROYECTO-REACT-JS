import { Routes, Route, Navigate } from "react-router-dom";
import { obtenerSesion } from "./auth";
import Home from "./pages/home";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Error from "./pages/error";
import Dashboard from "./pages/dashboard";
import Personajes from "./pages/personajes";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route
        path="/dashboard"
        element={
          obtenerSesion() ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/personajes"
        element={
          obtenerSesion() ? (
            <Personajes />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
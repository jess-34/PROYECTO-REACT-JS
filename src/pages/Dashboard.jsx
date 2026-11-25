import { Link, useNavigate } from "react-router-dom";
import { obtenerSesion, cerrarSesion } from "../auth";

function Dashboard() {
  const navigate = useNavigate();
  const usuario = obtenerSesion();

  const salir = () => {
    cerrarSesion();
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Hola, {usuario?.nombre} 🎉</h1>
      <p className="subtitle">Ya iniciaste sesión con {usuario?.email}</p>

      <div className="home-links" style={{ marginBottom: "1rem" }}>
        <Link to="/personajes">Ver personajes</Link>
        <Link to="/">Inicio</Link>
      </div>

      <button className="btn" onClick={salir}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
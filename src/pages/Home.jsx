import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";
import { useContext } from "react";
import Swal from "sweetalert2";
const Home = () => {
  const {usuario,cerrar_sesion} = useContext(Contexto)
}

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido 👋</h1>
      <div className="home-links">
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/registro">Registrarse</Link>
      </div>
    </div>
  );
}

export default Home;
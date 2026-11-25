import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iniciarSesion } from "../auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = iniciarSesion(email, password);

    if (!resultado.ok) {
      setError(resultado.error);
      return;
    }

    navigate("/personajes");
  };

  return (
    <div className="auth-card">
      <h1>Iniciar sesión</h1>
      <p className="subtitle">Qué bueno verte de nuevo</p>

      {error && <p className="auth-error" role="alert">{error}</p>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>

      <p className="auth-footer">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;
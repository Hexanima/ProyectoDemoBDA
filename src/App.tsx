import "./App.css";
import { ACCESS_TOKEN } from "./environment.ts";

function App() {
  const redirectUri = new URL(window.location.href).searchParams.get(
    "redirect_uri"
  );

  function handleLogin() {
    if (redirectUri) {
      const redirection = new URL(redirectUri);
      redirection.searchParams.append("access_token", ACCESS_TOKEN);
      window.location.replace(redirection);
    }
  }
  return (
    <div className="card">
      <div className="item">
        <p>URI de Redireccion:</p>
        <p>{redirectUri}</p>
      </div>
      <div className="item">
        <p>Token de Acceso:</p>
        <p>{ACCESS_TOKEN}</p>
      </div>
      <button onClick={handleLogin}>Iniciar Sesion</button>
    </div>
  );
}

export default App;

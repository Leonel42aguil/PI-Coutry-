import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <h1>Inicia pagina web</h1>
      <Link to="/buscador">
        <button>Inicio</button>
      </Link>
    </>
  );
}

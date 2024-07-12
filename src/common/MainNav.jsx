import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Conócenos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/proveedores">
                Proveedores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/empleados">
                Empleados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pedidos">
                Pedidos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/paises">
                Países
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">
                <i className="bi bi-basket"></i>
                <span> Carrito</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/seleccionados">
                <i className="bi bi-person-check"></i>
                <span> Seleccionados</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/empleados">
                <i className="bi bi-person"></i>
                <span> Iniciar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;

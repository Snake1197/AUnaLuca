import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Proveedores() {
  const [listaProveedores, setListaProveedores] = useState([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "proveedores.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaProveedores(data);
      });
  };

  const dibujarTabla = () => {
    return (
      <table className="table" id="proveedores">
        <thead>
          <tr>
            <th>Código</th>
            <th>Empresa</th>
            <th>Contacto</th>
            <th>Ciudad</th>
            <th>País</th>
            <th className="text-center">Ver detalle</th>
          </tr>
        </thead>
        <tbody>
          {listaProveedores.map((item) => (
            <tr key={item.idproveedor}>
              <td>{item.idproveedor}</td>
              <td>{item.nombreempresa}</td>
              <td>{item.nombrecontacto}</td>
              <td>{item.ciudad}</td>
              <td>{item.pais}</td>
              <td className="text-center">
                <i
                  className="bi bi-eye"
                  data-bs-toggle="modal"
                  data-bs-target="#vistaRapidaModal"
                  onClick={() => setProveedorSeleccionado(item)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const dibujarVistaRapidaModal = () => {
    return (
      <div
        className="modal fade"
        id="vistaRapidaModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="exampleModalLabel">
                {proveedorSeleccionado.idproveedor} -{" "}
                {proveedorSeleccionado.nombreempresa}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className=" row">
                <div className="col">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Contacto</th>
                        <td>{proveedorSeleccionado.nombrecontacto}</td>
                      </tr>
                      <tr>
                        <th>Cargo</th>
                        <td>{proveedorSeleccionado.cargocontacto}</td>
                      </tr>
                      <tr>
                        <th>Dirección</th>
                        <td>{proveedorSeleccionado.direccion}</td>
                      </tr>
                      <tr>
                        <th>Ciudad</th>
                        <td>{proveedorSeleccionado.ciudad}</td>
                      </tr>
                      <tr>
                        <th>Región</th>
                        <td>
                          {proveedorSeleccionado.region == null
                            ? "-"
                            : proveedorSeleccionado.region}
                        </td>
                      </tr>
                      <tr>
                        <th>Código postal</th>
                        <td>{proveedorSeleccionado.codigopostal}</td>
                      </tr>
                      <tr>
                        <th>País</th>
                        <td>{proveedorSeleccionado.pais}</td>
                      </tr>
                      <tr>
                        <th>Teléfono</th>
                        <td>{proveedorSeleccionado.telefono}</td>
                      </tr>
                      <tr>
                        <th>Fax</th>
                        <td>
                          {proveedorSeleccionado.fax == null
                            ? "-"
                            : proveedorSeleccionado.fax}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="proveedores" className="p-4">
      <div className="container">
        <h2>Proveedores</h2>
        {dibujarTabla()}
        {dibujarVistaRapidaModal()}
      </div>
    </section>
  );
}

export default Proveedores;

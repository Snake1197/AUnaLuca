import { useState } from "react";
import { useEffect } from "react";
import { ApiWebURL } from "../utils";

function Seleccionados() {
  const [datosCarrito, setListaItems] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const datosCarrito = JSON.parse(sessionStorage.getItem("seleccionados"));
    setListaItems(datosCarrito);
  };
  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Foto</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Cargo</th>
            <th className="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {datosCarrito.map((item, index) => (
            <tr key={index}>
              <td>{item.idempleado}</td>
              <td>
                <img
                  style={{ width: 25 }}
                  src={ApiWebURL + "fotos/" + item.foto}
                  alt=""
                />
              </td>
              <td>{item.nombres}</td>
              <td>{item.apellidos}</td>
              <td>{item.cargo}</td>
              <td className="text-center">
                <i
                  className="bi bi-x-lg"
                  title="Eliminar"
                  onClick={() => eliminarItem(item)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const eliminarItem = (item) => {
    let seleccionadoMenos = datosCarrito.filter(
      (itemCart) => itemCart.idempleado !== item.idempleado
    );
    setListaItems(seleccionadoMenos);
    sessionStorage.setItem("seleccionados", JSON.stringify(seleccionadoMenos));
  };

  const vaciarCarrito = () => {
    setListaItems([]);
    sessionStorage.removeItem("seleccionados");
  };

  return (
    <section className="p-4">
      <div className="container">
        <h2 className="mb-4">Lista de seleccionados</h2>
        <div className="d-flex flex-column">
          {datosCarrito !== null ? (
            dibujarTabla()
          ) : (
            <span className="alert alert-warning" role="alert">
              Actualmente no cuenta con seleccionados
            </span>
          )}
          <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
            Quitar a todos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Seleccionados;

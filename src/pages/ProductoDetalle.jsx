import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiWebURL } from "../utils";
import nofoto from "./../assets/images/nofoto.jpg";

function ProductoDetalle() {
  const params = useParams();

  const [productoSeleccionado, setProductoSeleccionado] = useState([]);

  const leerServicio = useCallback(() => {
    const rutaServicio =
      ApiWebURL + "productos.php?idproducto=" + params.idproducto;
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setProductoSeleccionado(data[0]);
      });
  }, [params.idproducto]);

  useEffect(() => {
    leerServicio();
  }, [leerServicio]);
  return (
    <section className="padded">
      <div className="container">
        <h3>{productoSeleccionado.nombre}</h3>
        <div className=" row">
          <div className="col">
            <img
              src={
                productoSeleccionado.imagengrande === null
                  ? nofoto
                  : ApiWebURL + productoSeleccionado.imagengrande
              }
              className="img-fluid"
              alt={productoSeleccionado.nombres}
            />
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th>Detalle</th>
                  <td>{productoSeleccionado.detalle}</td>
                </tr>
                <tr>
                  <th>Proveedor</th>
                  <td>{productoSeleccionado.proveedor}</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>{productoSeleccionado.unidadesenexistencia}</td>
                </tr>
                <tr>
                  <th>Precio</th>
                  <td>
                    S/{" "}
                    {productoSeleccionado.preciorebajado === "0"
                      ? parseFloat(productoSeleccionado.precio).toFixed(2)
                      : parseFloat(productoSeleccionado.preciorebajado).toFixed(
                          2
                        )}
                    <span className="precio-anterior">
                      {productoSeleccionado.preciorebajado === "0"
                        ? ""
                        : "S/ " +
                          parseFloat(productoSeleccionado.precio).toFixed(2)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>País</th>
                  <td>{productoSeleccionado.pais}</td>
                </tr>
              </tbody>
            </table>
            <h5>Descripcion</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: productoSeleccionado.descripcion,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductoDetalle;

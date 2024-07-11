/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";
import "../components/Productos.css";
import nofoto from "./../assets/images/nofoto.jpg";
import { Link } from "react-router-dom";

function Ofertas() {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "productos.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        const productosEnOferta = data.filter(
          (item) => item.preciorebajado !== "0"
        );
        setListaProductos(productosEnOferta.slice(0, 4));
      });
  };

  const dibujarCuadricula = () => {
    return (
      <section className="container">
        <h2 className="mb-5">Ofertas</h2>
        <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4 justify-content-center">
          {listaProductos.map((item, index) => (
            <div className="col" key={index}>
              <div className="card text-center h-100">
                <Link to={"/productodetalle/" + item.idproducto}>
                  <img
                    src={
                      item.imagenchica === null
                        ? nofoto
                        : ApiWebURL + item.imagenchica
                    }
                    className="card-img-top"
                    alt={item.nombre}
                  />
                </Link>
                {item.preciorebajado !== "0" ? (
                  <div className="porcentaje-descuento">
                    {((1 - item.preciorebajado / item.precio) * 100).toFixed(
                      0
                    ) + "%"}
                  </div>
                ) : (
                  ""
                )}

                <div className="card-body">
                  <p className="card-title">{item.nombre} </p>
                  <p className="card-text">
                    S/{" "}
                    {item.preciorebajado === "0"
                      ? parseFloat(item.precio).toFixed(2)
                      : parseFloat(item.preciorebajado).toFixed(2)}
                    <span className="precio-anterior">
                      {item.preciorebajado === "0"
                        ? ""
                        : "S/ " + parseFloat(item.precio).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return <>{dibujarCuadricula()}</>;
}

export default Ofertas;

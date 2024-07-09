import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiWebURL } from "../utils";
import nofoto from "./../assets/images/nofoto.jpg";
import "./PedidoDetalle.css";

function PedidoDetalle() {
  const params = useParams();

  const [detallePedido, setDetallePedido] = useState([]);

  const leerServicio = () => {
    const rutaServicio =
      ApiWebURL + "pedidosdetalle.php?idpedido=" + params.idpedido;
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setDetallePedido(data);
      });
  };
  useEffect(() => {
    leerServicio();
  });
  return (
    <section className="p-4">
      <div className="container">
        <h3 className="mb-4">Pedido - ID: {params.idpedido}</h3>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {detallePedido.map((item, index) => (
            <div
              className="card d-flex justify-content-center"
              style={{ maxWidth: 350, minHeight: 150 }}
              key={index}
            >
              <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                  <img
                    src={
                      item.imagenchica === null
                        ? nofoto
                        : ApiWebURL + item.imagenchica
                    }
                    className="card-img"
                    alt={item.nombre}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex justify-content-between flex-column">
                    <h6 className="card-title">
                      <b>{item.nombre}</b>
                    </h6>
                    <div>
                      <p className="card-text">
                        <b>Cantidad: </b>
                        {item.cantidad}
                      </p>
                      <p className="card-text">
                        <b>Monto: </b>
                        S/. {parseFloat(item.precio).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PedidoDetalle;

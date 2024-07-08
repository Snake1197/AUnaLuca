import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";
import "./Pedidos.css";

function Pedidos() {
  const [listaProveedores, setListaProveedores] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "pedidos.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaProveedores(data);
      });
  };

  function formatearFecha(fechaString) {
    let fecha = fechaString.split(" ")[0];
    let [aaaa, mm, dd] = fecha.split("-");
    return `${dd}/${mm}/${aaaa}`;
  }
  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fecha pedido</th>
            <th>Usuario</th>
            <th>Nombres</th>
            <th className="text-end">Total (S/.)</th>
          </tr>
        </thead>
        <tbody>
          {listaProveedores.map((item) => (
            <tr key={item.idpedido} onClick={() => redirigir(item.idpedido)}>
              <td>{item.idpedido}</td>
              <td>{formatearFecha(item.fechapedido)}</td>
              <td>{item.usuario}</td>
              <td>{item.nombres}</td>
              <td className="text-end">{parseFloat(item.total).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const redirigir = (id) => {
    window.location.href = "/pedidosdetalle/" + id;
  };
  return (
    <section id="pedidos" className="p-4">
      <div className="container">
        <h2>Pedidos</h2>
        {dibujarTabla()}
      </div>
    </section>
  );
}

export default Pedidos;

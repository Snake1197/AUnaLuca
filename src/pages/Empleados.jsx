import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Empleados() {
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);

  useEffect(() => {
    leerServicio();
    cargarSeleccionadosDesdeStorage();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "empleados.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaEmpleados(data);
      });
  };
  const cargarSeleccionadosDesdeStorage = () => {
    const seleccionadosGuardados =
      JSON.parse(sessionStorage.getItem("seleccionados")) || [];
    setSeleccionados(seleccionadosGuardados);
  };

  const agregarSeleccionado = (item) => {
    let nuevosSeleccionados = [...seleccionados];

    const seleccionadoExistente = nuevosSeleccionados.find(
      (seleccionadoItem) => seleccionadoItem.idempleado === item.idempleado
    );
    if (seleccionadoExistente) {
      nuevosSeleccionados = nuevosSeleccionados.filter(
        (seleccionadoItem) => seleccionadoItem.idempleado !== item.idempleado
      );
    } else {
      nuevosSeleccionados.push(item);
    }
    setSeleccionados(nuevosSeleccionados);
    sessionStorage.setItem(
      "seleccionados",
      JSON.stringify(nuevosSeleccionados)
    );
  };

  const estaSeleccionado = (idempleado) => {
    return seleccionados.some(
      (seleccionadoItem) => seleccionadoItem.idempleado === idempleado
    );
  };

  const dibujarCuadricula = () => {
    return (
      <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4">
        {listaEmpleados.map((item) => (
          <div className="col" key={item.idempleado}>
            <div className="card">
              <img
                src={ApiWebURL + "fotos/" + item.foto}
                className="card-img-top"
                alt={item.nombres}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.nombres} {item.apellidos}
                </h5>
                <p className="card-text">{item.cargo}</p>
              </div>
              <span
                className="text-center mb-3"
                onClick={() => agregarSeleccionado(item)}
              >
                {estaSeleccionado(item.idempleado) ? (
                  <b className="text-danger">Quitar seleccionado</b>
                ) : (
                  <b className="text-primary">Agregar seleccionado</b>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="empleados" className="p-5">
      <div className="container">
        <h2>Empleados</h2>
        {dibujarCuadricula()}
      </div>
    </section>
  );
}

export default Empleados;

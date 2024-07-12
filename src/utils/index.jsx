export const ApiWebURL = "https://servicios.campus.pe/";

export const agregarCarrito = (item, cantidad) => {
  item.cantidad = Number(cantidad);
  item.precio = item.preciorebajado === "0" ? item.precio : item.preciorebajado;
  console.log(item);
  if (!sessionStorage.getItem("carritocompras")) {
    let carrito = [];
    carrito.push(item);
    sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
  } else {
    let carrito = JSON.parse(sessionStorage.getItem("carritocompras"));
    let productoExistente = carrito.find(
      (carritoItem) => carritoItem.idproducto === item.idproducto
    );

    if (productoExistente) {
      productoExistente.cantidad += Number(cantidad);
    } else {
      carrito.push(item);
    }
    sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
  }
};

export const agregarSeleccionado = (item) => {
  if (!sessionStorage.getItem("seleccionados")) {
    let seleccionados = [];
    seleccionados.push(item);
    sessionStorage.setItem("seleccionados", JSON.stringify(seleccionados));
  } else {
    let seleccionados = JSON.parse(sessionStorage.getItem("seleccionados"));
    let seleccionadoExistente = seleccionados.find(
      (seleccionadoItem) => seleccionadoItem.idproveedor === item.idproveedor
    );

    if (seleccionadoExistente) {
      console.log("Ya existe");
    } else {
      seleccionadoExistente.push(item);
    }
    sessionStorage.setItem("seleccionados", JSON.stringify(seleccionados));
  }
};

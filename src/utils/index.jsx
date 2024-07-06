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

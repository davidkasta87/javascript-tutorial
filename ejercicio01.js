const porecentaje = 10; //porcentaje de descuento

const factura = {
  numeroFactura: "001-001-893743",
  nombreCliente: "David Castañeda Ortiz",
  direccionCliente: "carrera 4b sur #33-41",
  fecha: "2024-06-01",
  detalle: [
    { cantidad: 5, articulo: "impresora", precioUnitario: 120 },
    { cantidad: 2, articulo: "monitor", precioUnitario: 130 },
    { cantidad: 7, articulo: "teclado", precioUnitario: 25 },
  ],
};
/*
función que obtiene el valor del descuento
@param {number} precio El precio total de la factura
@param {number} porcentaje El porcentaje de descuento aplicable
@returns
*/

function obtenerDescuento(precio, porcentaje) {
  let descuento = (precio * porcentaje) / 100;
  return descuento;
}

function imprimirFactura() {
  console.log("numero" + factura.numeroFactura);
  console.log("cliente" + factura.nombreCliente);
  console.log("direccion" + factura.direccionCliente);
  console.log("fecha" + factura.fecha);

  let items = factura.detalle;
  for (let i = 0; i < items.length; i++) {
    if (items[i].cantidad >= 5) {
      items[i].descuento = obtenerDescuento(items[i].precioUnitario, 10);
    } else items[i].descuento = 0;
    items[i].total =
      items[i].cantidad * (items[i].precioUnitario - items[i].descuento);

    /*console.log(
      items[i].cantidad +
        " | " +
        items[i].articulo +
        " | " +
        items[i].precioUnitario +
        " | " +
        items[i].descuento +
        " | " +
        items[i].total
    );*/
  }
  console.table(items);
}
imprimirFactura();

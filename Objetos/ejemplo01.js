const automovil = {
  marca: "Ferrari",
  color: "Rojo",
  placa: "ABC123",
  modelo: "GT4",
  kilometraje: 1500,
  esNuevo: false,
  radio: {
    marca: "Sony",
    soportaAndroidAuto: true,
    soportaAppleCar: true,
    tamañoPantalla: "7`",
  },
  adicionales: ["Cámara", "Kit herramientas", "Sensor de parqueo"],
};

automovil.kilometraje = 1600;
//console.log(automovil);
automovil.cilindrada = "2000cc";
//delete automovil.cilindrada; -> elimina la propiedad cilindrada en tiempo de ejecución

//const auto2 = { ...automovil }; -> copia superficial (shallow copy) del objeto automovil
const auto2 = Object.assign({}, automovil); // otra forma de hacer una copia superficial
auto2.marca = "Mazda";
auto2.kilometraje = 2289;

console.log("Automóvil 1");
console.log("--------------------");
console.log("Marca:", automovil.marca);
console.log("Color:", automovil.color);
console.log("Kilometraje:", automovil.kilometraje);
console.log("--------------------");
console.log("Radio marca:", automovil.radio.marca);
console.log("Adicionales:", automovil.adicionales[0]);
console.log("Cilindrada:", automovil.cilindrada);
console.log("--------------------");
console.log("Automóvil 2");
console.log("--------------------");
console.log("Marca:", auto2.marca);
console.log("Kilometraje:", auto2.kilometraje);
console.log("--------------------");
console.log("Radio marca:", auto2.radio.marca);
console.log("Adicionales:", auto2.adicionales[0]);
console.log("Cilindrada:", auto2.cilindrada);

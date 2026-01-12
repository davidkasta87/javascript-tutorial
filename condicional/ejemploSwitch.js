const activo = 1;
const bloqueado = 2;
const eliminado = 3;

let estado = eliminado;
switch (estado) {
  case activo:
    console.log("El usuario está activo");
    break;
  case bloqueado:
    console.log("El usuario está bloqueado");
    break;
  case eliminado:
    console.log("El usuario está eliminado");
    break;
  default:
    console.log("Estado no reconocido");
    break;
}

/**
 * Clase Persona
 * Representa una persona con propiedades básicas
 *
 * NOTA: Esta clase no utiliza constructor
 * Las propiedades se definen como atributos de clase con valores por defecto
 * y se asignan directamente en las instancias después de su creación
 */
class Persona {
  /**
   * Atributo nombre
   * @type {string}
   */
  nombre = "sin nombre";

  /**
   * Atributo paisNacimiento
   * @type {string}
   */
  paisNacimiento = "sin país";

  /**
   * Método saludar
   * Muestra un saludo con el nombre y país de nacimiento
   */
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} y soy del país ${this.paisNacimiento}`,
    );
  }
}

/* ==========================================
   EJEMPLOS SIN CONSTRUCTOR
   Creación de instancias con asignación
   de propiedades directas
   =========================================== */

// Instancia 1: Pablo de Colombia
let objPersona = new Persona();
objPersona.nombre = "Pablo";
objPersona.paisNacimiento = "Colombia";
objPersona.saludar();

// Instancia 2: Leonel de Argentina
objPersona.nombre = "Leonel";
objPersona.paisNacimiento = "Argentina";
objPersona.saludar();

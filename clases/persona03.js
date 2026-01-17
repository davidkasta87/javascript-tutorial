/**
 * Clase Persona
 *
 * Representa una persona con propiedades privadas (nombre y país de nacimiento).
 * Utiliza encapsulación con propiedades privadas (#) para proteger los datos
 * y proporciona acceso controlado a través de getters y setters.
 *
 * @class Persona
 * @example
 * const persona = new Persona();
 * persona.nombre = "Juan";
 * persona.paisNacimiento = "España";
 * persona.saludar();
 */
class Persona {
  /** @private @type {string} Nombre de la persona */
  #nombre = "sin nombre";

  /** @private @type {string} País de nacimiento de la persona */
  #paisNacimiento = "sin país";

  /**
   * Método saludar
   *
   * Muestra un saludo en la consola con el nombre y país de nacimiento de la persona.
   *
   * @method
   * @returns {void}
   */
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.#nombre} y soy del país ${this.#paisNacimiento}`,
    );
  }

  /**
   * Getter para obtener el nombre
   *
   * @returns {string} El nombre de la persona
   */
  get nombre() {
    return this.#nombre;
  }

  /**
   * Setter para establecer el nombre
   *
   * Valida que el nombre no esté vacío antes de asignarlo.
   * Si el nombre está vacío, muestra un error en consola.
   *
   * @param {string} valor - El nuevo nombre de la persona
   * @returns {void}
   */
  set nombre(valor) {
    if (valor === "") console.error("El nombre no puede estar vacío");
    else this.#nombre = valor;
  }

  /**
   * Setter para establecer el país de nacimiento
   *
   * @param {string} value - El país de nacimiento
   * @returns {void}
   */
  set paisNacimiento(value) {
    this.#paisNacimiento = value;
  }

  /**
   * Getter para obtener el país de nacimiento
   *
   * @returns {string} El país de nacimiento de la persona
   */
  get paisNacimiento() {
    return this.#paisNacimiento;
  }
}

/**
 * Ejemplos de uso de la clase Persona sin constructor
 *
 * Demuestra cómo crear instancias de la clase Persona y asignar
 * propiedades a través de setters, luego acceder a ellas mediante getters.
 */

/**
 * Ejemplo 1: Instancia de Persona con país Colombia
 * Intenta asignar un nombre vacío (genera error) y luego asigna un país válido
 */
let objPersona = new Persona();
objPersona.nombre = "";
objPersona.paisNacimiento = "Colombia";
objPersona.saludar();

/**
 * Ejemplo 2: Modificación de la misma instancia con nuevos valores
 * Asigna un nuevo nombre "Leonel" y cambia el país a "Argentina"
 */
objPersona.nombre = "Leonel";
objPersona.paisNacimiento = "Argentina";
objPersona.saludar();

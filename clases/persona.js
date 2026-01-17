/**
 * Clase Persona
 * Representa una persona con propiedades básicas
 */
class Persona {
  /**
   * Constructor de Persona
   * @param {string} nombre - El nombre de la persona
   * @param {string} paisNacimiento - El país de nacimiento de la persona
   */
  constructor(nombre, paisNacimiento) {
    this.nombre = nombre;
    this.paisNacimiento = paisNacimiento;
  }

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

/**
 * Clase Empleado
 * Extiende de Persona y representa a un empleado con información laboral
 */
class Empleado extends Persona {
  /**
   * Constructor de Empleado
   * @param {string} nombre - El nombre del empleado
   * @param {string} paisNacimiento - El país de nacimiento del empleado
   * @param {string} empresa - La empresa donde trabaja
   * @param {string} profesion - La profesión o puesto del empleado
   * @param {number} aniosTrabajo - Años de experiencia laboral
   */
  constructor(nombre, paisNacimiento, empresa, profesion, aniosTrabajo) {
    super(nombre, paisNacimiento);
    this.empresa = empresa;
    this.profesion = profesion;
    this.aniosTrabajo = aniosTrabajo;
  }

  /**
   * Método mostrarTrabajo
   * Muestra la información laboral del empleado
   */
  mostrarTrabajo() {
    console.log(
      `Mi empresa es ${this.empresa}, mi profesión es ${this.profesion} y tengo ${this.aniosTrabajo} años de experiencia.`,
    );
  }
}

/**
 * Clase Estudiante
 * Extiende de Persona y representa a un estudiante con información académica
 */
class Estudiante extends Persona {
  /**
   * Constructor de Estudiante
   * @param {string} nombre - El nombre del estudiante
   * @param {string} paisNacimiento - El país de nacimiento del estudiante
   * @param {string} universidad - La universidad donde estudia
   * @param {number} semestre - El semestre académico actual
   */
  constructor(nombre, paisNacimiento, universidad, semestre) {
    super(nombre, paisNacimiento);
    this.universidad = universidad;
    this.semestre = semestre;
  }

  /**
   * Método mostrarEstudiante
   * Muestra la información académica del estudiante
   */
  mostrarEstudiante() {
    console.log(
      `Soy estudiante de ${this.universidad} en el semestre ${this.semestre}.`,
    );
  }
}

/* ==========================================
   EJEMPLOS COMENTADOS - Instancias de Persona
   =========================================== */
/* 
let objPersona = new Persona(`Juan`, `España`);
objPersona.saludar();

let objPersona1 = new Persona(`Leonel`, `Argentina`);
objPersona1.saludar(); 
*/

/* ==========================================
   INSTANCIAS ACTIVAS
   =========================================== */

// Instancia de Empleado
let objEmpleado = new Empleado(
  "Leonel",
  "Argentina",
  "Google",
  "Ingeniero QA",
  3,
);

objEmpleado.saludar();
objEmpleado.mostrarTrabajo();

console.log("");

// Instancia de Estudiante
let objEstudiante = new Estudiante(
  "María",
  "México",
  "Universidad Nacional Autónoma de México",
  6,
);

objEstudiante.saludar();
objEstudiante.mostrarEstudiante();

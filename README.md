# 📚 JavaScript Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un repositorio completo de aprendizaje de JavaScript con ejemplos prácticos y ejercicios organizados por conceptos fundamentales. Perfecto para principiantes que quieren dominar los conceptos básicos de JavaScript.

## 📑 Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Temas Cubiertos](#temas-cubiertos)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Requisitos](#requisitos)
- [Ruta de Aprendizaje](#ruta-de-aprendizaje)
- [Características](#características)
- [Licencia](#licencia)

## 📁 Estructura del Proyecto

```
├── variables/         # Variable declarations and scope
├── condicional/       # Conditional statements (if/else, switch)
├── bucles/           # Loop constructs (for loops)
├── funciones/        # Function examples
├── array/            # Array manipulation and iteration
├── Objetos/          # Object creation and manipulation
└── ejercicio01.js    # Complete invoice calculator example
```

## Topics Covered

### Variables

Variable declarations, data types, and scope examples.

### Conditional Logic

- `if/else` statements
- `switch` statements
- Comparison operators
- Conditional execution flow

**Example:**

```javascript
let edad = 18;
let cantidad = "18";

if (edad == cantidad) {
  console.log("La condición es verdadera");
} else {
  console.log("La condición es falsa");
}
```

### Loops (Bucles)

Loop constructs including `for` loops and iteration patterns.

### Functions (Funciones)

Function declarations, parameters, return values, and practical usage.

### Arrays

Array creation, manipulation, and iteration using traditional for loops.

**Example:**

```javascript
const paises = ["México", "Argentina", "Ecuador", "Perú", "Colombia"];

for (let i = 0; i < paises.length; i++) {
  console.log("País: " + paises[i]);
}
```

### Objects (Objetos)

- Object creation and properties
- Object manipulation
- Shallow copying techniques (`{...obj}`, `Object.assign()`)
- Working with nested objects

**Example:**

```javascript
const automovil = {
  marca: "Ferrari",
  color: "Rojo",
  kilometraje: 1500,
  radio: {
    marca: "Sony",
    soportaAndroidAuto: true,
  },
  adicionales: ["Cámara", "Kit herramientas"],
};

// Shallow copy
const auto2 = Object.assign({}, automovil);
auto2.marca = "Mazda";
```

### Complete Example: ejercicio01.js

A comprehensive invoice calculator demonstrating:

- Object structures with nested arrays
- Function declarations and usage
- Conditional logic for discount application
- Array iteration and manipulation
- Console output formatting with `console.table()`

## 🚀 Cómo Ejecutar

Ejecuta cualquier archivo JavaScript usando Node.js:

```bash
node <nombre_archivo>.js
```

### Ejemplos:

```bash
# Ejecutar el calculador de facturas
node ejercicio01.js

# Ejecutar ejemplos específicos
node condicional/ejemploIF.js
node array/array.js
node bucles/sentenciaFor.js
```

###✨ Características

- **JavaScript Puro**: Sin frameworks ni herramientas de construcción
- **Compatible con Node.js**: Todos los ejemplos se ejecutan directamente
- **Ejemplos Prácticos**: Escenarios del mundo real como cálculos de facturas
- **Aprendizaje Progresivo**: Temas organizados de lo básico a lo avanzado
- **Bien Documentado**: Código comentado y fácil de entender
- **Ejercicios Prácticos**: Ejemplos que puedes modificar y experimentar

## 📋 Requisitos

- **Node.js** versión 18+ instalado en tu sistema
- Conocimientos básicos de programación (opcional)
- Editor de código (VS Code recomendado)

## 🎯 Ruta de Aprendizaje

- Node.js installed on your system
- Basic understanding of programming concepts

## Learning Path

1. Start with **variables/** to understand data types and scope
2. Move to **condicional/** for decision-making logic
3. Learn **bucles/** for repetitive operations
4. Understand **funciones/** for code organization
5. Master **array/** for data collection handling
6. Explore **Objetos/** for complex data structures
7. Study **ejercicio01.js** to see concepts combined in practice

## License

💡 Próximos Pasos

Después de completar este tutorial, considera aprender:

- DOM Manipulation (JavaScript en el navegador)
- Async/Await y Promesas
- Módulos y NPM
- Frameworks como React o Vue.js

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, por favor abre un issue primero para discutir qué te gustaría cambiar.

## 📝 Autor

**David Castañeda**

---

<div align="center">

Hecho con ❤️ para la comunidad de aprendizaje de JavaScript

⭐ Si este repositorio te fue útil, considera darle una estrella

</div>
## Author

David Castañeda

# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a JavaScript tutorial repository containing learning examples organized by topic. The codebase uses vanilla JavaScript (no frameworks) and Node.js for execution.

## Running Code

Execute JavaScript files directly with Node.js:
```bash
node <filename>.js
```

Examples:
```bash
node ejercicio01.js
node condicional/ejemploIF.js
node array/array.js
```

## Code Architecture

### Directory Structure

The repository is organized by JavaScript concept:

- **variables/** - Variable declarations and scope examples
- **condicional/** - Conditional logic (if/else, switch statements, comparison operators)
- **bucles/** - Loop constructs (for loops)
- **funciones/** - Function examples
- **array/** - Array manipulation and iteration
- **Objetos/** - Object creation, properties, shallow copying (spread operator, `Object.assign()`)
- **ejercicio01.js** - Comprehensive example combining multiple concepts (invoice calculator with discount logic)

### Key Patterns

**Object manipulation**: The codebase demonstrates both spread operator (`{...obj}`) and `Object.assign({}, obj)` for shallow copying objects. When working with nested objects, be aware these methods only copy top-level properties.

**Iteration**: Arrays are iterated using traditional `for` loops with index-based access. The codebase does not use modern array methods like `.forEach()`, `.map()`, or `.filter()`.

**Console output**: Uses both `console.log()` for formatted output and `console.table()` for structured data visualization (see `ejercicio01.js`).

**Constants**: State values and configuration are defined as constants at the top of files (e.g., `ejemploSwitch.js` uses constants for user states).

## Development Notes

- No build process or transpilation - files run directly in Node.js
- No package.json - this is a pure JavaScript learning environment without dependencies
- No testing framework configured
- No linting or formatting tools configured

# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a JavaScript Tutorial! Este documento proporciona pautas y instrucciones para ayudarte a contribuir al proyecto.

## 📋 Código de Conducta

Por favor, sé respetuoso con otros contribuidores y usuarios. Mantén un entorno inclusivo y positivo.

## 🐛 Cómo Reportar Problemas

Si encuentras un error o problema:

1. **Verifica si ya existe una issue** consultando las issues abiertas
2. **Crea una nueva issue** con:
   - Título claro y descriptivo
   - Descripción detallada del problema
   - Pasos para reproducir
   - Resultado esperado vs resultado actual
   - Tu entorno (Node.js version, SO, etc.)

## ✨ Cómo Contribuir

### 1. Fork el Repositorio

```bash
# Fork desde GitHub UI, luego clona tu fork
git clone https://github.com/tu-usuario/javascript-tutorial.git
cd javascript-tutorial
```

### 2. Crea una Rama para tu Contribución

```bash
git checkout -b feature/tu-caracteristica
# o
git checkout -b fix/nombre-del-bug
```

### 3. Realiza tus Cambios

- Mantén el código limpio y legible
- Sigue el estilo de código existente
- Añade comentarios explicativos si es necesario
- Testa tus cambios ejecutando los archivos

### 4. Verifica tu Código

```bash
# Ejecuta los archivos afectados para asegurar que funcionan
node ruta/archivo.js
```

### 5. Commit tus Cambios

```bash
git add .
git commit -m "Descripción clara del cambio"
```

### 6. Push a tu Fork

```bash
git push origin feature/tu-caracteristica
```

### 7. Crea un Pull Request

- Ve a GitHub y abre un Pull Request
- Proporciona una descripción clara de los cambios
- Referencia las issues relacionadas si aplica

## 📝 Guía de Estilo

### JavaScript

- Usa `const` y `let`, evita `var`
- Nombres de variables en camelCase
- Nombres de funciones descriptivos
- Comenta código complejo
- Usa semicolons al final de líneas

**Ejemplo:**

```javascript
// ✅ Bien
const calcularTotal = (items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.precio;
  });
  return total;
};

// ❌ Evitar
var total = items.reduce((t, i) => t + i.precio, 0); // Sin comentarios útiles
```

### Nombres de Archivos

- Usa nombres descriptivos en minúsculas
- Usa guiones para separar palabras (kebab-case)
- Ejemplos: `ejemplo-if.js`, `calculator.js`

### Estructura de Archivos

```
carpeta/
├── archivo-principal.js
├── archivo-auxiliar.js
└── README.md (opcional)
```

## 🎯 Tipos de Contribuciones Bienvenidas

1. **Nuevos Ejemplos**: Añade ejemplos de conceptos no cubiertos
2. **Mejoras de Documentación**: Clarifica conceptos complejos
3. **Correcciones de Bugs**: Reporta y arregla problemas
4. **Mejoras de Código**: Optimiza ejemplos existentes
5. **Traducciones**: Ayuda a traducir contenido

## 📦 Antes de Hacer un Pull Request

- [ ] El código ejecuta sin errores
- [ ] Los cambios son relevantes y útiles
- [ ] Hay comentarios en código complejo
- [ ] Los nombres de archivos y funciones son descriptivos
- [ ] No hay archivos no necesarios incluidos

## ❓ Preguntas o Dudas

- Abre una Issue con tu pregunta
- Etiquétala como `question` o `help wanted`
- Describe claramente lo que necesitas

## 📄 Licencia

Al contribuir, aceptas que tu código se licencia bajo la licencia MIT del proyecto.

---

**¡Gracias por ayudar a mejorar JavaScript Tutorial! 🎉**

# 🛍️ TechStore - Tienda de Tecnología

Sistema web moderno de tienda de tecnología desarrollado con **ReactJS**, cumpliendo con todos los requisitos de la Evaluación 3.

## ✨ Características Implementadas

### 1. ✅ Agregar Descripción del Producto
- Campo de descripción implementado con `<textarea>`
- Permite ingresar texto más largo y detallado
- Validación: el campo no puede quedar vacío
- Mostrada en cada tarjeta de producto

### 2. ✅ Agregar Stock
- Campo numérico para cantidad disponible
- Validación: stock debe ser ≥ 0
- Mostrado en cada tarjeta con formato "X unidades"

### 3. ✅ Botón Eliminar Producto
- Botón presente en cada tarjeta
- Solicita confirmación antes de eliminar
- Elimina el producto automáticamente de la interfaz

### 4. ✅ Contador de Productos
- Contador dinámico en la sección de productos
- Se actualiza automáticamente al agregar
- Se actualiza automáticamente al eliminar
- Diseño destacado con gradiente azul

### 5. ✅ Validación de Tamaño de Imagen
- Máximo permitido: 2MB
- Muestra error si la imagen supera el tamaño
- No permite cargar imágenes demasiado pesadas
- Muestra preview de la imagen antes de agregar

### 6. ✅ Diseño Visual Moderno
- **Colores tecnológicos**: Azul cyan (#0ea5e9), Gradientes modernos
- **Tarjetas estilizadas**: Bordes redondeados, sombras, efectos hover
- **Responsive**: Se adapta a tablet (768px) y móviles (480px)
- **Grid y Flexbox**: Organización fluida y profesional
- **Efectos hover**: Animaciones suaves en tarjetas y botones
- **Tema oscuro**: Interfaz elegante y moderna

## 🛠️ Tecnologías Utilizadas

- **ReactJS 18**: Con hooks (useState)
- **JavaScript ES6+**: Sintaxis moderna
- **CSS3**: Gradientes, animaciones, media queries
- **HTML5**: Semántica correcta
- **Babel**: Para transformar JSX

## 📋 Requisitos Técnicos Cumplidos

✅ ReactJS con useState  
✅ Eventos y manejadores  
✅ Formularios controlados  
✅ CSS3 responsive  
✅ Validaciones con JavaScript  
✅ Código comentado y ordenado  
✅ Nombres de variables descriptivos  
✅ Interfaz intuitiva y fácil de usar  

## 🚀 Cómo Usar

1. **Abrir el proyecto**: Abre `index.html` en tu navegador
2. **Agregar productos**: 
   - Completa todos los campos del formulario
   - Selecciona una imagen (máximo 2MB)
   - Haz clic en "Agregar Producto"
3. **Ver productos**: Los productos aparecen en el catálogo
4. **Eliminar productos**: Haz clic en "Eliminar" y confirma la acción

## 📁 Estructura de Archivos

```
EV2FrontEnd-main/
├── index.html          # Página principal con React
├── css/
│   └── style.css       # Estilos CSS3 moderno
├── js/
│   └── main.js         # Componentes de React
├── img/                # Carpeta de imágenes
└── README.md           # Este archivo
```

## 🎯 Funcionalidades del Formulario

| Campo | Tipo | Validación | Requerido |
|-------|------|-----------|----------|
| Nombre | Texto | No vacío | ✅ |
| Precio | Número | > 0 | ✅ |
| Categoría | Select | No vacío | ✅ |
| Stock | Número | ≥ 0 | ✅ |
| Descripción | Textarea | No vacío | ✅ |
| Imagen | File | Máx 2MB | ✅ |

## 🎨 Categorías de Productos

- Laptops
- Celulares
- Accesorios
- Monitores
- Audio

## 💡 Notas Importantes

- Todas las validaciones ocurren en el lado del cliente (JavaScript)
- Los datos se almacenan en el estado de React (no persisten al recargar)
- El diseño es completamente responsive
- Los efectos hover funcionan en todos los navegadores modernos
- Las imágenes se convierten a base64 para almacenarse en memoria

## 👨‍💻 Información del Desarrollador

- **Estudiante**: Matias Zamora
- **Carrera**: Ingeniería en Informática
- **Email**: matias.zamora09@inacapmail.cl
- **Evaluación**: EV3 - Sistema de Tienda de Tecnología

---

**Última actualización**: 22/06/2026  
**Estado**: ✅ Completo y funcional

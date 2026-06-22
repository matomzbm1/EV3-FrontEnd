// Aplicación TechStore - React sin JSX (sin Babel)
const { useState } = React;

// Componente para mostrar errores de validación
function MensajeError({ mensaje }) {
    if (!mensaje) return null;
    return React.createElement('div', { className: 'error-mensaje' }, mensaje);
}

// Componente para mostrar mensajes de éxito
function MensajeExito({ mensaje }) {
    if (!mensaje) return null;
    return React.createElement('div', { className: 'exito-mensaje' }, mensaje);
}

// Componente del formulario para agregar productos
function Formulario({ onAgregarProducto, mensajeExito }) {
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        categoria: "",
        descripcion: "",
        stock: "",
        imagen: null,
        imagenPreview: null
    });

    const [errores, setErrores] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errores[name]) {
            setErrores(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const maxSize = 2 * 1024 * 1024;
            if (file.size > maxSize) {
                setErrores(prev => ({
                    ...prev,
                    imagen: "La imagen supera el tamaño permitido de 2MB."
                }));
                setFormData(prev => ({
                    ...prev,
                    imagen: null,
                    imagenPreview: null
                }));
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    imagen: file,
                    imagenPreview: reader.result
                }));
                setErrores(prev => ({
                    ...prev,
                    imagen: ""
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = "El nombre del producto es obligatorio.";
        }

        if (!formData.precio || parseFloat(formData.precio) <= 0) {
            nuevosErrores.precio = "El precio debe ser un número válido y mayor a 0.";
        }

        if (!formData.categoria) {
            nuevosErrores.categoria = "Debe seleccionar una categoría.";
        }

        if (!formData.descripcion.trim()) {
            nuevosErrores.descripcion = "La descripción del producto es obligatoria.";
        }

        if (!formData.stock || parseInt(formData.stock) < 0 || isNaN(parseInt(formData.stock))) {
            nuevosErrores.stock = "El stock debe ser un número entero igual o mayor a 0.";
        }

        if (!formData.imagenPreview) {
            nuevosErrores.imagen = "Debe seleccionar una imagen del producto.";
        }

        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = validarFormulario();

        if (Object.keys(nuevosErrores).length === 0) {
            const nuevoProducto = {
                id: Date.now(),
                nombre: formData.nombre,
                precio: parseFloat(formData.precio),
                categoria: formData.categoria,
                descripcion: formData.descripcion,
                stock: parseInt(formData.stock),
                imagen: formData.imagenPreview
            };

            onAgregarProducto(nuevoProducto);

            setFormData({
                nombre: "",
                precio: "",
                categoria: "",
                descripcion: "",
                stock: "",
                imagen: null,
                imagenPreview: null
            });
            setErrores({});
        } else {
            setErrores(nuevosErrores);
        }
    };

    return React.createElement(
        'div',
        { className: 'formulario-container' },
        React.createElement('h2', null, 'Agregar Nuevo Producto'),
        mensajeExito ? React.createElement(MensajeExito, { mensaje: mensajeExito }) : null,
        React.createElement(
            'form',
            { onSubmit: handleSubmit, className: 'formulario' },
            // Nombre
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'nombre' }, 'Nombre del Producto *'),
                React.createElement('input', {
                    type: 'text',
                    id: 'nombre',
                    name: 'nombre',
                    value: formData.nombre,
                    onChange: handleInputChange,
                    placeholder: 'Ej: Laptop Gaming'
                }),
                React.createElement(MensajeError, { mensaje: errores.nombre })
            ),
            // Precio
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'precio' }, 'Precio ($) *'),
                React.createElement('input', {
                    type: 'number',
                    id: 'precio',
                    name: 'precio',
                    value: formData.precio,
                    onChange: handleInputChange,
                    placeholder: '99999',
                    min: '0',
                    step: '1'
                }),
                React.createElement(MensajeError, { mensaje: errores.precio })
            ),
            // Categoría
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'categoria' }, 'Categoría *'),
                React.createElement(
                    'select',
                    {
                        id: 'categoria',
                        name: 'categoria',
                        value: formData.categoria,
                        onChange: handleInputChange
                    },
                    React.createElement('option', { value: '' }, '-- Seleccione una categoría --'),
                    React.createElement('option', { value: 'Laptops' }, 'Laptops'),
                    React.createElement('option', { value: 'Celulares' }, 'Celulares'),
                    React.createElement('option', { value: 'Accesorios' }, 'Accesorios'),
                    React.createElement('option', { value: 'Monitores' }, 'Monitores'),
                    React.createElement('option', { value: 'Audio' }, 'Audio')
                ),
                React.createElement(MensajeError, { mensaje: errores.categoria })
            ),
            // Stock
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'stock' }, 'Stock (Cantidad) *'),
                React.createElement('input', {
                    type: 'number',
                    id: 'stock',
                    name: 'stock',
                    value: formData.stock,
                    onChange: handleInputChange,
                    placeholder: '0',
                    min: '0'
                }),
                React.createElement(MensajeError, { mensaje: errores.stock })
            ),
            // Descripción
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'descripcion' }, 'Descripción *'),
                React.createElement('textarea', {
                    id: 'descripcion',
                    name: 'descripcion',
                    value: formData.descripcion,
                    onChange: handleInputChange,
                    placeholder: 'Escriba una descripción detallada del producto...',
                    rows: '4'
                }),
                React.createElement(MensajeError, { mensaje: errores.descripcion })
            ),
            // Imagen
            React.createElement(
                'div',
                { className: 'formulario-grupo' },
                React.createElement('label', { htmlFor: 'imagen' }, 'Imagen del Producto (Máx 2MB) *'),
                React.createElement('input', {
                    type: 'file',
                    id: 'imagen',
                    name: 'imagen',
                    onChange: handleImagenChange,
                    accept: 'image/*'
                }),
                React.createElement(MensajeError, { mensaje: errores.imagen }),
                formData.imagenPreview ? React.createElement(
                    'div',
                    { className: 'imagen-preview' },
                    React.createElement('img', { src: formData.imagenPreview, alt: 'Preview' })
                ) : null
            ),
            React.createElement('button', { type: 'submit', className: 'boton-agregar' }, 'Agregar Producto')
        )
    );
}

// Componente para la tarjeta individual del producto
function TarjetaProducto({ producto, onEliminar }) {
    const handleEliminar = () => {
        const confirmar = window.confirm(
            `¿Desea eliminar el producto "${producto.nombre}"?`
        );
        if (confirmar) {
            onEliminar(producto.id);
        }
    };

    return React.createElement(
        'div',
        { className: 'tarjeta-producto' },
        React.createElement(
            'div',
            { className: 'imagen-container' },
            React.createElement('img', { src: producto.imagen, alt: producto.nombre })
        ),
        React.createElement(
            'div',
            { className: 'contenido-tarjeta' },
            React.createElement('h3', null, producto.nombre),
            React.createElement(
                'p',
                { className: 'categoria' },
                React.createElement('span', { className: 'etiqueta-categoria' }, producto.categoria)
            ),
            React.createElement('p', { className: 'descripcion' }, producto.descripcion),
            React.createElement(
                'div',
                { className: 'info-producto' },
                React.createElement(
                    'p',
                    { className: 'precio' },
                    React.createElement('strong', null, 'Precio: '),
                    '$' + producto.precio.toLocaleString('es-CL')
                ),
                React.createElement(
                    'p',
                    { className: 'stock' },
                    React.createElement('strong', null, 'Stock: '),
                    producto.stock + ' unidades'
                )
            ),
            React.createElement(
                'button',
                { onClick: handleEliminar, className: 'boton-eliminar' },
                'Eliminar'
            )
        )
    );
}

// Componente principal de la aplicación
function App() {
    const [productos, setProductos] = useState([]);
    const [mensajeExito, setMensajeExito] = useState("");

    const handleAgregarProducto = (nuevoProducto) => {
        setProductos(prev => [...prev, nuevoProducto]);
        setMensajeExito("¡Producto agregado exitosamente!");
        
        setTimeout(() => {
            setMensajeExito("");
        }, 3000);
    };

    const handleEliminarProducto = (id) => {
        setProductos(prev => prev.filter(producto => producto.id !== id));
    };

    return React.createElement(
        'div',
        { className: 'app-container' },
        // Header
        React.createElement(
            'header',
            { className: 'header' },
            React.createElement(
                'div',
                { className: 'header-contenido' },
                React.createElement('h1', null, '🛍️ TechStore'),
                React.createElement('p', null, 'Tu tienda de tecnología preferida')
            )
        ),
        // Main
        React.createElement(
            'main',
            { className: 'main-content' },
            // Sección formulario
            React.createElement(
                'section',
                { className: 'seccion-formulario' },
                React.createElement(Formulario, {
                    onAgregarProducto: handleAgregarProducto,
                    mensajeExito: mensajeExito
                })
            ),
            // Sección productos
            React.createElement(
                'section',
                { className: 'seccion-productos' },
                React.createElement(
                    'div',
                    { className: 'titulo-seccion' },
                    React.createElement('h2', null, 'Catálogo de Productos'),
                    React.createElement(
                        'div',
                        { className: 'contador-productos' },
                        React.createElement('p', { className: 'contador-titulo' }, 'Productos Registrados:'),
                        React.createElement('p', { className: 'contador-valor' }, productos.length)
                    )
                ),
                productos.length === 0 ? React.createElement(
                    'div',
                    { className: 'mensaje-vacio' },
                    React.createElement('p', null, 'No hay productos registrados aún. ¡Agrega el primero!')
                ) : React.createElement(
                    'div',
                    { className: 'grid-productos' },
                    productos.map(producto =>
                        React.createElement(TarjetaProducto, {
                            key: producto.id,
                            producto: producto,
                            onEliminar: handleEliminarProducto
                        })
                    )
                )
            )
        ),
        // Footer
        React.createElement(
            'footer',
            { className: 'footer' },
            React.createElement('p', null, '© 2024 TechStore - Tienda de Tecnología. Todos los derechos reservados.')
        )
    );
}

// Renderizar la aplicación (sin Babel, React 17)
ReactDOM.render(React.createElement(App), document.getElementById('root'));
// Arreglo para almacenar los productos en inventario
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
    // Agrega más productos aquí
  ];
  
  // Función para buscar un producto por su ID
  function buscarProducto(id) {
    return productos.find(producto => producto.id === id);
  }
  
  // Función para calcular el total de una venta
  function calcularTotal(idProducto, cantidad) {
    const producto = buscarProducto(idProducto);
    if (!producto) {
      return 'Producto no encontrado';
    }
    const subtotal = producto.precio * cantidad;
    const iva = subtotal * 0.19;
    const total = subtotal + iva;
    return total;
  }
  
  // Ejemplo de uso
  const idProducto = 1; // Cambia este valor por el ID del producto que deseas comprar
  const cantidad = 2;
  const totalVenta = calcularTotal(idProducto, cantidad);
  
  console.log(`El total de la venta es: $${totalVenta}`);
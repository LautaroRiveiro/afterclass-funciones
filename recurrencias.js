// No respetar la cantidad de parámetros

function validarStock(producto, cantidad) {
  // return producto.stock >= cantidad
}

validarStock()

function validarStock() {
  // return productos[0].stock >= cantidad
}

validarStock(producto1, cantidadIngresada)


// Ignorar los parámetros

function sumar(num1, num2) {
  const sumando1 = +prompt('Ingrese un número')
  const sumando2 = +prompt('Ingrese otro número')
  return sumando1 + sumando2
}

sumar(4, 6)


// Mezclar los nombres de los parámetros con las variables globales

const carrito = []
const producto = {id: '1', descripcion: 'Remera'}

function agregarAlCarrito(producto) {
  console.log(producto)
  carrito.push(producto)
}

agregarAlCarrito({id: '2', descripcion: 'Zapatilla'})

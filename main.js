let ingresoEdad = (prompt("Ingrese su edad"))

if(ingresoEdad >= 18){
    console.log("Es mayor de edad y puede continuar")
}else{
    alert("Usted es menor y no puede continuar")
}

function sumaProductos(precio1, precio2){
    return (precio1 + precio2)
}
let precio1 = parseInt(prompt("Ingrese precio del producto"))
let precio2 = parseInt(prompt("Ingrese precio del producto 2"))

let resultado = sumaProductos(precio1, precio2)
alert("Su total es de $" + resultado)

class producto {
    constructor (id, marca, precio, imagen){
        this.id = id,
        this.marca = marca,
        this.precio = precio,
        this.imagen = imagen}
}

const producto1 = new producto(1, "G&G", 320, "g&g.jpg" )

const producto2 = new producto(2, "ICS", 425, "ares.jpg")

const producto3 = new producto(3, "KWA", 260, "e&l.jpg")

const producto4 = new producto(4, "E&L", 270, "ICS.jpg")

const producto5 = new producto(5, "Krytac", 490, "krytac.jpg")

const producto6 = new producto(6, "Ares", 280, "kwa.jpg")

const stock = []
stock.push(producto1, producto2, producto3, producto4, producto5, producto6)
let divStock = document.getElementById("stock")
function mostrarStock(array){

    divStock.innerHTML = ""
    array.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${producto.id}" class="card" style="width: 18rem;">
                                        <img class="card-img-top" style="height: 250px;"src="assets/img/${producto.imagen}" alt="${producto.marca}">
                                        <div class="card-body">
                                            <h4 class="card-title">${producto.marca}</h4>
                                            <p>Marca: ${producto.marca}</p>
                                            <p class="">Precio: usd ${producto.precio}</p>
                                            <button id="" class="btn btn-outline-success">Agregar al carrito</button>
                                        </div>
                                    </div>`
    divStock.append(nuevoProducto)
    })
    let btnCompra = document.getElementsByClassName("btnComprar")
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("El producto ha sido comprado")
    })
}
}

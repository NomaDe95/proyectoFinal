let ingresoEdad = (prompt("Ingrese su edad"))

if(ingresoEdad >= 18){
    console.log("Es mayor de edad y puede continuar")
}else{
    alert("Usted es menor y no puede continuar")
}


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

let productosEnCarrito = []
let stock = []

if(localStorage.getItem("stock")){
    stock = JSON.parse(localStorage.getItem("stock"))
}
else{
    stock.push(producto1, producto2, producto3, producto4, producto5, producto6)
    localStorage.setItem("stock", JSON.stringify(stock))
}
console.log(stock)

let divStock = document.getElementById("stock")

    stock.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${producto.id}" class="card" style="width: 18rem;">
                                        <img class="card-img-top" style="height: 250px;"src="assets/img/${producto.imagen}" alt="${producto.marca} ">
                                        <div class="card-body">
                                            <h4 class="card-title">${producto.marca}</h4>
                                            <p>Marca: ${producto.marca}</p>
                                            <p class="">Precio: usd ${producto.precio}</p>
                                            <button id="agregarBtn${producto.id}" class="btn btn-outline-success btnCompra">Agregar al carrito</button>
                                        </div>
                                    </div>`
    divStock.append(nuevoProducto)

    let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)
        console.log(btnAgregar)
        btnAgregar.addEventListener("click", ()=>{
            console.log(producto)
            agregarAlCarrito(producto)
        })
    })


function agregarAlCarrito(producto){
    productosEnCarrito.push(producto)
    console.log(productosEnCarrito)
}


//DOM Carrito
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})
function cargarProductosCarrito(array){

    modalBody.innerHTML = ""
    array.forEach((productoCarrito)=>{

            modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 250px;">
            <img class="card-img-top" src="assets/img/${productoCarrito.imagen}" alt="${productoCarrito.marca}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.marca}</h4>
                
                    <p class="card-text">Precio: usd ${productoCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
            </div>    
        
        
        </div>
` 
    })
    totalCompra(array)
}

function totalCompra(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)
    if(acumulador == 0){
        parrafoCompra.innerHTML = `No se encuentran productos en el carrito`
    }
    else{
        parrafoCompra.innerHTML = `El total es usd ${acumulador}`
    }
}
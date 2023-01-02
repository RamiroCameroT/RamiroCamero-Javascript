const productos = [
    {id: 1, Nombre: "Fideos con Salsa a Eleccion", Precio: 1800, Categoria: 2},
    {id: 2, Nombre: "Milanesa a la Napolitana", Precio: 2100, Categoria: 2},
    {id: 3, Nombre: "Filet de Merluza con Guarnicion", Precio: 1950, Categoria: 2},
    {id: 4, Nombre: "Tortilla de Papa", Precio: 1500, Categoria: 1},
    {id: 5, Nombre: "Entraña con Guarnicion", Precio: 2350, Categoria: 2},
    {id: 6, Nombre: "Sorrentinos con Salsa a Eleccion", Precio: 1900, Categoria: 2},
    {id: 7, Nombre: "Volcan de Chocolate", Precio: 900, Categoria: 3},
    {id: 8, Nombre: "Lemon Pie", Precio: 750, Categoria: 3},
    {id: 9, Nombre: "Bastones de Muzzarella", Precio: 1000, Categoria: 1},
    {id: 10, Nombre: "Rabas", Precio: 1300, Categoria: 1},
    {id: 11, Nombre: "Gaseosas", Precio: 350, Categoria: 4},
    {id: 12, Nombre: "Vinos", Precio: 500, Categoria: 4},
];

let productosHTML = document.getElementById("sectionPlatos");

productos.forEach( item =>{
    let div = document.createElement("div");
    div.classList.add("productos")
    div.innerHTML = `
        <h2>${item.Nombre}</h2>
        <h4>$${item.Precio}</h4>
        <button>Agregar</button>
    `
    sectionPlatos.append(div);
});

let boton1 = document.getElementById("Entradas");

const Hola = (categ) => {
    let borrar = document.getElementById("sectionPlatos");
    if (borrar.parentNode) {
    borrar.parentNode.removeChild(borrar);
    
    const prod = productos.filter( item => item.Categoria === categ);
    console.log(prod);
}};

boton1.addEventListener("click", () => Hola(1));


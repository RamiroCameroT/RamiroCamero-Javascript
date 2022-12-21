let sectionProductos = document.getElementById("sectionPlatos");
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

productos.forEach (item =>{
    let div = document.createElement("div");
    div.className = "productos"
    div.innerHTML = `
        <h3>${item.Nombre}</h3>
        <h4>Precio: $ ${item.Precio}</h6>
        <p>Categoria: ${item.Categoria}</p>
        <p">ID: ${item.id}</p>
        <button>Comprar</button>
        `
        sectionPlatos.append(div)

});

console.log(productos);

let botonEnt = document.getElementById("Entradas");
botonEnt.onclick = () => {
    const filtro = productos.filter(item => item.Categoria == 1);
    console.log(filtro);
};
let botonPrin = document.getElementById("Principales");
botonPrin.onclick = () => {
    const filtro = productos.filter(item => item.Categoria == 2);
    console.log(filtro);
};
let botonPost = document.getElementById("Postres");
botonPost.onclick = () => {
    const filtro = productos.filter(item => item.Categoria == 3);
    console.log(filtro);
};
let botonBeb = document.getElementById("Bebidas");
botonBeb.onclick = () => {
    const filtro = productos.filter(item => item.Categoria == 4);
    console.log(filtro);
};






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
let boton2 = document.getElementById("Principales");
let boton3 = document.getElementById("Postres");
let boton4 = document.getElementById("Bebidas");
// let boton5 = document.getElementById("Todos");

const Hola = (categ) => {
    const prod = productos.filter( item => item.Categoria === categ);
    console.log(prod); //me podrias decir como hacer para que se me filtren en el html y me aparezcan solo los filtrados que me apareen en la consola??
};
// };

boton1.addEventListener("click", () => Hola(1));
boton2.addEventListener("click", () => Hola(2));
boton3.addEventListener("click", () => Hola(3));
boton4.addEventListener("click", () => Hola(4));
// boton1.addEventListener("click", () => Hola());



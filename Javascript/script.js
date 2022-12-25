let NombreUsuario = prompt("Bienvenido a Sallie Gourmet, como es su nombre?");
alert(`Bienvenido ${NombreUsuario}, a continuacion podra acceder a nuestro menu. Muchas gracias por elegirnos`)


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

// productos.forEach (item =>{
//     let div = document.createElement("div");
//     div.className = "productos"
//     div.innerHTML = `
//         <h3>${item.Nombre}</h3>
//         <h4>Precio: $ ${item.Precio}</h6>
//         <p>Categoria: ${item.Categoria}</p>
//         <p">ID: ${item.id}</p>
//         <button>Comprar</button>
//         `
//         sectionPlatos.append(div)

// });




function filtrar(categ) {
    const filtro = productos.filter(item => item.Categoria == categ);
    return filtro;
};
let section = document.getElementById("sectionPlatos");
function filtroSeccion (item) {
    const filtrado = filtrar(item);
    filtrado.forEach (item =>{
        let div = document.createElement("div");
        div.className = "productos"
        div.innerHTML = `
            <h3>${item.Nombre}</h3>
            <h4>Precio: $ ${item.Precio}</h6>
            <p>Categoria: ${item.Categoria}</p>
            <p">ID: ${item.id}</p>
            <button>Comprar</button>
            `
            section.append(div); // no encuentro la forma para que se me borre lo anterior del html y se me agregue solo lo filtrado. ya que si lo probas se vana cumulando y nunca me borra lo anterior
            
})};


let botonEnt = document.getElementById("Entradas"); 
botonEnt.onclick = () => {
    filtroSeccion (1);
};
let botonPrin = document.getElementById("Principales");
botonPrin.onclick = () => {
    filtroSeccion (2);
};
let botonPost = document.getElementById("Postres");
botonPost.onclick = () => {
    filtroSeccion (3);
};
let botonBeb = document.getElementById("Bebidas");
botonBeb.onclick = () => {
    filtroSeccion (4);
};

let filtroNombre = document.getElementById("filtroNombre"); 
let filtroN = filtroNombre.addEventListener("input", () => { //Aca que evento me recomendas usar???
    let valor = filtroNombre.value;
    const filtroN = productos.filter(item => item.Nombre.includes == valor);
    console.log(filtroN);
})






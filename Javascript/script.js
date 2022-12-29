let nombreUsuario = prompt("Bienvenido a Sallie Gourmet, como es su nombre?");
while (nombreUsuario == "") {
    nombreUsuario = prompt("Bienvenido a Sallie Gourmet, como es su nombre?");
}
alert(`Bienvenido ${nombreUsuario}, a continuacion podra acceder a nuestro menu. Muchas gracias por elegirnos`)

let productoElegido = parseFloat(prompt("Los platos a elegir son: 1-Fideos con Salsa a Eleccion, 2- Milanesa a la Napolitana, 3- Filet de Merluza con Guarnicion, 4- Tortilla de Papa, 5- Entraña con Guarnicion, 6- Sorrentinos con Salsa a Eleccion"))

let precio = 0;

function Total() {
    const medioPago = prompt("Desea pagar en efectivo o tarjeta. Abonando en efectivo obtendra un 15% de descuento. Ingrese SI o NO").toLocaleUpperCase();
    if (medioPago == "SI") {
    let totalPagar = precio * 0.85;
    alert(`Al abonar en efectivo, el total a pagar es $ ${totalPagar}`);
    } else{
    totalPagar = precio;
    alert(`El total a pagar es $ ${totalPagar}`);
};};

switch (productoElegido) {
    case 1:
        alert("Ha seleccionado Fideos con Salsa a Eleccion y el precio es $1800 ");
        precio = 1800;
        Total()
        break;
    case 2:
        alert("Ha seleccionado Milanesa a la Napolitana y el precio es $2100 ");
        precio = 2100;
        Total()
        break;
    case 3:
        alert("Ha seleccionado Filet de Merluza con Guarnicion y el precio es $1950 ");
        precio = 1950;
        Total()
        break;
    case 4:
        alert("Ha seleccionado Tortilla de Papa y el precio es $1500 ");
        precio = 1500;
        Total()
        break;
    case 5:
        alert("Ha seleccionado Entraña con Guarnicion y el precio es $2350 ");
        precio = 2350;
        Total()
        break;
    case 6:
        alert("Ha seleccionado Sorrentinos con Salsa a Eleccion y el precio es $1900 ");
        precio = 1900;
        Total()
        break;
    default:
        alert("No ha seleccionado ninguna opcion valida. Por favor vuelva a intentarlo")
        break;
};




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

let filtro = prompt("Elija un plato para ver si lo tenemos en nuestro Menu")

let encontrado = productos.find (item => item.Nombre === filtro);

if (encontrado) {
    alert("Lo tenemos en nuestro Menu")
} else{
    alert("No lo tenemos")
};
const productos = [
    {id: 1, Nombre: "Fideos con Salsa a Eleccion", Precio: 1800, Categoria: 2,},
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

let carrito = [];

const agregar = () =>{
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'El producto se ha agregado al carrito',
    showConfirmButton: false,
    timer: 1000
    })
}
const borrarCarrito = () =>{
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se ha vaciado el carrito',
    showConfirmButton: true,
    timer: 4000
    })
}

const ComprarCarrito = () =>{
    Swal.fire({
        title: 'Desea continuar con la compra?',
        showDenyButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Su carrito ha sido confirmado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Se ha cancelado la compra', '', 'error')
        }
      })
}

const CarritoCalc = () => {
    let carritoTotal = JSON.parse(localStorage.getItem("Carrito"));
    let total = 0;

    carritoTotal.forEach(item =>{
        total += item.Precio
    });

    let totalCar = document.getElementById("precio");
    let div = document.createElement("div");
    div.classList.add("totalPagar")
    div.innerHTML = `${total}`;
    precio.innerHTML = "";
    precio.append(div);
};



const filtrado = (var1) => {
    var1.forEach( item =>{
        let div = document.createElement("div");
        div.classList.add("productos")
        div.innerHTML = `
            <h2>${item.Nombre}</h2>
            <h4>$${item.Precio}</h4>
            <button id="boton${item.id}"><i class="fas fa-shopping-cart"></i></button>
        `
        sectionPlatos.append(div);
        
        let boton = document.getElementById(`boton${item.id}`);

        const ejecutar = (id) =>{
            let encontrado = productos.find(item => item.id === id);
            carrito.push(encontrado);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
            agregar();
            CarritoCalc();
        }
        boton.addEventListener("click", () => ejecutar(item.id)); 
})};

filtrado(productos);

let boton1 = document.getElementById("Entradas");
let boton2 = document.getElementById("Principales");
let boton3 = document.getElementById("Postres");
let boton4 = document.getElementById("Bebidas");
let botonCarrito = document.getElementById("Carrito")

const Hola = (categ) => {
    const prod = productos.filter( (item) => item.Categoria === categ);
    sectionPlatos.innerHTML = "";
    filtrado(prod); 
};

boton1.addEventListener("click", () => Hola(1));
boton2.addEventListener("click", () => Hola(2));
boton3.addEventListener("click", () => Hola(3));
boton4.addEventListener("click", () => Hola(4));

botonCarrito.addEventListener("click", () => {
    carrito = JSON.parse(localStorage.getItem("Carrito"))
    carritoBarra.innerHTML = "";
    carrito.forEach( item => {
        let div = document.createElement("div");
        div.classList.add("productosCarrito");
        div.id = `${item.id}`;
        div.innerHTML = `
            <h2>${item.Nombre}</h2>
            <h4>$${item.Precio}</h4>
            <button id="boton${item.id}">Remover</button>`
        carritoBarra.append(div);

        let boton = document.getElementById(`boton${item.id}`);

        const borrar = (id) =>{
            let encontrado = carrito.find(item => item.id === id);

            
            let index = carrito.indexOf(encontrado);
            if (index !== -1) {
                carrito.splice(index, 1);

            };
            localStorage.setItem("Carrito", JSON.stringify(carrito));
            
            let remover = document.getElementById(id)
            remover.remove();

            CarritoCalc();
        };

        boton.addEventListener("click", () =>borrar(item.id));    

})});

const pushbar = new Pushbar({
    blur:true,
    overlay:true,
  });

  let botonRemC = document.getElementById("BotonRemC");
  botonRemC.addEventListener("click", () => {
      localStorage.clear();
      borrarCarrito();
      location.reload(); // para que se recargue sola la pagina
    
  });

  let botonComprar = document.getElementById("BotonComprar");
  botonComprar.addEventListener("click", () => {
    ComprarCarrito();
    
  });

  const DateTime = luxon.DateTime;
  const now = DateTime.now().toLocaleString(DateTime.DATE_FULL)
  let fecha = document.getElementById("fecha");
  let divF = document.createElement("div");
  divF.classList.add("fecha1")
  divF.innerHTML =`
  <h4>${now}</h4>
  `
  fecha.append(divF)
  


 
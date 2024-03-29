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

const encontradoItem = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El producto ya se encuentra en el carrito',
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

const filtrado = () => {
    fetch("./data.json")
    .then((response) => response.json())
    .then(data => {
        data.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("productos")
        div.style.backgroundImage = `url(${item.img})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundPosition = "center";
        div.style.opacity = "0.9";
        div.innerHTML = `
            <h2>${item.Nombre}</h2>
            <h4>$${item.Precio}</h4>
            <button id="boton${item.id}"><i class="fas fa-shopping-cart"></i></button>
        `
        sectionPlatos.append(div);
        
        let boton = document.getElementById(`boton${item.id}`);

        const ejecutar = (id) =>{
            let encontrado = data.find(item => item.id === id);
            
            if (!carrito.includes(encontrado)) {
                carrito.push(item)
                localStorage.setItem("Carrito", JSON.stringify(carrito))
                agregar();
                CarritoCalc();
            } else {
                encontradoItem();
                localStorage.setItem("Carrito", JSON.stringify(carrito))
            }
        
        }
        boton.addEventListener("click", () => ejecutar(item.id)); 
    })})};

filtrado();

let boton1 = document.getElementById("Entradas");
let boton2 = document.getElementById("Principales");
let boton3 = document.getElementById("Postres");
let boton4 = document.getElementById("Bebidas");
let botonCarrito = document.getElementById("Carrito")

const Hola = async (categ) => {
    try {
        const response = await fetch("./data.json")
        const data = await response.json();

        let filtro = categ;
        let filtrados = data.filter( item => item.Categoria == filtro); //el status es una propiedad justo de esa api
        
        sectionPlatos.innerHTML = "";

        filtrados.forEach( item =>{
                let div = document.createElement("div");
                div.classList.add("productos")
                div.style.backgroundImage = `url(${item.img})`;
                div.style.backgroundSize = "cover";
                div.style.backgroundRepeat = "no-repeat";
                div.style.backgroundPosition = "center";
                div.style.opacity = "0.9";
                div.innerHTML = `
                    <h2>${item.Nombre}</h2>
                    <h4>$${item.Precio}</h4>
                    <button id="boton${item.id}"><i class="fas fa-shopping-cart"></i></button>
                `
                sectionPlatos.append(div);
                
                let boton = document.getElementById(`boton${item.id}`);
        
                const ejecutar = (id) =>{
                    let encontrado = data.find(item => item.id === id);
                    
                    if (!carrito.includes(encontrado)) {
                        carrito.push(item)
                        localStorage.setItem("Carrito", JSON.stringify(carrito))
                        agregar();
                        CarritoCalc();
                    } else {
                        encontradoItem();
                        localStorage.setItem("Carrito", JSON.stringify(carrito))
                    }
                
                }
                boton.addEventListener("click", () => ejecutar(item.id)); 
        })

    } catch (error) {
        console.log(error);
    }

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
        div.style.backgroundImage = `url(${item.img})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundPosition = "center";
        div.style.opacity = "0.9";
        div.id = `${item.id}`;
        div.innerHTML = `
            <h2>${item.Nombre}</h2>
            <h4>$${item.Precio}</h4>
            <button id="boton${item.id}">Remover</button>`
        carritoBarra.append(div);

        let boton = document.getElementById(`boton${item.id}`);

        const borrar = (id) =>{
            carrito = JSON.parse(localStorage.getItem("Carrito"))
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
  


 
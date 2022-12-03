
let usuario = prompt("ingresar usuario");

while(usuario == false){
    usuario = prompt("ingresar usuario correctamente");
}

const monto = parseFloat(prompt(`Bienvenido ${usuario}, por favor ingrese el total a invertir`));
let dias = parseInt(prompt("Cuanto dias desea invertirlo: 30 - 60 - 90 - 120 - 365"))
let interes = 0;

switch (dias){
    case 30:
    interes = 1.10;    
    alert(`Transcurridos los 30 dias, tendra la suma de: $${monto * 1.10} pesos`);
        break;
    case 60:
    interes = 1.15;  
        alert(`Transcurridos los 60 dias, tendra la suma de: $${monto * 1.15} pesos`);
        break;
    case 90:
    interes = 1.20;  
        alert(`Transcurridos los 90 dias, tendra la suma de: $${monto * 1.20} pesos`);
        break;
    case 120:
    interes = 1.30;  
        alert(`Transcurridos los 120 dias, tendra la suma de: $${monto * 1.30} pesos`);
        break;
    case 365:
    interes = 1.40;  
        alert(`Transcurridos los 365 dias, tendra la suma de: $${monto * 1.40} pesos`);
        break;
    default:
    interes = 1.10;  
        alert(`Ha seleccionado incorrectamente un periodo, por lo que se le aplicara la tasa de intereses mas baja. Transcurridos los ${dias} dias, tendra la suma de ${monto * 1.10} pesos`)
};

const resultado = (A, B) => {
    let interesNeto = (A * B) - A ;
    return `Felicitaciones, va a lograr una ganancia neta de ${interesNeto} pesos`
};
alert(resultado(monto, interes));





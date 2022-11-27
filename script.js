
let usuario = prompt("ingresar usuario");

while(usuario == false){
    usuario = prompt("ingresar usuario correctamente");
}

const monto = parseFloat(prompt(`Bienvenido ${usuario}, por favor ingrese el total a invertir`));
let dias = parseInt(prompt("Cuanto dias desea invertirlo: 30 - 60 - 90 - 120 - 365"))

switch (dias){
    case 30:
        alert(`Transcurridos los 30 dias, tendra la suma de: $${monto * 1.10} pesos`);
        break;
    case 60:
        alert(`Transcurridos los 60 dias, tendra la suma de: $${monto * 1.15} pesos`);
        break;
    case 90:
        alert(`Transcurridos los 90 dias, tendra la suma de: $${monto * 1.20} pesos`);
        break;
    case 120:
        alert(`Transcurridos los 120 dias, tendra la suma de: $${monto * 1.30} pesos`);
        break;
    case 365:
        alert(`Transcurridos los 365 dias, tendra la suma de: $${monto * 1.40} pesos`);
        break;
    default:
        alert(`Ha seleccionado incorrectamente el periodo. Vuelve a intentarlo nuevamente`)
};










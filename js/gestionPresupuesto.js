"use strict"
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor) {
    if(!isNaN(valor) && valor >= 0)
    {
        presupuesto = valor;
        return presupuesto
    }
    else
    {
        console.log("El valor debe ser un número positivo.")
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiqueta) {
    this.descripcion = descripcion;
    this.valor = (!isNaN(valor) && valor >= 0) ? valor : 0;
    this.etiqueta = (etiqueta !== undefined) ? etiqueta : [];
    this.fecha = (fecha !== undefined && fecha !== NaN) ? Date.parse(fecha) : Date.now();
    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${descripcion} con valor ${valor} €`;
    }
    this.actualizarDescripcion = function(descripcion) {
        this.descripcion = descripcion;
    }
    this.actualizarValor = function(valor){
        this.valor = (!isNaN(valor) && valor >= 0) ? valor : this.valor;
    }
    this.anyadirEtiqueta = function(etiqueta){

    }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(gasto){
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(){

}

function calcularTotalGastos(){

}

function calcularBalance(){

}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

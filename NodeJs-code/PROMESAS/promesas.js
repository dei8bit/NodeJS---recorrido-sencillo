/*

//#PROMESAS:
//- Una promise acepta dos parametros (exito, rechazo).
//*No puede haber reject sin resolve
const promesaValor = true;
const promesaValor = false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if (promesaValor) {resolve('Promesa cumplida!!');}
        else{reject('Promesa fallida...');}
    }, 2000);
});


//.Metodo "then": 
//- Define acciones en base al resultado de la promesa.

///El metodo then por defecto permite solo manejar las promesas que son exitosas.
    miPromesa.then((valor)=>{console.log(valor);});  

///Para tener en cuenta ambas posibilidades hay que asignar funciones a cada posibilidad:
//$ Sintaxis 1:
const promesaCumplida = (valor)=>{console.log(valor)};
const promesaFallida = (razonRechazo)=>{console.log(razonRechazo)};
miPromesa.then(promesaCumplida,promesaFallida);


//$ Sintaxis 2:
miPromesa
    // .then((exito)=>{console.log(exito)})
    // .then(null,(rechazo)=>{console.log(rechazo)})



//. Metodo catch:
//-Captura el error de una promesa rechazada.

//$sintaxis 1:
miPromesa
    .then((exito)=>{console.log(exito)})
    .catch((rechazo)=>{console.log(rechazo)})

//$sintaxis 2:
miPromesa.then((exito)=>{console.log(exito)}).catch((rechazo)=>{console.log(rechazo)})

//$sintaxis 3:
const manejarExito = ()=>{console.log(mensajeDeExito)};
const manejarRechazo = ()=>{console.log(mensajeDeRechazo)};
miPromesa.then(manejarExito).catch(manejarRechazo);



//. Definir funciones asincronas:
//+Dependen de que la promesa se cumpla o no para terminar de retornar el valor.
//$ Ejemplo 1:
function verificarEdad(nombre,edad){return new Promise(exito=>{console.log(`${nombre} es mayor de edad, tiene ${edad} años`)})}
verificarEdad("pedro",19); /// Devuelve: "pedro es mayor de edad, tiene 19 años"

//$ Ejemplo 2:
function verificarEdad(nombre,edad){
    return new Promise((exito,rechazo)=>{
        if(edad>18){exito(console.log((`${nombre} es mayor de edad, tiene ${edad} años`)));}
        else{rechazo(console.log((`${nombre} no es mayor de edad`)))}
    });
}
verificarEdad("Jorjelina",58); /// Devuelve: "Jorjelina es mayor de edad, tiene 58 años"
verificarEdad("Jorjito",11); /// Devuelve: "Jorjito no es mayor de edad". y luego el error.


// . Chaining Promises - Encadenamiento de Promesas:

const productosDisponibles = ["lapiz","borrador","cartuchera","regla"]

function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Corroborando si  hay "${producto}" en Stock`);
        if (productosDisponibles.includes(producto)){resolve(`Ordenando ${producto}` )}
        else {reject('Este producto no esta disponible...')}})}
        
function procesarPedido(respuestaOrden) {
    return new Promise(resolve => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: ${respuestaOrden}`);
    resolve('Gracias por tu tiempo.')})}

ordenarProducto('lapiz')
    .then(respuesta => {
        console.log('Corroboracion finalizada!');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(errorPosible => {
    console.log(errorPosible);
    });

 */

// . async y await:
//- async: Una funcion asincrona  siempre retorna una promesa.
//- await: Espera a que  termine la ejecucion una funcion para pasar a la siguiente.
//*No puede haber await sin async

// async function miFuncionAsincrona() {return 'banana'}
//   console.log(miFuncionAsincrona()); /// No registra "banana" - registra un objeto de promesa.


function funcionConPromesa() {return new Promise(resolve => {resolve('Promesa finalizada.')})}

async function miFuncionAsincrona() {
    const valorPromesa = await funcionConPromesa();
    console.log(valorPromesa);
}

function miFuncionSincrona() {
    miFuncionAsincrona().then(() => {
    console.log('Devolviendo Funcion Asincrona');
    })
}

console.log('Antes de la funcion asincrona.');
miFuncionSincrona();
console.log('Despues de la funcion asincrona.');






// const productosDisponibles = ["cebolla","mandarina","platano","tomate"]

// function ordenarProducto(producto) {
//     return new Promise((resolve, reject) => {
//         console.log(`Corroborando si  hay "${producto}" en Stock`);
//         if (productosDisponibles.includes(producto)){resolve(`Ordenando ${producto}` )}
//         else {reject('Este producto no esta disponible...')}})}
        
// function procesarPedido(respuestaOrden) {
//     return new Promise(resolve => {
//     console.log('Procesando respuesta...');
//     console.log(`La respuesta fue: ${respuestaOrden}`);
//     resolve('Gracias por tu tiempo.')})}


    


    //+ try {Prueba codigo que puede desencadenar errores} 
    //+ catch (error) {Solo se ejecuta cuando hay un error/excepción} 
    //+ finally {El código aquí siempre se ejecuta. No importa si hubo un error o no}

// async function realizarPedido(producto) {
//     try {
//     const respuesta = await ordenarProducto(producto);
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     const respuestaProcesada = await procesarPedido(respuesta);
//     console.log(respuestaProcesada);
//     } 
//     catch(errorPosible){console.log(errorPosible)}
// }

// realizarPedido('acelga');
// realizarPedido('platano');
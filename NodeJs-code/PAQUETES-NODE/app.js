//# Iniciar un archivo Json:
    //. npm init: 
        //+ Para iniciar configuracion de paquete o ejecucion de paquete.
    //$ sintaxis: npm init <-> npm init package_name
        //$parametros de la configuracion
        //+ entry point: es el archivo principal del paquete , los elementos de este archivo se van a importar cuando se use el paquete:
        //+ test command: Sirve para definir un comando de prueba para el paqeute
        //+ git repository: Sirve para asociar tu paquete con un repositorio git
        //+ keywords: Sirve para agregar tags a tu paquete, para que la comunidad de npm los identifique o asocie.
        //+ author: Sirve para asignar un nombre
    //.  npm init --yes:
        //+ Para crear un package.json por default 
        ///seria el package.json que esta creado aqui.

    

//# Json a JavaScript  

/*
const datos = require ("./formato.json");

console.log(datos);
console.log(typeof(datos)); //-  type object

//. ACCESO A CLAVES DE ARCHIVO JSON:

console.log(datos.titulo);
console.log(datos.subtitulo);
console.log(datos.frase);
console.log(datos.numero);
console.log(datos.nombres);
console.log(datos.nombres[0]);
console.log(datos.nombres[1]);
*/


//# JavaScript a Json 
/*

let info = {
    "nombre": "jorje",
    "apellido": "presagio",
    "altura": "123cm",
    "bienes": ["auto","moto","casa"]
}


//# STRINGIFY:
//+ Permite convertir un Archivo JavaScript a cadena de caracteres.
let infoJSON = JSON.stringify(info);

console.log(infoJSON)
console.log(typeof(infoJSON)); //- type string


//# PARSE:
//+ Permite convertir  una cadena de caracteres a formato JSON.
let infoJSON_Obj = JSON.parse(infoJSON);

console.log(infoJSON_Obj)
console.log(typeof(infoJSON_Obj)); //- type object


 */

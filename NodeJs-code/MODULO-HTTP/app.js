//# MODULO HTTP:

const modulo_http = require('http');


//_ createServer:
//+ Este metodo creara un servidor  y respondera a las solicitudes dependiendo de la funcion indicada
//-req: request-solicitud
//-res: response-respuesta

// const servidor_nuevo = modulo_http.createServer((req,res)=>{
//     res.end("Respuesta de servidor"); /// end Define lo que pasa al final de la creacion del servidor
// });

// //_ listen:
// //+ Determina el puerto y lo que devolvera el servidor cuando este funcionando

// servidor_nuevo.listen(3200, ()=>{
//   console.log("el servidor funciona...");
// });



//, Mejorando el servidor anterior:

//$ Ejemplo 1:
// const servidor_nuevo = modulo_http.createServer((req,res)=>{
//   res.end("Respuesta de servidor"); 
// });
// const PUERTO = 3200;
// servidor_nuevo.listen(PUERTO, ()=>{
// console.log(`Servidor escuchando en puerto http://localhost:${PUERTO}`);
// });


//$ Ejemplo 2:

const servidor_nuevo = modulo_http.createServer((req,res)=>{
  res.end("Respuesta de servidor"); 
});
const PUERTO = 3200;

funcion = ()=>{console.log(`Servidor escuchando en puerto http://localhost:${PUERTO}`);}

servidor_nuevo.listen(PUERTO, funcion());


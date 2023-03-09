const modulo_http = require('http');
const PUERTO = 3100;
//_ req:
//$ Accediendo a Las propiedades del objeto req:
// const servidor = modulo_http.createServer((req,res)=>{
//   console.log(req.url); 
//   console.log(req.method); 
//   console.log(req.headers); 
// });

  //$ Probando  diferentes metodos  mediante la extension rest client:
  // const servidor = modulo_http.createServer((req,res)=>{
  //   console.log(req.method); 
  //   res.end("buenas")
  // });

//_ res:
//$ Accediendo a Las propiedades del objeto res:
// const servidor = modulo_http.createServer((req,res)=>{console.log(res.statusCode);});
// servidor.listen(PUERTO, ()=>{console.log(`Servidor escuchando en el puerto ${PUERTO}`);})

  //$ Alterando el codigo de estado intencionalmente:
  // const servidor = modulo_http.createServer((req,res)=>{
  //   res.statusCode = 400;
  //   console.log(res.statusCode);
  // });
  // servidor.listen(PUERTO, ()=>{console.log(`Servidor escuchando en el puerto ${PUERTO}`);})
  
//, setienado y obteniendo headers:
  const servidor = modulo_http.createServer((req,res)=>{
    res.setHeader('content-type' , 'application/json');
    console.log(res.getHeaders);
  });
  
  servidor.listen(PUERTO, ()=>{console.log(`Servidor escuchando en el puerto ${PUERTO}`);})
  
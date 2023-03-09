const http = require('http');

const PUERTO = 3000;

const servidor = http.createServer((req,res)=>{
  res.end('PROBANDO NODEMON')
})


servidor.listen(3000,()=>{console.log(`servidor escuchando en el puerto ${PUERTO}`)});

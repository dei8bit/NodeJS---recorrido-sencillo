const { log } = require('console');
const httpModulo = require('http');

const comiditas = require('./productos');


const servidor = httpModulo.createServer((req,res)=>{
const {method} = req;
  switch (method) {
    case 'GET':
      return solicitudGET(req,res);
    case 'POST':
      return solicitudPOST(req,res);
    case 'PUT':
      return solicitudPUT(req,res);
    case 'DELETE':
      return solicitudDELETE(req,res);
    default:
      console.log(`El metodo ${method} no esta implementado aun`);
  }
})
const PUERTO = 3000;
servidor.listen(PUERTO,()=>{ console.log(`Servidor escuchando en el puerto ${PUERTO}`);})

function solicitudGET(req,res) {
  const path = req.url;
  if(path === '/'){res.end('Esta localizado en la ruta raiz')}
  else   if(path === '/comidas'){return res.end(JSON.stringify(comiditas.food))}
  else   if(path === '/comidas/saladas'){return res.end(JSON.stringify(comiditas.food.saladas))}
  else   if(path === '/comidas/dulces'){return res.end(JSON.stringify(comiditas.food.dulces))}
  res.statusCode = 404;
  res.end("El recurso solicitado no Existe!!");
};

function  solicitudPOST(req,res){
  const path = req.url;
  if(path === '/comidas'){return res.end('El usuario realizo una solicitud POST para agegar una comida')}
};
function  solicitudPUT(req,res){
  const path = req.url;
  if(path === '/comidas/saladas'){return res.end('El usuario desea actualizar una comida salada')}
  else if(path === '/comidas/dulces'){return res.end('El usuario desea actualizar una comida dulce')}
};

function  solicitudDELETE(req,res){
  const path = req.url;
  if(path === '/comidas/saladas'){return res.end('El usuario desea eliminar una comida salada')}
  else if(path === '/comidas/dulces'){return res.end('El usuario desea eliminar una comida dulce')}
};




/*

//#MODULO EVENTS:

/// ejemplo 1:
const eventos = require('events');
const emisor_de_evento = new eventos();

emisor_de_evento.on('evento', () => {
        console.log('Se produjo un evento');
});
emisor_de_evento.emit('evento');

/ ejemplo 2:

const eventos = require('events');
const evento_compra = new eventos();

evento_compra.on('compra', (total) => {
        console.log(`Se realizo una compra por: $ ${total}`);
});

evento_compra.emit('compra',1570);

/// ejemplo 3:

const eventos = require('events');
const evento_compras = new eventos();

evento_compras.on('compra', (total,productos) => {
        console.log(`Se realizo una compra de ${productos} productos por un  total: $ ${total}`);
});

evento_compras.emit('compra',7500,5); 

*/
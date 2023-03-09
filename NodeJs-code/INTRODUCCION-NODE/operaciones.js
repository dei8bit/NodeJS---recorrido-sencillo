function sumar(n1,n2){return n1+n2}
function restar(n1,n2){return n1-n2}
function multiplicar(n1,n2){return n1*n2}
function dividir(n1,n2){return n1/n2}
function potenciar(n1,n2){return (n1**n2)}
function raiz_cuadrada(n1){return Math.sqrt(n1)}

// Como exportar un modulo 1:
// module.exports.suma = sumar;
// module.exports.resta = restar;
// module.exports.multiplicacion = multiplicar;
// module.exports.division = dividir;

// Como exportar un modulo 2:


module.exports = {
    suma : sumar,
    resta : restar,
    multiplicacion : multiplicar,
    division : dividir,
    potencia: potenciar,
    raiz : raiz_cuadrada
}
function suma(a, b) {
    return a + b
}

function calc(a, b, callback) {
    return callback(a, b)
}

console.log(calc(2, 2, suma))

setTimeout(function (){
    console.log("Hola mundo");
}, 2000)

function saludo(name) {
    console.log(`Hola ${name}`);
}
setTimeout(saludo, 2000, 'Cristian')
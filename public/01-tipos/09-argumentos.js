// Creamos el parámetro 'a'
function sumar(a, b) {
    console.log(arguments); // Ver todos los argumentos
    return a + b;
}

let resultado = sumar(5, 6, 1, 3, 50);
console.log(resultado);

console.log(typeof sumar)
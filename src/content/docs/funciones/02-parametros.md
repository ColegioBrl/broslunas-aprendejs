---
title: Parámetros
description: El comportamiento de una función puede cambiar según los datos que le pasemos.
---

<video class="container video" controls>
    <source src="/assets/video/funciones/parametros.mp4" type="video/mp4">
</video>

Hasta ahora hemos visto como crear funciones y cómo llamarlas. Pero para poder desbloquear todo el potencial de las funciones, necesitamos que puedan recibir parámetros. Esto es, que su comportamiento pueda cambiar según los datos que le pasemos.

Imagina que queremos que nuestra función de saludar, pueda saludar a cualquier persona, no solo a Miguel. Para ello, podemos hacer que la función acepte un parámetro, que será el nombre de la persona a la que queremos saludar.

``` js title="Pasar Parámetros"
function saludar(nombre) {
  console.log("Hola " + nombre)
}
``` 
Ahora, cada vez que llamemos a la función, podemos pasarle una cadena de texto:

``` js title="Pasar Parámetros 2"
saludar('Miguel') // -> Hola Miguel
saludar('Itziar') // -> Hola Itziar
saludar('Carmen') // -> Hola Carmen
``` 

Ya ves como algo que parece tan sencillo, tiene un poder enorme. Las funciones son la base de la programación y nos permiten crear programas complejos a partir de pequeñas piezas.

Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación.

``` js title="Sumar y restar"
function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}
``` 

Y ya podríamos usarlas:

``` js title="Sumar y restar - Resultados"
const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma) // -> 5

const resultadoResta = restar(5, 2)
console.log(resultadoResta) // -> 3
``` 

## Parámetros y argumentos
En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos. A estos valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros.

``` js title="Parámetros y Argumentos"
// la función suma tiene dos parámetros: a y b
function sumar(a, b) {
  return a + b
}

// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma = sumar(2, 3)
``` 

Normalmente mucha gente confunde los términos y usa parámetro para referirse a los argumentos. Pero es importante que sepas diferenciarlos, porque son cosas distintas.

## El orden de los parámetros importa
Algo muy importante, y un error muy común al empezar a crear funciones, es olvidar que el orden de los parámetros importa.

Vamos a crear una función que simule un microondas. Le pasaremos el plato, tiempo y potencia. Y nos devolverá el resultado del plato cocinado.

``` js title="Orden de los Parámetros"
function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗'
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳'
  }

  return '❌ Plato no soportado'
}

``` 
:::tip
Sí, puedes hacer un return dentro de un condicional. Esto hace que la función se detenga y devuelva el valor indicado en el return.
:::

Si usamos bien los parámetros, la función funciona correctamente:

``` js title="Orden de los Parámetros 2"
const resultado = cocinarMicroondas('🐥', 1, 5)
console.log(resultado) // -> 🍗
``` 
Pero si cambiamos el orden de los parámetros, la función no funciona:

``` js title="Orden de los Parámetros 3"
const resultado = cocinarMicroondas(1, 5, '🐥')
console.log(resultado) // -> '❌ Plato no soportado'
``` 
Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la potencia. Si cambiamos el orden, podemos tener comportamientos inesperados o errores.

Más adelante veremos una forma en la que podemos evitar este tipo de errores.
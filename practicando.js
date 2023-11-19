/* ########## MODULO 5 - ARRAYS ########## */

// var listaDeCompras = []
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';
// var elementoDelArray = listaDeCompras[3];
// console.log(elementoDelArray);

// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// // →→→→→ PUSH y UNSHIFT
// var colores = ['Amarillo', 'Azul'];
// colores.push('Rojo');
// colores.unshift('Verde');
// console.log(colores);

// // →→→→→ POP y SHIFT
// colores.shift();
// colores.pop();
// console.log(colores);

// // →→→→→ INCLUDES
// var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
// var existeDali = pintores.includes('Dalí');
// console.log(existeDali);

// // →→→→→ EVERY
// var numeros = [ 1, 6, 8, 9, 43 ];
// var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
// console.log(cumplenCondicion);

// // →→→→→ SPLIT
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// console.log(palabraSeparada);

// // →→→→→ JOIN
// palabraSeparada.pop();
// palabraSeparada.push("y");
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// // →→→→→ FOREACH
// var numeros = [ 1, 2, 3, 4 ];
// numeros.forEach( (num) => { console.log(num) } )

// var autos = ["Masseratti", "Bugatti", "Pagani", "McLaren"]
// autos.forEach(function(auto, indice){
//     console.log(auto, indice)
//     });

// // →→→→→ MAP
// var numeros = [ 1, 2, 3, 4 ];
// var masUno = numeros.map( (num) => { return num + 1 } );
// console.log(masUno);

// var numeros = [2, 3, 4, 5];
// var productoPorTres = numeros.map( (num) => { return num * 3 } );
//     console.log(productoPorTres)
// var productoPorDos = numeros.map( (num) => { return num * 2 } );
//     console.log(productoPorDos)

// // →→→→→ FOR
// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // →→→→→ FOR...OF
// for (var numeros of arr) {
//     console.log(numeros);
// }

// // →→→→→ WHILE
// var arr = [];
// while (arr.length < 6) {
//    arr.push('Rodrigo');
// }
// console.log(arr);


// // →→→→→ REDUCE
// var palabras = ["Hola", "mi", "nombre", "es", "Rodrigo"]
// var saludo = palabras.reduce(function (acumulador, elemento){
//     return acumulador + " " + elemento
// }, "Buenas tardes, saludo: ")
// saludo

// var numeros = [1,2,3,4,5]
// var suma = numeros.reduce(function(acumulador, elemento){
//     return acumulador + elemento
// }, 0)
// suma

// function multiplicar (a,b){
//     return a * b;
// }
// var producto = numeros.reduce(multiplicar)
// producto

// // →→→→→ objeto ARGUMENTS
// function saludo(nombre, apellido){
//     console.log(arguments[3]);
//     console.log(arguments.length);
// }
// saludo ("Rodrigo", "Mario", "Bentin", "Nai")

// // →→→→→ parametro REST ...
// function suma(...args){
//     console.log(args)
//     let sum = 0;
//     for (let arg of args)
//         sum = sum + arg;
//     return sum 
// }
// var x = suma(4,8,9,12,45,31)
// console.log(x);


/* ########## MODULO 6 - OBJETOS ########## */


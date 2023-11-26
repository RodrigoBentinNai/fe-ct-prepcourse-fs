/*#########################################*/
/*########### MODULO 5 - ARRAYS ###########*/
/*#########################################*/

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



/*##########################################*/
/*########### MODULO 6 - OBJETOS ###########*/
/*##########################################*/

//Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto

//var deportes = {
//    conBalon: ['Futbol', 'Basketball', 'Golf'],
//    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
//};

//var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };



/*1 - Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.

2 - Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.

3 - Para eliminar propiedades utilizaremos una palabra reservada llamada delete.*/

// →→→→→ ACCEDER
//var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//console.log(persona.edad);
// →→→→→ ASIGNAR
//var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//persona.nombre = 'Martín';
//console.log(persona.nombre);
// →→→→→ CREAR
//var autos = {};
//autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//console.log(autos);
// →→→→→ BORRAR
//delete autos.marcas;
//console.log(autos);



/*De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.*/

// →→→→→ DOT NOTATION
//var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// →→→→→ BRACKET NOTATION
//atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);



/*El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.*/

// →→→→→ HAS OWN PROPERTY
//var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
//var tienePropiedad = libro.hasOwnProperty('nombre');
//console.log(tienePropiedad);

// →→→→→ KEYS
//var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
//var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades);*/

//  →→→→→ FOR...IN
//let mundo = { continentes: 7, paises: 195, oceanos: 5};
//for (let prop in mundo) {
//   console.log('Esta es la propiedad: ', prop);
//   console.log('Este es el valor: ', mundo[prop]);
//}

// →→→→→ THIS
//var mascota = {
//   animal: 'Perro',
//   raza: 'Ovejero Alemán',
//   amistoso: true,
//   dueño: 'María López',
//   info: function () {
//      console.log('Mi perro es un  ' + this.raza);
//   },
//};
//mascota.info();



/*##########################################*/
/*########### MODULO 7 - ....... ###########*/
/*##########################################*/
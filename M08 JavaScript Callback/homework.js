/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var nombreMayus = "";
   var primeraLetra = nombre.charAt(0).toUpperCase()
   for(var i = 1; i < nombre.length; i++){
      nombreMayus= nombreMayus + nombre[i]
   }
   nombre = primeraLetra + nombreMayus;
   return nombre;

   //if (nombre.length === 0) {
   //   return nombre;
   //}
   //return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var resultado = arrayOfNumbers.reduce(function(suma, numero){
      return suma + numero
   },0)
   cb(resultado)
   
   //let suma = 0;
   //for (let numero of arrayOfNumbers) {
   //   suma += numero;
   //}
   //cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(cb)
   
   //for (let elemento of array) {
   //   cb(elemento);
   //}

   //for (var i = 0; i =array.length; i++){
   //   cb(array[i])
   //}
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArray = array.map(function(elemento){
      return cb(elemento)
   })
   return nuevoArray;

   //var nuevoArray = []
   //for (var i = 0; i < array.length; i++){
   //   nuevoArray.push(cb(array[i]))
   //}
   //return nuevoArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArray = arrayOfStrings.filter(function(elemento){
      return elemento[0] === "a"
   })
   return nuevoArray;

   //var newArray = [];
   //for (var i = 0; i < arrayOfStrings.length; i++) {
   //   if(arrayOfStrings[i][0] === "a"){
   //      newArray.push(arrayOfStrings[i])
   //   }
   //}
   //return newArray;

   //var newArray = [];
   //for (var i = 0; i < arrayOfStrings.length; i++) {
   //   var elemento = arrayOfStrings[i];
   //   if (elemento.charAt(0).toLowerCase() === 'a') {
   //      newArray.push(elemento);
   //   }
   //}
   //return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

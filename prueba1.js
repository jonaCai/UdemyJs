console.log("Hola mundo de elfos felices!")
/* distintos formas de definir variables:
VAR, variables globales
LET, variables limitadas al alcnce del bloque donde se definen
CONST, variables inmutables (globales?)

*/

var saludo='Hola, soy un var'
if(saludo){
    var saludo='HOLA elfo var'
    console.log(saludo)
}
console.log(saludo) //ambos var son iguales


let nombre= 'Hola, soy un let'
if(nombre){
    let nombre='Anatola'
    console.log(nombre)
}

console.log(nombre) //ambos nombres seran distintos, por la limitacion del let.

const pi=3.14
//pi=50 // tira error ya que no puede setearse nuevamente su valor.
console.log(pi)

// Tipos de variables

var identificador= 'Alejo alejo' //string

var numero=50 //number

const realPI=Math.PI //decimal

var verdadero=true //bool

var nulo= null // null

var indefinido= undefined // no es null? es indefinido.
/*ejemplos null vs undefinednode
var testVar = null
alert(testVar) //shows null
alert(typeof testVar) //shows object
//null por otro ado puede ser asignado a una variable como representacion de no valor.
//undefines es un tipo de dato mientras que null es un objeto.

var testVar
alert(testVar) //shows undefined
alert(typeof testVar) //shows undefined
//como vemos undefined es una variable que fue deflarada pero que aun no se le asigno un valor
*/

console.log(typeof verdadero) // nos devuelve el tipo de dato de la variable


console.log(realPI)

//VARIABLES STRINGS Y SUS METODOS
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
//concatenacion de texto

var name='jonh'
var old=28

console.log('My name is:'+ name+' and I am '+old+' years old.' )

//interpolacion de texto
console.log(`My name is: ${name} and I am ${old} years old`)
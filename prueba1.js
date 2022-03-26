console.log("Hola mundo de elfos felices!")
/* distintos formas de definir variables:
VAR, variables globales
LET, variables limitadas al alcnce del bloque donde se definen
CONST, variables inmutables (globales?)

*/
console.log('Var VS Let')
var saludoVar='Hola, soy un var'
if(saludoVar){
    var saludoVar='HOLA elfo var'
    console.log(saludoVar)
}
console.log(saludoVar) //ambos var son iguales


let saludoLet= 'Hola, soy un let'
if(saludoLet){
    let saludoLet='Ahora soy otro let'
    console.log(saludoLet)
}

console.log(saludoLet) //ambos nombres seran distintos, por la limitacion del let.

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

//algunos metodos

console.log(name.toLocaleUpperCase()) //toLowerCase()
console.log(name+' tiene'+name.length+' letras') 


//OPERADORES
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores

//operadores aritmeticos:
var a= 2
var resolucion
console.log('operadores aritmeticos')
//+,-,*,/,%,**, ++, --
//abreviado:
resolucion= a+1
console.log('a=a+1:'+ resolucion)
resolucion= a+=1
console.log('a+=1:'+ resolucion)
resolucion= a**=3
console.log('a**=3:'+ resolucion)
console.log('a++:'+ resolucion++ )
console.log('a--:'+ a--)





//operadores de comparacion: ==,!=,===,!==,>,>=,<,<=
var a2='2'
var a3=3 
var test
console.log('Operadores de comparacion:')
test= a==a2
console.log('a==a2: '+ test)//true a pesar de que uno es strign y el otro number.
test= a === a2
console.log("a === a2: "+ test) // false:el triple igual compara no solo el valor sino tambien el tipo de dato.
test= a != a2
console.log("a != a2: "+ test )//false
test= a !== a2
console.log("a !== a2: "+ test) //true
test= a >= 3
console.log('a >= 3: '+ test) //false


// Operadores Logicos &&, ||, ! (not)
var v= true
var f= false
console.log('Operadores logicos')
test= v && f
console.log('v && f'+test) //false
test=v || f
console.log('v || f'+test) //true
test=!f

console.log('!f: '+test) //true

//operadores ternario: condicion? true:false
console.log('Operador ternario: ')
console.log(' condicion? true:false')
console.log('var res=edad>=18? Es mayor de edad:Es menor de edad...')
var edad= 19
var res= edad>=18? console.log("Es mayor de edad"): console.log("Es menor de edad")


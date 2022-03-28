//
//VARIABLES
//
/* distintos formas de definir variables:
VAR, variables globales
LET, variables limitadas al alcnce del bloque donde se definen
CONST, variables inmutables (globales?)

*/
console.log("DISTINTAS FORMAS DE DEFINIR UNA VARIABLE:")

console.log('Var VS Let')

console.log('VAR')
var saludoVar='Hola, soy un var.'
console.log(saludoVar)
if(saludoVar){
    var saludoVar='Soy el mismo var dentro de un if'
    console.log(saludoVar)
}
console.log("valor de var fuera del if: ")
console.log(saludoVar) //ambos var son iguales
console.log("VAR es global, por lo cual al cambiar su valor sea en el entorno que sea, cambia globalmente.")

console.log("LET")
let saludoLet= 'Hola, soy un let'
console.log(saludoLet)
if(saludoLet){
    let saludoLet='Ahora soy el mismo let dentro de un if'
    console.log(saludoLet)
}
console.log("valor del let fuera del if: ")
console.log(saludoLet) //ambos nombres seran distintos, por la limitacion del let.
console.log("Let no es global, por lo cual el valor modificado dentro del if solo sera dentro del if, no fuera, por eso vuelve al estado inicial fuera.")

//constantes
console.log("Constantes: ")
const pi=3.14
//pi=50 // tira error ya que no puede setearse nuevamente su valor.
console.log(pi)
console.log("Las constantes no puede volver a setearse una vez adquirieron valor.")

//
// TIPOS DE VARIABLES
//

console.log("Tipos de variables:")

var identificador= 'Alejo alejo' //string
console.log("string :"+ identificador)
var numero=50 //number
console.log("number :"+ numero)
const realPI=Math.PI //decimal
console.log("decimal :"+ realPI)
var verdadero=true //bool
console.log("booleano: "+verdadero)
var nulo= null // null
console.log("Null :"+nulo)
var indefinido= undefined // no es null? es indefinido.
console.log("undefined: "+indefinido)
/*ejemplos null vs undefined
var testVar = null
alert(testVar) //shows null
alert(typeof testVar) //shows object
//null por otro lado puede ser asignado a una variable como representacion de no valor.
//undefines es un tipo de dato mientras que null es un objeto.

var testVar
alert(testVar) //shows undefined
alert(typeof testVar) //shows undefined
//como vemos undefined es una variable que fue deflarada pero que aun no se le asigno un valor
*/

console.log("Podemos obtener el tipo de datos de una variable mediante typeof, por ejemplo de la variable booleana verdadero:")
console.log(typeof verdadero) // nos devuelve el tipo de dato de la variable


//
//VARIABLES STRINGS Y SUS METODOS
//

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
//concatenacion de texto
console.log("CONCATENACION DE TEXTO:")
var name='jonh'
var old=28

console.log('My name is:'+ name+' and I am '+old+' years old. Se concatenaron als variables name y old' )


//interpolacion de texto
console.log(`My name is: ${name} and I am ${old} years old. Se concatenaron las mismas variables pero mediante interpolacion de texto con comillas invertidas y signo de dolar`)

//algunos metodos
console.log("metodo toLocaleUpperCase: ")
console.log(name.toLocaleUpperCase()) //toLowerCase()
console.log("metodo length: ")
console.log(name+' tiene'+name.length+' letras') 

//
//OPERADORES
//
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores

//
//operadores aritmeticos:
//
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

//
//operadores de comparacion: ==,!=,===,!==,>,>=,<,<=
//
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

//
// Operadores Logicos &&, ||, ! (not)
//
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

//
// FUNCIONES
//crear

function saludo(name, a, b){
    console.log('Hola '+ name +', 1 + 1 es:')
    return a+b
}

//imprimir
console.log(saludo(name, 1,1))
saludo(name,1,1) //no devuelve el return

//
//ARROWS FUNCTION --}->
//

var acceso=true

/* Manera 1

var accesoUser= function(a){
    return a
}
*/
//Manera dos o simplificada

//var accesoUser =a =>a

//sin parametros:

//var accesoUser=()=> false

//mas de un parametro

var accesoUser= (a,name)=>{
    console.log('running user '+ name)
    return a
}

accesoUser(acceso, 'Barush')==true
? console.log('User permitted')
:console.log('User denied')

/*
function saludo(name, a, b){
    console.log('Hola '+ name +' el resultado de la suma es:')
    return a + b
}
*/
//misma funcion de saludo pero en arrow.
var saludo2 = (name, a,b) => console.log('Hola '+name+' el resultado es:'+(a+b))

saludo2('Ashanti',1,1)

//
// FUNCIONES NUMERICAS
//
//isInteger
var num = 'cincuenta'
var res= Number.isInteger(num)

console.log(res)
//parseInt
var num1=25.25
var res1=Number.parseInt(num1)

console.log(res1)
//parseFloat()-toFixed(aca va el numero de decimales)
var num2=28.2554159
var res2=Number.parseFloat(num2).toFixed(3)

console.log(res2)


//
//Objetos
//

//definicion

var user="almirante"
var miObjeto ={
    //clave : valor

    nombre : "jonh", //clave,
    tema: "OBJETOS",
    anio : 2020,
    mes :12,
    importante: true,
    texto: "usuario: "+user,
    miFuncion: (an,me)=>an/me, //se pueden tener funciones dentro de un objeto

    miOtroObjeto:{
        nombre:"Otro Objeto",
        apellido: "Objetero",
    },    //objeto dentro de otro objeto, hay herencia? ._o?
    fecha: new Date()


}

console.log(miObjeto.tema)
console.log(miObjeto.nombre+ " " +miObjeto.texto+ " "+ miObjeto.miFuncion(miObjeto.anio,miObjeto.mes))


//desestructuracion de objetos
//sirve para acceder a una pripiedad del objeto sin poner el nombre del objeto
var {nombre}=miObjeto.miOtroObjeto
console.log(nombre)

var otraFuncion =({texto})=>texto

console.log(otraFuncion(miObjeto))

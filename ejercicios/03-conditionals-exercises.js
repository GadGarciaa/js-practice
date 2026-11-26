// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let name = "Gadiel"

if (name == "Gadiel"){
    console.log("Bienvenido Gadiel")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

let user = "admin"
let password = "1234"

if (user == "admin" && password == "1234"){
    console.log("Usuario y contraseña correctos")
} else{
    console.log("Usuario y contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let num = -1

if (num > 0){
    console.log("Su número es positivo")
} else if (num == 0){
    console.log("Su número es 0")
} else {
    console.log("Su número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

let age = 16

if (age >= 18){
    console.log("Puedes votar")
} else{
    console.log(`Te faltan: ${18 - age} año(s)`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

age = 24

const message = age >= 18 ? "Eres adulto" : "Eres menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

let mes = 12

if (mes === 12 || mes === 1 || mes === 2){
    console.log("Invierno")
} else if (mes === 3 || mes === 4 || mes === 5){
    console.log("Primavera")
}else if (mes === 6 || mes === 7 || mes === 8){
    console.log("Verano")
}else if (mes === 9 || mes === 10 || mes === 11){
    console.log("Otoño")
} else{
    console.log("Mes invalido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

if (mes < 1 || mes > 12){
    console.log("Mes invalido")
} else if (mes === 2){
    console.log("Este mes solo tiene 28 días")
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
    console.log("Tu mes tiene 30 días")
} else{
    console.log("Tu mes tiene 31 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let language = "de"
let greeting

switch (language){
    case "es":
        greeting = "Hola, este es un saludo en español"
        break
    case "en":
        greeting = "Hello, this is a greeting in English"
        break
    case "fr":
        greeting = "Bonjour, ceci est une salutation en français" 
        break
    case "pt":
        greeting = "Olá, esta é uma saudação em português" 
        break
    case "it":
        greeting = "Ciao, questo è un saluto in italiano" 
        break
    case "de":
        greeting = "Hallo, das ist eine Begrüßung auf Deutsch" 
        break
    case "ja":
        greeting = "こんにちは (Konnichiwa)" 
        break
    default:
        greeting = "Idioma invalido"
}
console.log(greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

let season

switch (mes){
    case 12:
    case 1:
    case 2:
        season = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        season = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        season = "Verano"
        break
    case 9:
    case 10:
    case 11:
        season = "Otoño"
        break
    default:
        season = "Mes invalido"
}
console.log(season)

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

let days

switch (mes){
    case 2:
        days = "Tu mes tiene 28 días"
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = "Tu mes tiene 31 días"
        break
    case 4:
    case 6:
    case 9:
    case 11:
        days = "Tu mes tiene 30 días"
        break
    default:
        days = "Mes invalido"
}
console.log(days)
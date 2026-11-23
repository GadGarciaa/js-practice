// 1. Concatena dos cadenas de texto.

let myString = "Hola"
let myString2 = myString + " mundo!"
console.log(myString2)

// 2. Muestra la longitud de una cadena de texto.

console.log(myString2.length)

// 3. Muestra el primer y último carácter de un string.

console.log(myString2[0])
console.log(myString2[10])

// 4. Convierte a mayúsculas y minúsculas un string.

console.log(myString2.toUpperCase())
console.log(myString2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.

let myString3 = `Hola este
es mi
mensaje en
varias 
lineas`

console.log(myString3)

// 6. Interpola el valor de una variable en un string.

let name = "Gadiel"
console.log(`Hola, mi nombre es ${name}.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

console.log("Hola mundo desde JavaScript".replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(myString2.includes("mundo"))

// 9. Comprueba si dos strings son iguales.

console.log(myString2 === "Hola mundo!")

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(myString2.length === "Hola mundo!".length)

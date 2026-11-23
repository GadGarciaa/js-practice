// Strings

// Concatenación
let myName = "Gadiel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Gadiel"))
console.log(greeting.indexOf("García"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("García"))
console.log(greeting.includes("Gadiel"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Gadiel", "Emiliano"))

// Template literals
let message = `Hola este 
es mi 
curso de 
JavaScript`

console.log(message)

let email = "gegg1704@gmail.com"

console.log(`Hola, ${myName}! tu email es ${email}.`)
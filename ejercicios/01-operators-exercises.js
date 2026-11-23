// 1. Crea una variable para cada operación aritmética.

let a = 5
let b = 10

let sum = a + b
let rest = a - b
let product = a * b
let quotient = a / b
let remainder = a % b
let exponentiation = a ** b

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.

let myVariable = sum += 2
let myVariable2 = rest -= 2
let myVariable3 = product *= 2
let myVariable4 = quotient /= 2
let myVariable5 = remainder %= 2
let myVariable6 = exponentiation **= 2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

console.log(10 > 5)
console.log(5 < 10)
console.log(10 >= 10)
console.log(5 <= 10)
console.log(10 == 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(5 > 10)
console.log(10 < 5)
console.log(35 >= 45)
console.log(45 <= 35)
console.log(1 == 2)

// 5. Utiliza el operador lógico and.

console.log(10 > 5 && 50 < 100)

// 6. Utiliza el operador lógico or.

console.log(10 > 5 || 50 < 25)

// 7. Combina ambos operadores lógicos.

console.log(10 > 5 && 50 < 100 || 10 > 5)

// 8. Añade alguna negación.

console.log(!(10 > 5))

// 9. Utiliza el operador ternario.

const isStudent = true
isStudent ? console.log("Bienvenido, eres estudiante") : console.log("Eres invitado, registrate")

// 10. Combina operadores aritméticos, de comparación y lógicas.

let x = 10
let y = 5

console.log(x + y === 10 && x - y === 5 || x * y == 50)
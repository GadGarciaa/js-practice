// if, else if, else

// if (Sí)

let age = 24

if (age == 22){
    console.log("La edad es 22")
}

// else (Sí No)

if (age == 22){
    console.log("La edad es 22")
} else {
    console.log("La edad no es 22")
}

// else if (Sí No, Sí No)

if (age == 22){
    console.log("La edad es 22")
} else if (age < 18){
    console.log("Es menor de edad")
} else if (age == 18){
    console.log("Es mayor de edad")
} else{
    console.log("La edad no es 22 ni es menor de edad")
}

// operador ternario

const message = age == 24 ? "La edad es 24" : "La edad no es 24"
console.log(message)

// switch

let day = 0
let dayname

switch (day){
    case 7:
        dayname = "Lunes"
        break
    case 1:
        dayname = "Martes"
        break
    case 2:
        dayname = "Miércoles"
        break
    case 3:
        dayname = "Jueves"
        break 
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sábado"
        break
    case 6:
        dayname = "Domingo"
        break
    default:
        dayname = "Día no válido"       
}
console.log(dayname)
/*
console.log("Hola, Mundo");
let nombre = "Juan pablo";
let edad = 30;
// operadores
edad --; // decremento
edad ++; // incremento
let n1 = 5;
let n2 = 10;
let suma = n1 + n2; // suma
let resta = n2 - n1; // resta
let multiplicacion = n1 * n2; // multiplicacion
let division = n2 / n1; // division
console.log("La suma es: " + suma);
console.log("la resta es: " + resta);
console.log("la multiplicacion es: " + multiplicacion);
console.log("la division es: " + division);
el hijo de rana rin rin renacuajo 
console.log("Mi nombre es " + nombre);
// estructura condicional
let edad = -3;
if (edad < 0) {
    console.log("no ha nacido");
} else if (edad >= 0 && edad <= 5) {
    console.log("primer infancia ");
} else if (edad > 5 && edad <= 12) {
    console.log("infancia");
} else if (edad > 12 && edad <= 18) {
    console.log("adolescencia");
} else {
    console.log("adultez");
}

// ciclo fo
for (let x = 1; x <= 10; x++) {
    console.log("************");
    console.log("Tabla del " + x);
    for (let i = 1; i <= 10; i++) {
        console.log (x + " x " + i + " = " + (x*i));
    }
}
*/
let c=1;
while (c <= 10) {
    console.log("************");
    console.log("Tabla del " + c);
    let j = 1;
    while (j <= 10) {
        console.log(c + " x " + j + " = " + (c*j));
        j++;
    }
    c++;
}
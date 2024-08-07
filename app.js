let titulo = document.querySelector('h1').textContent = "Desafio 2---> Funciones con JavaScript";

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarFunction(){
    alert("¡Hola, mundo!");
};

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludarFunction() {
    let nombre = prompt("Cual es tu nombre:");
    if (nombre) {
        alert(`¡Hola, ${nombre}`);
    }
};

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doblarNumero() {
    let numero = prompt("Escribe un numero: ");
    if (!isNaN(numero)){
        alert (numero * 2);
    } else {
        alert("Por favor, introduce un número válido.");
    }
};

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "));
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
    let num3 = parseFloat(prompt("Ingrese el tercer numero: "));
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        alert (`El promedio es igual a :  ${((num1 + num2 + num3) / 3)}`);    
    }
};

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "));
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
    if (num1>num2){
        alert(`Este es el numero mayor: ${num1}`);
    }else if (num1<num2){
        alert(`Este es el numero mayor: ${num2}`);
    }    
};


// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicaFunction() {
    let num1 = parseFloat(prompt("Dame un número: "));
    if (!isNaN(num1)) {
        alert(`El resultado es: ${num1 * num1}`);
    } else {
        alert("Por favor, introduce un número válido.");
    }
}
// Cálculo del IMC
function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let imc = peso / (altura * altura);
    document.getElementById('resultadoIMC').innerText = `Tu IMC es ${imc.toFixed(2)}`;
}

// Cálculo del Factorial
function calcularFactorial() {
    let numero = parseInt(document.getElementById('numeroFactorial').value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById('resultadoFactorial').innerText = `El factorial de ${numero} es ${factorial}`;
}

// Conversión de Dólares a Reales
function convertirDolares() {
    let dolares = parseFloat(document.getElementById('dolares').value);
    let reales = dolares * 4.80;
    document.getElementById('resultadoConversion').innerText = `${dolares} dólares equivalen a R$${reales.toFixed(2)}`;
}

// Cálculo del Área y Perímetro de una Sala Rectangular
function calcularSalaRectangular() {
    let altura = parseFloat(document.getElementById('alturaRect').value);
    let anchura = parseFloat(document.getElementById('anchuraRect').value);
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    document.getElementById('resultadoSalaRect').innerText = `Área: ${area} m², Perímetro: ${perimetro} metros`;
}

// Cálculo del Área y Perímetro de una Sala Circular
function calcularSalaCircular() {
    let radio = parseFloat(document.getElementById('radio').value);
    let area = 3.14 * radio * radio;
    let perimetro = 2 * 3.14 * radio;
    document.getElementById('resultadoSalaCirc').innerText = `Área: ${area} m², Perímetro: ${perimetro} metros`;
}

// Mostrar la Tabla de Multiplicar
function mostrarTablaMultiplicar() {
    let numero = parseInt(document.getElementById('numeroMultiplicar').value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById('resultadoTabla').innerText = resultado;
}




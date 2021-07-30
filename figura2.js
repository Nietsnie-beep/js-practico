// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
    return lado > 0 ? lado * 4 : 'Ingresar un valor válido'
}

function areaCuadrado(lado) {
    return lado > 0 ? lado * lado : 'Ingresar un valor válido'
}

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 > 0 & lado2 > 0 & base > 0 ? lado1 + lado2 + base : 'Ingresar valores válido'
}

function areaTriangulo(altura, base) { 
    return altura > 0 & base > 0 ? (base * altura)/2 : 'Ingresar valores válido'
}

// Funciones que encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
    return radio > 0 ? radio * 2 : 'Ingresar un valor válido'
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return radio > 0 ? diametro * Math.PI  : 'Ingresar un valor válido'
}

function areaCirculo(radio) {
    return radio > 0 ? (radio * radio) * Math.PI : 'Ingresar un valor válido'
}

//dom
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

const calcularAreaCuadrado = () =>{
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

const calcularAreaTriangulo = (lado1, lado2, base) => {
    const input = document.getElementById('InputTriangulo');
    const value = input.value;

    const altura = Math.sqrt((lado1)**2-(base/2)**2);
    return altura;
}
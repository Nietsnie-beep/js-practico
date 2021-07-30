//codigo del cuadrado

console.group("Cuadrados")
const ladoCuadrado = 5;
console.log(`los lados de cuadrado miden ${ladoCuadrado}`)

function perimetroCuadrado(lado){
    
    return lado * 4;
}

perimetroCuadrado()

function areaCuadrado(lado){

    lado * lado;
} 

//console.log(`El perimetro de cuadrado miden ${perimetroCuadrado}`)

console.log(`El area del cuadrado mide ${areaCuadrado}`);
console.groupEnd()

//codigo del triangulo
console.group('triangulos')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTringulo = 5.5;
console.log(`los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, y ${baseTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perimetro del triangulo es ${perimetroTriangulo}`)

const areaTriangulo = (baseTriangulo * alturaTringulo) / 2
console.log(`El area del triangulo mide ${areaTriangulo}cm^2`);


console.groupEnd();

console.group('Circulos');

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo miden ${radioCirculo}cm`);

//Diametro
const diametroCirculo = radioCirculo * 2;


//PI
const PI = Math.PI;

//cicurferencia
const perimtroCirculo = diametroCirculo * PI;

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;


console.groupEnd();
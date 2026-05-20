const grade = document.querySelector(".grade")
const numeros = grade.querySelectorAll('.numb')

const calc = document.querySelector('.calc');
const multi = calc.querySelector('.multi');
const divis = calc.querySelector('.divis');
const soma  = calc.querySelector('.soma');
const sub   = calc.querySelector('.sub');
const igual = calc.querySelector('.igual');
const reset = calc.querySelector('.reset');


let numeroAtual = '';
let resultado = 0;
let expressao = '';
let operador = '';

function clicarNumero() {
    numeroAtual += this.textContent;
    console.clear();
    console.log(expressao + numeroAtual);
}

function clicarSoma() {
    resultado += Number(numeroAtual);
    expressao += numeroAtual + '+';
    numeroAtual = '';
    operador = '+';

    console.clear();
    console.log(expressao);
}

function clicarIgual() {
    if (operador === '+') {
        resultado += Number(numeroAtual);
        expressao += numeroAtual;

        numeroAtual = String(resultado);

        console.clear();
        console.log(numeroAtual);

        expressao = '';
        resultado = 0;
        operador = '';
    }
}

function clicaReset(){
    console.clear()
    numeroAtual = expressao = operador = ''
    resultado = 0
    console.log(numeroAtual)
    
}



for(let i=0; i<numeros.length; i++){
    numeros[i].onclick = clicarNumero
}

soma.onclick = clicarSoma
igual.onclick = clicarIgual
reset.onclick = clicaReset


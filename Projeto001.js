const grade = document.querySelector(".grade")
const numeros = grade.querySelectorAll('.numb')
const tela = document.querySelector(".telacalc")

const calc = document.querySelector('.calc');
const multi = calc.querySelector('.multi');
const divis = calc.querySelector('.divis');
const soma  = calc.querySelector('.soma');
const sub   = calc.querySelector('.sub');
const igual = calc.querySelector('.igual');
const reset = calc.querySelector('.reset');
const apaga = calc.querySelector('.apaga');
const ponto = calc.querySelector('.ponto');


let numeroAtual = '';
let resultado = 0;
let expressao = '';
let operador = '';

function clicarNumero() {
    numeroAtual += this.textContent;
    tela.innerHTML = expressao + numeroAtual;
}

function clicarSoma() {

    resultado += Number(numeroAtual)
    expressao += numeroAtual + '+'
    numeroAtual = ''
    operador = '+'
    tela.innerHTML = expressao
}   
   

function clicarSub() {
    resultado += Number(numeroAtual)
    expressao += numeroAtual + '-'
    numeroAtual = ''
    operador = '-'
    tela.innerHTML = expressao
}
   

function clicarMulti(){
    resultado += Number(numeroAtual)
    expressao += numeroAtual + '*'
    numeroAtual = ''
    operador = '*'
    tela.innerHTML = expressao
}

function clicarDivi(){
    resultado += Number(numeroAtual)
    expressao += numeroAtual + '/'
    numeroAtual = ''
    operador = '/'
    tela.innerHTML = expressao
}

function clicarIgual() {
    if (operador === '+') {
        resultado += Number(numeroAtual);
        expressao += numeroAtual;
        numeroAtual = String(resultado);
        tela.innerHTML = numeroAtual

        expressao = '';
        resultado = 0;
        operador = '';
    } else if (operador === '-'){
        resultado -= Number(numeroAtual);
        expressao += numeroAtual;
        numeroAtual = String(resultado);
        tela.innerHTML = numeroAtual

        expressao = '';
        resultado = 0;
        operador = '';
    } else if (operador === '*'){
        resultado *= Number(numeroAtual);
        expressao += numeroAtual;
        numeroAtual = String(resultado);
        tela.innerHTML = numeroAtual

        expressao = '';
        resultado = 0;
        operador = '';
    } else if (operador === '/'){
        resultado /= Number(numeroAtual);
        expressao += numeroAtual;
        numeroAtual = String(resultado);
        tela.innerHTML = numeroAtual

        expressao = '';
        resultado = 0;
        operador = '';
    }
}

function apagaNumb(){
    if(numeroAtual.length > 0){
        numeroAtual = numeroAtual.slice(0,-1)//corta o último número
    }else if(expressao.length > 0){
        expressao = expressao.slice(0, -1)
    }

    tela.innerHTML = expressao + numeroAtual

}

function clicaReset(){
    numeroAtual = expressao = operador = ''
    resultado = 0
    tela.innerHTML = numeroAtual
    
}

function clicaPonto(){
    if(numeroAtual.includes('.')){
        return
    }

    if(numeroAtual === ''){
        numeroAtual = '0.'
    }else{
        numeroAtual += '.'
    }

    tela.innerHTML = expressao + numeroAtual

}



for(let i=0; i<numeros.length; i++){
    numeros[i].onclick = clicarNumero
}

soma.onclick = clicarSoma
sub.onclick = clicarSub
divis.onclick = clicarDivi
multi.onclick = clicarMulti
igual.onclick = clicarIgual
reset.onclick = clicaReset
apaga.onclick = apagaNumb
ponto.onclick = clicaPonto

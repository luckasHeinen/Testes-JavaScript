function somar (a, b) {
    return a+b;
}
function subtrair (a, b) {
    return a-b;
}
function multiplicar (a, b) {
    return a*b;
}
function dividir (a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

let historico = [];

function calcular(num1, operador, num2) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = somar(num1, num2);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            return "Operador inválido! Use +, -, * ou /";
    }
    
    if (typeof resultado === 'number') {
        historico.push(`${num1} ${operador} ${num2} = ${resultado}`);
    }
    return resultado;
}
function verHistorico() {
    return historico;
}

console.log(calcular(10, '+', 5));
console.log(calcular(20, '/', 4));
console.log(calcular(10, '/', 0)); 
console.log(calcular(8, '*', 3));

console.log('--- HISTÓRICO ---');
console.log(verHistorico());
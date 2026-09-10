let tipoTexto = 'tipoTexto';
let tipoNumero = 3.15;
let verdadeiro = true;
let falso = false;
let tipoNulo = null;
let tipoIndefinido;

let nome = 'Harry Potter';
let idade = 210;
let souUmBruxo = true;

let cidade = 'Parauapebas';
cidade = 'Rio de Janeiro';

const meuNome = 'Lucas';

let minhaIdade = 24;

let email = 'email@trybe.com';
    email = 'outroEmail@trybe.com';

let idade = 20;
idade = 21;

let tecnologia = 'HTML';
tecnologia = 'JavaScript';

let pontuacao = 0;
pontuacao = 100;

let canal = 'Youtube';
canal = 'Twitch';

let clima = 'Ensolarado';
clima = 'chuvoso'

let preco = 49.90;
preco = 39.90

let statusLog = false;
statusLog= true;

let idioma = 'inglês';
idioma = 'português';

let nivel = 1;
nivel = 2;

const PI = 3.14;
const paisNascimento = 'Brasil';
const anoNascimento = 2002;
const cpf = '05738623037';
const diasDaSemana = 7;
const nomeCompleto = 'Lucas Silva Heinen';
const horasDoDia = 24;
const linguaMaterna = 'Português';
const codigoGlobal = 'XYZ-123';
const mesesDoAno = 12;

let primeiroNumero = 178;
let segundoNumero = 93;
const resultadoDaSoma = primeiroNumero + segundoNumero;
console.log(resultadoDaSoma);

let primeiroNumero = 133;
let segundoNumero = 87;
const resultadoDaSubtracao = primeiroNumero - segundoNumero;
console.log(resultadoDaSubtracao);

let dividendo = 192;
let divisor = 12;
const resultadoDaDivisao = dividendo / divisor;
console.log(resultadoDaDivisao);

/***** Não altere essas linhas *****/
let multiplicador = 133;
let multiplicando = 13;

/***** Escreva seu código nas linhas abaixo *****/
const resultadoDaMultiplicacao = multiplicador * multiplicando
console.log(resultadoDaMultiplicacao);

let base = 2;
let expoente = 10;
const potencia = base ** expoente;
console.log(potencia);

let dividendo = 11;
let divisor = 3;
const restoDaDivisao = dividendo % divisor;
console.log(restoDaDivisao);

let roupa1 = 35;
let roupa2 = 20;
const compras = roupa1 + roupa2;
console.log(compras);

const orcamento = compras <= 60;
console.log(orcamento);

let idadeDaThays = 53;
let idadeDoDouglas = 49;
const comparacao1 = idadeDaThays > idadeDoDouglas;
console.log(comparacao1);

const comparacao2 = idadeDoDouglas < idadeDaThays;
console.log(comparacao2);

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

const comparacao1 = nomePessoa1 !== 'Sheila';
console.log(comparacao1);

const comparacao2 = idadePessoa1 === 18;
console.log(comparacao2);

const comparacao3 = nomePessoa2 === 'Cleyton';
console.log(comparacao3);

const comparacao4 = idadePessoa2 !== 30;
console.log(comparacao4);

/***** Não altere os códigos dentro desse bloco *****/
let sapato = 15;
let chinelo = 22;
let pantufa = 33;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/
const verificacao1 = sapato >= 15;
console.log(verificacao1);

const verificacao2 = chinelo >= 12;
console.log(verificacao2);

const verificacao3 = pantufa <= 18;
console.log(verificacao3);

/***** Não altere os códigos dentro desse bloco *****/
let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;
/***** Não altere os códigos dentro desse bloco *****/

/***** Escreva seu código nas linhas abaixo *****/
const verificacao1 = senhaDigitada1 === senhaDoWiFi;
console.log(verificacao1);

const verificacao2 = senhaDigitada2 === senhaDoWiFi;
console.log(verificacao2);

const verificacao3 = senhaDigitada3 === senhaDoWiFi;
console.log(verificacao3);

const verificacao4 = senhaDigitada4 === senhaDoWiFi;
console.log(verificacao4);

/***** Não altere os códigos dentro desse bloco *****/
let numero = 30;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/
let resultado = numero >= 20 && numero <= 50 && numero % 2 === 0;
console.log(resultado);

let local = 'praia';
let estadoEmocional = local === 'praia' || local === cinema;
console.log(estadoEmocional);

/***** Não altere os códigos dentro desse bloco *****/
let temOxigenioNoEspaco = true;
let aTerraEPequena = true;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/
temOxigenioNoEspaco = !temOxigenioNoEspaco;
aTerraEPequena = !aTerraEPequena;

/***** Não altere os códigos dentro desse bloco *****/
let login = 'joabCassimiro';
let senha = '12345678';
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/
let verificaCredenciais = login === 'joabCassimiro' && senha === '12345678';
console.log(verificaCredenciais);

/***** Não altere os códigos dentro desse bloco *****/
let gostoPorPraia = false;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/
let novoGostoPorPraia = !gostoPorPraia;
console.log(gostoPorPraia);

let idade = 18;
let estudante = true;
let temDesconto = idade < 18 || estudante === true;
console.log(temDesconto);

let usuario = 'admin';
let senha = '1234';
let ipBloqueado = false;
let acessoPermitido = usuario === 'admin' && senha === '1234' && !ipbloqueado;

let menuAberto = false;
menuAberto = !menuAberto;

let ligarMotor = true;
let statusCarro;
function checarMotor() {
    if (ligarMotor) {
        statusCarro = 'Motor ligado';
    }
}

let pontos = 0;
let passouDeFase = true;
function calcularPontuacao () {
    if (passouDeFase) {
        pontos = pontos + 100;
    }
}

let idade = 18;
function verificarIdade() {
    let resultado;
    if (idade >= 18) {
        resultado = 'Maior de idade';
    } else resultado = 'Menor de idade';
    return resultado;
}

let cumpoValido = true;
let valorCompra = 150;
let valorFinal;
function aplicarDesconto () {
    if (valorCompra >= 100 && cumpoValido) {
        valorFinal = valorCompra - 20;
    } else valorFinal = valorCompra;
    return valorFinal;
}

let usuarioAtivo =true;
let possuiPermissao = true;
let statusAcesso;
function validarAcesso() {
    if (usuarioAtivo && possuiPermissao) {
        statusAcesso = 'Acesso Concedido';
    } else statusAcesso = 'Acesso Negado';
    return statusAcesso;
}

let notaAluno = 85;
function avaliarDesempenho() {
    let conceito;
    if (notaAluno >= 90) {
        console.log('Excelente');
    } else if (notaAluno >= 70) {
        console.log('Bom');
    } else if (notaAluno >= 50) {
        console.log('Regular');
    } else {
        console.log('Insuficiente');
    }
    return conceito;
}

let eClienteVip = false;
let valorCarrinho = 200;
let freteGratis;
function calcularFrete() {
    if (eClienteVip || valorCarrinho >= 200) {
        let freteGratis = true;
    } else freteGratis = false;
return freteGratis;
}

/***** Escreva suas variáveis ​​nas linhas abaixo *****/
let atribuirMensagem = true;
let mensagem;
function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
if (atribuirMensagem) {
 mensagem = 'Olá, Tryber!';
 }
}

let lampada = 'ligada';
let estadoLampada;
function ifElseExercise () {
    if (lampada === 'ligada') {
        estadoLampada = 'A lâmpada está ligada';
    } else estadoLampada = 'A lâmpada está desligada';
}

/***** Não altere os códigos dentro desse bloco *****/
let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
media = (nota1 + nota2) / 2;

if (media >= 7) {
  resultado = 'Pessoa estudante aprovada';
} else {
  resultado = 'Pessoa estudante reprovada';
}
}

let num = 22;
let mensagem;

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (num % 2 === 0) {
    mensagem = `${num} é par!`;
  } else {
    mensagem = `${num} é ímpar!`;
  }
}
/***** Não altere os códigos dentro desse bloco *****/
let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
if (usuario === 'tryber' && senha === 'tr1b3') {
  autenticacao = 'Autenticação válida!'; 
} else {
  autenticacao = 'Login e/ou senha incorretos';
}
}

let corSemaforo = 'amarelo';
let acao;

function verificarSemaforo () {
    if (corSemaforo === 'verde')
        acao = 'Pode Passar';
    else if (corSemaforo === 'amarelo')
        acao = 'Atenção reduza a velocidade!';
    else
        acao = 'Pare o veículo!';
    return acao;
}
console.log('Ação do motorista:', verificarSemaforo ());

let nota = 6.5;
let resultado;

function avaliarNota () {
    if (nota >= 7)
        nota = 'Aprovado';
    else if (nota < 7 && nota >= 5.0)
        nota = 'Em recuperação';
    else 
        nota = 'Reprovado';
    return nota;
}
console.log('Status do aluno:', avaliarNota ());

let numero = 15;
let tipoNumero

function checarParOuImpar() {
    if (numero % 2 === 0) {
        tipoNumero = 'O número é par';
    } else {
        tipoNumero = 'O número é ímpar';
    return tipoNumero;
}
}
console.log('Resultado:', checarParOuImpar());

let clima = 18
let recomendacao;

function checarClima () {
    if (clima > 25) {
    recomendacao = 'Dia quente, use roupas leves!';
} else if (clima < 15) {
        recomendacao = 'Dia frio, leve um casaco!';
        else 
            recomendacao = 'Clima agradável!';
        return recomendacao;
}
}
console.log('Recomendação:', checarClima ());

let cupom = 'DESCONTO10';
let mesagem;

function validarCumpom () {
    if (cupom === 'DESCONTO10');
    mensagem = 'Cupom válido! você ganhou 10% de desconto.';
    else 
        mesagem = 'Cupom inválido ou expirado.';
    return mensagem;
}
console.log('Status do cupom:', validarCumpom ());

let pontos = 450;
let nivel;

function calcularNivel() {
    if (pontos >= 1000);
    nivel = 'Lendário';
    else if (pontos >= 500);
    nivel = 'Veterano';
    else if (pontos >= 100);
    nivel = 'Iniciante';
    else
        nivel = 'Novato';
    return nivel;
}
console.log('Nível do jogador:', calcularNivel());

let alturaBrinquedo = 1.50;
let idade = 11;
let resultadoAcesso;

function verificarAcessoBrinquedo () {
    if (alturaBrinquedo >= 1.40 && idade >= 12) {
        resultadoAcesso = 'Acesso Liberado';
    } else {
        resultadoAcesso = 'Acesso Negado';
    }
    return resultadoAcesso;
}
console.log('Resultado do acesso:', verificarAcessoBrinquedo ());

let valorCompra = 120;
let cupom = 'FRETEGRATIS';
let valorFrete;

function calculatFrete() {
    if (valorCompra >= 200 || cupom === 'FRETEGRATIS') {
        valorFrete = 0;
    } else if (valorCompra > 100) {
        valorFrete = 30;
    } else {
        valorFrete = 50;
    }
    return valorFrete;
  }
  console.log('Valor do frete:', calculatFrete());

let peso = 75;
let altura = 1.75;
let classificacao;

function calcularIMC() {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25.0) {
        classificacao = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 30.0) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }
    return classificacao;
}
console.log('Classificação do IMC:', calcularIMC());    



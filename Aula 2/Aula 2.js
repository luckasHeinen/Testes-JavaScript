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

let atribuirMensagem = true ;
let mensagem;

function IfElseExercise(){
    if (atribuirMensagem)
}

function calcularIMC() {
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25.0) return 'Peso normal';
    if (imc < 30.0) return 'Sobrepeso  ';

    return 'Obesidade';
}

let idade = 18;
let mensagem;

if (idade >= 18) {
  mensagem = 'Pode Votar';  
} else {
mensagem = 'Não pode votar ainda';
}
console.log(mensagem);

let velocidade = 85;
let mensagem;

if (velocidade > 80) {
    mensagem = 'Multado por excesso de velocidade!';
} else {
    mensagem = 'Dentro do limite permitido.';
}
console.log(mensagem);

let senha = '12345';
let mensagem;

if (senha === '12345') {
    mensagem = 'Acesso permitido';
} else {
    mensagem = 'Senha incorreta';
}
console.log(mensagem);

let produtos = 5;

if (produtos === 0) {
produtos = 'Estoque esgotado';
} else {
    produtos = 'Produto dispnível em estoque';
}
console.log(produtos);

let temperatura = 38.2
let statusSaude;

if (temperatura >= 37.8) {
    statusSaude = 'Pessoa com febre';
} else {
    statusSaude = 'Temperatura normal';
}

console.log(statusSaude);

let valorCarrinho = 120;

if (valorCarrinho >= 150) {
    valorCarrinho = 'Você ganhou frete grátis!';
} else {
    valorCarrinho = 'Frete pago pelo clienet';
}
console.log(valorCarrinho);

let hora = 20;
let turno;

if (hora < 18) {
    turno = 'Turno Diurno';
} else {
    turno = 'Turno Noturno';
}
console.log(turno);

let nota = 6.5;
let resultado;

if (nota >= 7.0) {
    resultado = 'Aprovado';
} else if (nota >= 5.0) {
    resultado = 'Recuperação';
} else {
resultado = 'Reprovado';
}
console.log(resultado);

let idade = 15;
let statusCategoria;

if (idade < 12) {
    statusCategoria = 'Categoria infantil';
} else if (idade < 18) {
statusCategoria = 'Categoria Juvenil';
} else {
    statusCategoria = 'Categoria Adulto';
}
console.log(statusCategoria);

let imc = 27.4;
let diagnostico;

if (imc < 18.5) {
    diagnostico = 'Abaixo do peso';
} else if (imc < 25) {
diagnostico = 'Peso normal';
} else if (imc < 30) {
diagnostico = 'Sobrepeso';
} else if (imc < 35) {
    diagnostico = 'Obesidade grau 1';
} else {
    diagnostico = 'Obesidade graus 2 ou superior';
}
console.log(diagnostico);

let salario = 3500;
let aliquota;

if (salario <= 2000) {
    aliquota = 'Isento de imposto';
} else if (salario <= 3000) {
    aliquota = 'Alíquota de 7.5%';
} else if (salario <= 4500) {
    aliquota = 'Alíquota de 15%';
} else if (salario <= 6000) {
    aliquota = 'Alíquota de 22.5%';
} else {
    aliquota = 'Alíquota máxima de 27.5%';
}
console.log(aliquota);

let temPassagem = true;
let classe = 'Econômica';
let temPrioridade = false;
let mensagem;

if (temPassagem === false) {
  mensagem = 'Embarque negado: Passagem inválida.';
} else if (classe === 'Primeira Classe') {
  mensagem = 'Embarque liberado: Sala VIP e prioridade total!';
} else if (classe === 'Econômica' && temPrioridade === true) {
  mensagem = 'Embarque liberado: Fila preferencial.';
} else {
  mensagem = 'Embarque liberado: Fila comum.';
}
console.log(mensagem);

let temSintomas = true;
let pressaoAlta = false;
let febreAlta = true;
let mensagemTriagem;

if (temSintomas === false) {
    mensagemTriagem = 'Sem necessidade de atendimento de emergência.';
} else if (temSintomas === true && pressaoAlta === true && febreAlta === true) {
    mensagemTriagem = 'Prioridade Vermelha: Atendimento Imediato!';
} else if (febreAlta === true && pressaoAlta === false) {
    mensagemTriagem = 'Prioridade Amarela: Atendimento em até 30min.';
} else {
    mensagemTriagem = 'Prioridade Verde: Atendimento geral';
}
console.log(mensagemTriagem);

let nomeSujo = false;
let salario = 3000;
let tempoEmpregoAnos = 1;
let statusEmprestimo;

if (nomeSujo === true) {
    statusEmprestimo = 'Empréstimo negado: Restrição no CPF.';
} else if (nomeSujo === false && salario >= 5000) {
    statusEmprestimo = 'Empréstimo aprovado: Limite VIP liberado!';
} else if (salario >= 2000 && tempoEmpregoAnos >= 2) {
    statusEmprestimo = 'Empréstimo aprovado: Limite Padrão.';
} else if (salario >= 2000 && tempoEmpregoAnos < 2) {
    statusEmprestimo = 'Empréstimo em análise: Tempo de trabalho insuficiente.';
} else {
    statusEmprestimo = 'Empréstimo negado: Renda mínima não atingida';
}
console.log(statusEmprestimo);

let temPassagem = true;
let classe = 'Econômica';
let temPrioridade = false;
let mensagem;

if (temPassagem === false) {
    mensagem = 'Embarque negado: Passagem inválida';
} else if (temPassagem === true && classe === 'Primeira classe') {
    mensagem = 'Embarque liberado: Sala VIP e propriedade total';
} else if (temPassagem === true && classe === 'Econômica' && temPrioridade === true) {
    mensagem = 'Embarque liberado: Fila preferencial.';
} else {
    mensagem = 'Embarque liberado: Fila comum.';
}
console.log(mensagem);

let idade = 25;
let eEstudante = true;
let statusIngresso;

if (idade < 6){
statusIngresso = 'Entrada Gratuita';
} else if (idade >= 60 || eEstudante === true) {
    statusIngresso = 'Meia-Entrada (50% de desconto)';
} else {
    statusIngresso = 'Ingresso Inteiro';
}
console.log(statusIngresso);

let altura = 1.35;
let idade = 8;
let acompanhado = true;
let mensagem;

if (altura < 1.20) {
    mensagem = 'Acesso negado: Altura mínima não atingida.'
} else if (altura >= 1.20 && idade < 10 && acompanhado === false) {
    mensagem = 'Acesso negado: Necessário acompanhante maior de idade.'
} else {
    mensagem = 'Acesso liberado! Divirta-se.'
}

console.log(mensagem);

let valorCompra = 250;
let primeiraCompra = false;
let cupom = 'PROMO';
let desconto;

if (cupom === 'VIP') {
    desconto = '30% de desconto';
} else if (valorCompra >= 300 || primeiraCompra === false) {
    desconto = '15% de desconto';
} else {
    desconto = 'Sem desconto aplicado';
}
console.log(desconto);

let idade = 22;
let nomeSujo = false;
let rendaMensal = 3500;
let valorEntrada = 60000;
let statusCredito;

if (idade < 18) {
    statusCredito = 'Crédito negado: Cliente menor de idade.'
} else if (nomeSujo === false && rendaMensal >= 4000) || valorEntrada >= 50000 {
    statusCredito = 'Crédito aprovado!';
} else {
    statusCredito = 'Crédito negado: Renda ou entrada insuficiente.';
}
console.log(statusCredito);

let ehInternacional = false;
let valorProduto = 150;
let possuiCupomFrete = true;
let mensagemFrete;

if (ehInternacional === true) {
  // Bloco Internacional
  if (valorProduto > 50) {
    mensagemFrete = 'Taxa de importação aplicada + Frete R$ 50';
  } else {
    mensagemFrete = 'Isento de taxa + Frete R$ 30';
  }
} else {
  // Bloco Nacional (ehInternacional === false)
  if (valorProduto >= 200 || possuiCupomFrete === true) {
    mensagemFrete = 'Frete Grátis Nacional';
  } else {
    mensagemFrete = 'Frete fixo R$ 15';
  }
}

console.log(mensagemFrete);

const listaDeCompras = ['Maçã','Biscoito/Bolacha','Banana','Café em pó', 'Leite', 'Arroz'];
console.log(listaDeCompras);

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
/***** Escreva seu código nas linhas abaixo *****/

console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas[4]);
console.log(`${frutas[0]} e ${frutas[2]}`)

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
/***** Escreva seu código nas linhas abaixo *****/
convidados[2] = 'Laura';
convidados.push('Guilherme', 'Leticia');
console.log(convidados);

const sabores = ['Chocolate', 'Morango', 'Açaí', 'Creme', 'Flocos'];
const coberturas = ['Chocolate', 'Morango', 'Doce de leite'];
console.log('Quantidade de sabores de sorvete: 5');
console.log('Quantidade de sabores de cobertura: 3');

listaInvertida = [5, 4, 3, 2, 1];

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

function inverteArray() {
  /***** Escreva seu código nas linhas abaixo *****/
  if (inverter === true) {
    listaInvertida = [5, 4, 3, 2, 1];
    console.log(listaInvertida);
  } else {
    console.log(lista);
  }
}

let frutas = ['Maçã', 'Banana', 'Laranja'];
frutas[1] = 'Morango';
console.log(frutas);

let tarefas = ['Lavar a louça', 'Arrumar o quarto'];
tarefas.push('Estudar JavaScript');
tarefas.shift();
console.log(tarefas);

let carrinho = ['Mouse', 'Teclado', 'Monitor'];
let indice = carrinho.indexOf('Teclado');
if (indice !== -1) {
    carrinho.[indice] = 'Teclado Mecânico'
} 
console.log(carrinho);

let numeros = [10, 20, 30, 40, 50];
let inverterLista = true;
let resultado;

if (inverterLista === true) {
   resultado = numeros.reverse();
} else {
    resultado = numeros;
}
console.log(resultado);

let notas = [4.5, 8.0, 6.5, 9.0, 7.5, 5.0];
let aprovados = [];
aprovados = notas.filter(nota => nota >= 7.0);
console.log(aprovados);
console.log(`Quantidade de aprovados: ${aprovados.length}`);

let convidados = ['Lucas', 'Mateus', 'Baetriz', 'Fernanda'];
let mensagem;

if (convidados.includes('Ana')){
    mensagem = 'Acesso liberado: Convidados confirmados.';
} else {
    mensagem = 'Acesso negado: Nome não está na lista.';
}
console.log(mensagem);

let filaAtendimento = ['Cliente 1','Cliente 2','Cliente 3','Cliente 4','Cliente 5'];
let proximosAntendidos;

proximosAtendidos = filaAtendimento.slice(0, 3);

console.log(proximosAtendidos);

let palavras = ['Aprender', 'JavaScript', 'é', 'muito', 'massa!'];
let fraseFinal;

fraseFinal = palavras.join(' ');
console.log(fraseFinal);

let compras = ['Arroz', 'Feijão', 'Sabão em pó', 'Leite'];
let posicao = compras.indexOf('Sabão em pó');

if (posicao !== -1) {
  compras[posicao] = 'Detergente';
}

console.log(compras);

let preços = [120.0, 35.5, 80.0, 15.0, 49.9, 99.0];
let produtosBaratos;

produtosBaratos = preços.filter(preço => preço < 50.0);
console.log(`Quantidade de produtos em promoção: ${produtosBaratos.length}`);

let fila = ['Ana', 'Bruno', 'Diego'];
fila.unshift('Carlos');
fila.pop();
console.log(fila);

let tarefasManha = ['Estudar JS', 'Fazer exercício'];
let tarefasTarde = ['Limpar o quarto', 'Ler livro'];
let todasAsTarefas = tarefasManha.concat(tarefasTarde);

console.log(todasAsTarefas);

let precos = [10, 20, 30, 40];
let precosComAumento = precos.map(valor => valor * 1.1);

console.log(precosComAumento);

const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
/***** Escreva seu código nas linhas abaixo *****/
listaDeFrutas.push('manga');
console.log(listaDeFrutas);

const valoresProdutos = [10, 12, 8];
let somaTotal = 0;
/***** Escreva seu código nas linhas abaixo *****/
for(let index = 0; index < valoresProdutos.length; index++) {
somaTotal += valoresProdutos[index];
}
console.log(somaTotal);

const multiplicador = [3, 7];
/***** Escreva seu código nas linhas abaixo *****/
for (let m = 0; m < multiplicador.length; m++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${multiplicador[m]} x ${i} = ${multiplicador[m] * i}`);
  }
}

let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo'];
cores[1] = 'Roxo';
cores.push = ('Laranja');
console.log(cores.length);

let frutas = ['Maçã', 'Banana', 'Manga', 'Morango'];

console.log(frutas.indexOf('Manga'));  // Imprime: 2
console.log(frutas.includes('Uva'));   // Imprime: false

let letras = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
let primeiraPalavra;

primeiraPalavra = letras.slice(0, 4);
primeiraPalavra = primeiraPalavra.join('');
console.log(primeiraPalavra);

let notas = [8, 6, 9, 7, 10];
let soma = 0;

for(let index = 0; index < notas.length; index++) {
    soma += notas[index];
console.log(`Soma total: ${soma}`);
} 

let produtos = ['Teclado', 'Rato', 'Monitor', 'Cadeira'];
produtos[1] = 'Headset';
produtos.unshift('Webcam'); 
produtos.push('Mousepad');
console.log(produtos.length);

let cidades = ['Porto Alegre', 'Canoas', 'Novo Hamburgo', 'Pelotas'];
cidades.indexOf('Canoas');
cidades.includes('Sapucaia');

console.log(cidades);
console.log(cidades.includes);

let sigla = ['D', 'E', 'V', '2', '0', '2', '6'];
let categoria = sigla.slice(0, 3);
categoria = categoria.join('');

console.log(categoria);

let precos = [15.0, 85.0, 42.5, 120.0, 30.0, 200.0];
let precosBaixos = precos.filter(preco => preco < 50.0);
console.log(`Quantidade de preços baixos: ${precosBaixos.length}`);

let jogos = ['Starfield', 'Cyberpunk', 'Valhalla'];
  jogos.push('Doom');
  jogos.unshift('Zelda');
  jogos.pop(2);
  console.log(jogos);
  console.log(`Numero total de jogos: ${jogos.length}`);

let consoles = ['PlayStation', 'Xbox', 'Switch', 'PC'];  

 console.log(consoles.indexOf('Xbox'));
 console.log(consoles.includes('Playstation 5'));

let palavra = ['S', 'T', 'A', 'L', 'K', 'E', 'R'];

 let fatia = palavra.slice(0, 4);
 fatia = fatia.join('');
 console.log(fatia);


 let notas = [4.5, 8.0, 6.5, 9.2, 3.0, 7.5];
 let notasAprovadas = notas.filter(notas => notas >= 7.0);
console.log(`notas = ${notasAprovadas.length}`);

let carros = ['Civic', 'Corolla', 'Golf'];
 carros.push('Golf GTI');
 carros.unshift('Jetta');
 carros.shift(0);
 carros.pop(2);
 console.log(carros);
 console.log(carros.length);

let perifericos = ['Teclado', 'Rato', 'Headset', 'Monitor'];
 
 console.log(perifericos.indexOf('Headset'));
 console.log(perifericos.includes('Webcam'));

let estoque = ['Fonte', 'Processador', 'Placa de Vídeo', 'Memória RAM'];
let indice = estoque.indexOf('Processador');

if (indice !== -1) {
  estoque[indice] = 'Processador i7';
} else {
  estoque.push('Processador i7');
}

console.log(estoque);

let tags = ['javascript', 'github', 'vscode', 'unifi'];

let tagsFormatadas = tags.map(tag => tag.toUpperCase());
console.log(tagsFormatadas.join(' | '));

let hardware = [
  { nome: 'Teclado', preco: 150 },
  { nome: 'Rato', preco: 80 },
  { nome: 'Monitor', preco: 900 },
  { nome: 'Mousepad', preco: 40 }
];

let hardwareBarato = hardware.filter(item => item.preco <= 100);

for (let item of hardwareBarato) {
  console.log(item.nome); // Fica DENTRO do laço!
}

let dadosBrutos = ['  LUCAS  ', '  ANA ', '  CARLOS', ' MARCOS  '];

let dadosLimpos = dadosBrutos.map(nome => nome.trim());
let dadosFiltrados = dadosLimpos.filter(nome => nome.startsWith('C') || nome.startsWith('M'));

console.log(dadosFiltrados);

let servicos = ['Rede', 'Suporte', 'Servidor', 'Backup'];

let posicao = servicos.indexOf('Suporte');
if (posicao !== -1) {
    servicos[posicao] = 'Suporte Técnico';
} else {
    servicos.push('Suporte Técnico');
}
console.log(servicos);

let utilizadores = ['lucas', 'mateus', 'ana'];

let utilizadoresMaiusculos = utilizadores.map(u => u.toUpperCase());
console.log(utilizadoresMaiusculos.join(' - '));

let rede = [
  { dispositivo: 'Switch UniFi', status: 'ativo' },
  { dispositivo: 'Router MikroTik', status: 'inativo' },
  { dispositivo: 'Access Point', status: 'ativo' }
];
let dispositivosAtivos = rede.filter(item.status === 'ativo');
for (let item of dispositivosAtivos); {
    console.log(item.dispositivo);
}

let codigos = ['  dev1 ', '  qa2  ', ' dev3', '  ops4  '];

let codigosLimpos = codigos.map(codigo => codigo.trim());
let codigosDev = codigosLimpos.filter(codigo => codigo.startsWith('d'));
console.log(codigosDev);

let cargos = ['Analista', 'Suporte', 'Técnico', 'Estagiário'];
let index = cargos.filter('Técnico');
if (index !== -1) {
    codigos[index] = 'Técnico de Redes';
} else {
    cargos.unshift('Técnico de Redes');
}
console.log(cargos);

let servidores = ['dns-primary', 'dhcp-server', 'web-prod'];

let servidoresMaiusculos = servidores.map(servidor => servidor.toUpperCase());
console.log(servidoresMaiusculos.join(' / '));

let chamados = [
  { id: 101, prioridade: 'alta' },
  { id: 102, prioridade: 'baixa' },
  { id: 103, prioridade: 'alta' },
  { id: 104, prioridade: 'media' }
];

let chamadosUrgentes = chamados.filter(item.prioridade === 'alta');
console.log(`Total urgentes: ${chamadosUrgentes.length}`);

let ficheiros = ['  relatorio.pdf ', '  foto.png', '  dados.csv  ', '  resumo.pdf '];
let ficheirosLimpos = ficheiros.map(ficha => ficha.trim());
let ficheirosFiltrados = ficheirosLimpos.filter(f => f.startsWith('r'));
console.log(ficheirosFiltrados);

function mostrarFrase() {
return 'Vamo que vamo!';
}
console.log(mostrarFrase());

function saudacao(nome) {
const mensagem = 'Olá, ' + nome + '!'; 
  return mensagem; 
}
console.log(saudacao('Olá, Julia!'));

function clientePedido(numeroPedido) {
  if (numeroPedido === 1){
    return 'Pizza de Calabresa';
  } else if (numeroPedido === 2){
    return 'Pizza de Quatro Queijos';
  } else if (numeroPedido === 3){
    return 'Pizza de Frango com Catupiry';
  } else if (numeroPedido === 4){
    return 'Pizza de Brigadeiro';
  } else {
    return 'Número do pedido inválido!';
  }
}
console.log(clientePedido(1));
console.log(clientePedido(5));
let chamados = [];
let proximoId = 1;

function abrirChamado(usuario, descricao, prioridade) {
    const novoChamado = {
        id: proximoId++,
        usuario: usuario,
        descricao: descricao,
        prioridade: prioridade,
        status: 'Aberto',

    };
    chamados.push(novoChamado);
    return `Chamado #${novoChamado.id} aberto com sucesso para ${usuario}.`;
}

function listarChamados() {
    return chamados;
}

console.log(abrirChamado('Ana', 'Impressora do 2º andar sem toner', 'Média'));
console.log(abrirChamado('Carlos', 'Lentidão no sistema principal', 'Alta'));

console.log('--- LISTA DE CHAMADOS ---');
console.log(listarChamados());

function atualizarStatus(id, novoStatus) {
    const chamado = chamados.find(item => item.id === id);

    if (!chamado) {
        return 'Erro: Chamado #${id} não encontrado.';
    }
    chamado.status = novoStatus;
    return `Status do chamado #${id} alterado para "${novoStatus}" com sucesso!`;
}

function filtrarPorPrioridade(prioridade) {
    return chamados.filter(item => item.prioridade.toLowerCase() === prioridade.toLowerCase());
}

// Abrindo chamados de teste
abrirChamado('Ana', 'Impressora do 2º andar sem toner', 'Média');
abrirChamado('Carlos', 'Lentidão no sistema principal', 'Alta');
abrirChamado('Mariana', 'Cabo de rede danificado', 'Alta');

console.log('--- ATUALIZANDO STATUS ---');
console.log(atualizarStatus(2, 'Em Andamento'));
console.log(atualizarStatus(1, 'Resolvido'));

console.log('--- CHAMADOS COM PRIORIDADE ALTA ---');
console.log(filtrarPorPrioridade('Alta'));

console.log('--- TODOS OS CHAMADOS ---');
console.log(listarChamados());

// 5. Função para gerar um relatório estatístico dos chamados
function relatorioChamados() {
  const total = chamados.length;
  const abertos = chamados.filter(item => item.status === 'Aberto').length;
  const emAndamento = chamados.filter(item => item.status === 'Em Andamento').length;
  const resolvidos = chamados.filter(item => item.status === 'Resolvido').length;

  return {
    totalChamados: total,
    abertos: abertos,
    emAndamento: emAndamento,
    resolvidos: resolvidos
  };
}

console.log('--- RELATÓRIO GERAL DE TI ---');
console.log(relatorioChamados());

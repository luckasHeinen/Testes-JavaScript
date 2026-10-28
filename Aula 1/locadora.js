let filmes = [];
let inventario = [];
let clientes = [];
let historicoLocacoes = [];

let proximoFilmeId = 1;
let proximoClienteId = 1;

function cadastrarFilme(nome, categoria, quantidade) {
    const novoFilme = {
        id: proximoFilmeId++,
        nome: nome,
        categoria: categoria,
    };
    filmes.push(novoFilme);

    inventario.push({
        filmeId: novoFilme.id,
        quantidade: quantidade
    });

    return `Filme "${nome}" cadastrado com sucesso! (ID: ${novoFilme.id})`;
}

function cadastrarCliente(nome) {
    const novoCliente = {
        id: proximoClienteId++,
        nome: nome
    };
    clientes.push(novoCliente);
    return `Cliente "${nome}" cadastrado com sucesso! (ID: ${novoCliente.id})`;
  }

console.log(cadastrarFilme('De volta para o futuro', 'Ficção Científica', 2));
console.log(cadastrarFilme('Scarface', 'Drama', 1));
console.log(cadastrarFilme('Homem Aranha', 'Ação', 0)); 

console.log(cadastrarCliente('Lucas Silva'));
console.log(cadastrarCliente('João Pedro'));

console.log('--- FILMES ---');
console.log(filmes);

console.log('--- INVENTÁRIO ---');
console.log(inventario);

console.log('--- CLIENTES ---');
console.log(clientes);

function alugarFilme(filmeId, clienteId, diasParaEntregar, valor) {
    const filme = filmes.find(f => f.id === filmeId);
    const cliente = clientes.find(c => c.id === clienteId);
    const itemInventario = inventario.find(i => i.filmeId === filmeId);

    if (!filme) return `Erro: Filme ID ${filmeId} não encontrado.`;
    if (!cliente) return `Erro: Cliente ID ${clienteId} não encontrado.`;
    if (!itemInventario || itemInventario.quantidade <= 0) {
        return `Erro: Filme "${filme.nome}" não tem unidades disponíveis no momento.`;
    }

    inventario.quantidade--;

    const novaLocacao = {
        id: historicoLocacoes.length + 1,
        filmeId: filmeId,
        nomeFilme: filme.nome,
        clienteId: clienteId,
        nomeCliente: cliente.nome,
        dataLocacao: new Date().toLocaleDateString('pt-BR'),
        diasParaEntregar: diasParaEntregar,
        dataEntrega: null,
        valor: valor
    };
    
    historicoLocacoes.push(novaLocacao);
       return `Sucesso: Filme "${filme.nome}" alugado para ${cliente.nome} por R$ ${valor.toFixed(2)}!`;
}

cadastrarFilme('De volta para o futuro', 'Ficção Científica', 2);
cadastrarFilme('Scarface', 'Drama', 1);
cadastrarFilme('Homem Aranha', 'Ação', 0); 

cadastrarCliente('Lucas Silva');
cadastrarCliente('João Pedro');

console.log('--- TESTANDO LOCAÇÕES ---');
console.log(alugarFilme(1, 1, 3, 12.50)); 
console.log(alugarFilme(2, 2, 5, 15.00)); 
console.log(alugarFilme(3, 1, 2, 10.00)); 

console.log('\n--- ESTOQUE ATUALIZADO ---');
console.log(inventario);

console.log('\n--- HISTÓRICO DE LOCAÇÕES ---');
console.log(historicoLocacoes);

function devolverFilme(locacaoId) {
    const locacao = historicoLocacoes.find(l => l.id === locacaoId);
    if (!locacao) return `Erro: Locação ID ${locacaoId} não encontrada.`;
    if (locacao.dataEntrega !== null) return 'Aviso: O filme "${locacao.nomeFilme}" já foi devolvido anteriormente.';

    locacao.dataEntrega = new Date().toLocaleDateString('pt-BR');
    
    const itemInventario = inventario.find(i => i.filmeId === locacao.filmeId);
    if (itemInventario) {
        itemInventario.quantidade++;
    }
    return `Sucesso: Filme "${locacao.nomeFilme}" devolvido pelo cliente ${locacao.nomeCliente}!`;
}

console.log('\n--- TESTANDO DEVOLUÇÃO ---');
console.log(devolverFilme(1));

console.log('\n--- ESTOQUE APÓS DEVOLUÇÃO ---');
console.log(inventario);

console.log('\n--- HISTÓRICO ATUALIZADO ---');
console.log(historicoLocacoes);

function listarFilmesDisponiveis() {
    return inventario
        .filter(item => item.quantidade > 0)
        .map(item => {
            const filme = filmes.find(f => f.id === item.filmeId);
            return {
                id: filme.id,
                nome: filme.nome,
                categoria: filme.categoria,
                quantidadeDisponivel: item.quantidade
            };
        });
}

function filtrarFilmesPorCategoria(categoria) {
  return filmes.filter(f => f.categoria.toLowerCase() === categoria.toLowerCase());
}

function relatorioConsolidado() {
  const totalLocacoes = historicoLocacoes.length;
  const valorTotalFaturado = historicoLocacoes.reduce((acc, loc) => acc + loc.valor, 0);
  const pendentesDevolucao = historicoLocacoes.filter(loc => loc.dataEntrega === null).length;

  return {
    totalLocacoes: totalLocacoes,
    valorTotalFaturado: `R$ ${valorTotalFaturado.toFixed(2)}`,
    pendentesDevolucao: pendentesDevolucao
  };
}

console.log('\n--- FILMES DISPONÍVEIS ---');
console.log(listarFilmesDisponiveis());

console.log('\n--- FILMES DA CATEGORIA DRAMA ---');
console.log(filtrarFilmesPorCategoria('Drama'));

console.log('\n--- RELATÓRIO CONSOLIDADO ---');
console.log(relatorioConsolidado());


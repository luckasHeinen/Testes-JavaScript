let inventario = [
  { id: 1, nome: 'Switch UniFi 24P', categoria: 'Redes', status: 'Ativo' },
  { id: 2, nome: 'Router MikroTik', categoria: 'Redes', status: 'Manutenção' },
  { id: 3, nome: 'Chromebook Kiosk', categoria: 'Dispositivos', status: 'Ativo' }
];

function adicionarEquipamento(nome, categoria) {
    let novoItem = {
        id: inventario.length + 1,
        nome: nome,
        categoria: categoria,
        status: 'Ativo'
    }
    inventario.push(novoItem);
    return `Equipamento "${nome}" adicionado com sucesso com o ID ${novoItem.id}.`;
}
console.log(adicionarEquipamento('Access Point AP-AC', 'Redes'));

function filtrarPorStatus(statusDesejado) {
    let resultado = inventario.filter(function (item) {
        return item.status === statusDesejado;
    });
    return resultado;
}
console.log(filtrarPorStatus('Ativo'));

function atualizarStatus(idEquipamento, novoStatus) {
    for(let item of inventario) {
        if(item.id === idEquipamento) {
            item.status = novoStatus;
            return `Status do equipamento "${item.nome}" atualizado para "${novoStatus}".`;
        }
    }
    return `Equipamento com ID ${idEquipamento} não encontrado.`;
}

console.log(atualizarStatus(2, 'Ativo'));
console.log(atualizarStatus(99, 'Ativo'));

function relatorioGeral() {
    let relatorio = inventario.length;
    let ativos = inventario.filter(item => item.status === 'Ativo').length;
    let manutencao = inventario.filter(item => item.status === 'Manutenção').length;
    return `Relatório Geral:\nTotal de Equipamentos: ${relatorio}\nAtivos: ${ativos}\nEm Manutenção: ${manutencao}`;
}
console.log(relatorioGeral());

function removerEquipamento(idEquipamento) {
    let index = inventario.findIndex(item => item.id === idEquipamento);
    if (index !== -1) {
        let nomeRemovido = inventario[index].nome;
        inventario.splice(index, 1);
        return `Equipamento "${nomeRemovido}" (ID: ${idEquipamento}) foi removido do inventario.`;
    } else {
        return `Não foi possível remover: Equipamento com ID ${idEquipamento} não encontrado.`;
    }
}

function buscarPorNome (termo) {
    let termoMinusculo = termo.toLowerCase();

    let resultado = inventario.filter(item => item.nome.toLowerCase().includes(termoMinusculo));
    return resultado;
}

// Teste de Busca
console.log('--- Busca por "Unifi" ---');
console.log(buscarPorNome('Unifi'));

// Teste de Remoção
console.log('--- Remoção do ID 2 ---');
console.log(removerEquipamento(2));

// Relatório Atualizado após remoção
console.log('--- Relatório Atualizado ---');
console.log(relatorioGeral());


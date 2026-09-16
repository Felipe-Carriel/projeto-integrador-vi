const Produto = require('../models/produtos');

const produtos = [
    new Produto(1, 'Notebook', 6700),
    new Produto(2, 'Mouse', 120)
];

function listarProdutos() {
    return produtos;
}

function buscarProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

function criarProduto(nome, preco) {
    const novoId = produtos.length + 1;

    const novoProduto = new Produto(
        novoId,
        nome,
        preco
    );

    produtos.push(novoProduto);

    return novoProduto;
}

function atualizarProduto(id, nome, preco) {
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return null;
    }

    produto.nome = nome;
    produto.preco = preco;

    return produto;
}

function atualizarParcialProduto(id, dados) {
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return null;
    }

    if (dados.nome !== undefined) {
        produto.nome = dados.nome;
    }

    if (dados.preco !== undefined) {
        produto.preco = dados.preco;
    }

    return produto;
}

function deletarProduto(id) {
    const index = produtos.findIndex(
        produto => produto.id === id
    );

    if (index === -1) {
        return null;
    }

    const produtoRemovido = produtos.splice(index, 1);

    return produtoRemovido[0];
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
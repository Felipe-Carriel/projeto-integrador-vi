const produtosService = require('../services/produtos.service');

function listarProdutos(req, res) {
    const produtos = produtosService.listarProdutos();

    return res.status(200).json(produtos);
}

function buscarProdutoPorId(req, res) {
    const id = Number(req.params.id);

    const produto = produtosService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

function criarProduto(req, res) {
    const { nome, preco } = req.body;

    const produto = produtosService.criarProduto(
        nome,
        preco
    );

    return res.status(201).json(produto);
}

function atualizarProduto(req, res) {
    const id = Number(req.params.id);
    const { nome, preco } = req.body;

    const produto = produtosService.atualizarProduto(
        id,
        nome,
        preco
    );

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

function atualizarParcialProduto(req, res) {
    const id = Number(req.params.id);

    const produto = produtosService.atualizarParcialProduto(
        id,
        req.body
    );

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

function deletarProduto(req, res) {
    const id = Number(req.params.id);

    const produto = produtosService.deletarProduto(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
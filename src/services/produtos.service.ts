import Produto from '../models/produto.model';
import { ProdutoInterface } from '../interfaces/produto.interface';

async function listarProdutos() {
    return await Produto.findAll();
}

async function buscarProdutoPorId(id: number) {
    return await Produto.findByPk(id);
}

async function criarProduto(produto: ProdutoInterface) {
    return await Produto.create({
        nome: produto.nome,
        preco: produto.preco
    });
}

async function atualizarProduto(
    id: number,
    dados: ProdutoInterface
) {
    const produto = await Produto.findByPk(id);

    if (!produto) {
        return null;
    }

    await produto.update(dados);

    return produto;
}

async function atualizarParcialProduto(
    id: number,
    dados: Partial<ProdutoInterface>
) {
    const produto = await Produto.findByPk(id);

    if (!produto) {
        return null;
    }

    await produto.update(dados);

    return produto;
}

async function deletarProduto(id: number) {
    const produto = await Produto.findByPk(id);

    if (!produto) {
        return null;
    }

    await produto.destroy();

    return produto;
}

export default {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
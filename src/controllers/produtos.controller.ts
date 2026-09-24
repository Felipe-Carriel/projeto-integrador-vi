import { Request, Response } from 'express';
import produtosService from '../services/produtos.service';

async function listarProdutos(req: Request, res: Response) {
    const produtos = await produtosService.listarProdutos();

    return res.status(200).json(produtos);
}

async function buscarProdutoPorId(req: Request, res: Response) {
    const id = Number(req.params.id);

    const produto = await produtosService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

async function criarProduto(req: Request, res: Response) {
    const produto = await produtosService.criarProduto(req.body);

    return res.status(201).json(produto);
}

async function atualizarProduto(req: Request, res: Response) {
    const id = Number(req.params.id);

    const produto = await produtosService.atualizarProduto(
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

async function atualizarParcialProduto(req: Request, res: Response) {
    const id = Number(req.params.id);

    const produto = await produtosService.atualizarParcialProduto(
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

async function deletarProduto(req: Request, res: Response) {
    const id = Number(req.params.id);

    const produto = await produtosService.deletarProduto(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    return res.status(200).json(produto);
}

export default {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
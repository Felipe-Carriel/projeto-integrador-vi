import express from 'express';
import produtosController from '../controllers/produtos.controller';

const router = express.Router();

router.get('/', produtosController.listarProdutos);

router.get('/:id', produtosController.buscarProdutoPorId);

router.post('/', produtosController.criarProduto);

router.put('/:id', produtosController.atualizarProduto);

router.patch('/:id', produtosController.atualizarParcialProduto);

router.delete('/:id', produtosController.deletarProduto);

export default router;
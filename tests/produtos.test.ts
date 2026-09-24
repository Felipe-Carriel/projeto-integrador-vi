import request from 'supertest';
import app from '../src/app';
import sequelize from '../src/database/database';

let produtoId: number;

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('CRUD de Produtos', () => {

    test('Deve listar produtos', async () => {
        const response = await request(app)
            .get('/produtos');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('Deve criar um produto', async () => {
        const response = await request(app)
            .post('/produtos')
            .send({
                nome: 'Notebook',
                preco: 3500
            });

        expect(response.status).toBe(201);
        expect(response.body.nome).toBe('Notebook');
        expect(response.body.preco).toBe(3500);

        produtoId = response.body.id;
    });

    test('Deve buscar um produto pelo ID', async () => {
        const response = await request(app)
            .get(`/produtos/${produtoId}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(produtoId);
        expect(response.body.nome).toBe('Notebook');
    });

    test('Deve retornar 404 ao buscar produto inexistente', async () => {
        const response = await request(app)
            .get('/produtos/99999');

        expect(response.status).toBe(404);
        expect(response.body.mensagem).toBe('Produto não encontrado');
    });

    test('Deve atualizar um produto', async () => {
        const response = await request(app)
            .put(`/produtos/${produtoId}`)
            .send({
                nome: 'Notebook Gamer',
                preco: 5000
            });

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Notebook Gamer');
        expect(response.body.preco).toBe(5000);
    });

    test('Deve retornar 404 ao atualizar produto inexistente', async () => {
        const response = await request(app)
            .put('/produtos/99999')
            .send({
                nome: 'Produto',
                preco: 100
            });

        expect(response.status).toBe(404);
        expect(response.body.mensagem).toBe('Produto não encontrado');
    });

    test('Deve atualizar parcialmente um produto', async () => {
        const response = await request(app)
            .patch(`/produtos/${produtoId}`)
            .send({
                preco: 4500
            });

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Notebook Gamer');
        expect(response.body.preco).toBe(4500);
    });

    test('Deve retornar 404 ao atualizar parcialmente produto inexistente', async () => {
        const response = await request(app)
            .patch('/produtos/99999')
            .send({
                preco: 100
            });

        expect(response.status).toBe(404);
        expect(response.body.mensagem).toBe('Produto não encontrado');
    });

    test('Deve deletar um produto', async () => {
        const response = await request(app)
            .delete(`/produtos/${produtoId}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(produtoId);
    });

    test('Deve retornar 404 ao deletar produto inexistente', async () => {
        const response = await request(app)
            .delete('/produtos/99999');

        expect(response.status).toBe(404);
        expect(response.body.mensagem).toBe('Produto não encontrado');
    });

    test('Deve retornar lista vazia após deletar o produto', async () => {
        const response = await request(app)
            .get('/produtos');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});
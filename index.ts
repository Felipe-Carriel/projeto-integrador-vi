import app from './src/app';
import sequelize from './src/database/database';

const PORT = 3000;

async function iniciarServidor() {
    try {
        await sequelize.sync();

        console.log('Banco de dados conectado.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar com o banco:', error);
    }
}

iniciarServidor();
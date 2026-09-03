const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});

app.get('/produtos', (req, res) => {
  res.status(200).json(prod);
});

const prod = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 6700
  },
  {
    id: 2,
    nome: 'Mouse',
    preco: 120
  }
]
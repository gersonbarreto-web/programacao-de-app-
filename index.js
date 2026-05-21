//  CRIE UMA API COM DOIS ENPODINTS :
// CLIENTES E FUNCIARIOS 

// AMBOS DEVEM TER OS METODOS GET , POST

const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// --- MODELOS ---

const Cliente = sequelize.define('Cliente', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefone: { type: DataTypes.STRING, allowNull: false }
});

// Criando o modelo de Funcionário 
const Funcionario = sequelize.define('Funcionario', {
    nome: { type: DataTypes.STRING, allowNull: false },
    cargo: { type: DataTypes.STRING, allowNull: false },
    salario: { type: DataTypes.FLOAT }
});

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

// --- ROTAS DE CLIENTES ---

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

app.post('/clientes', async (req, res) => { 
    const { nome, email, telefone } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, email, telefone });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar cliente' }); 
    }
});

// --- ROTAS DE FUNCIONÁRIOS ---

app.get('/funcionarios', async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

app.post('/funcionarios', async (req, res) => {
    const { nome, cargo, salario } = req.body;
    try {
        const novoFunc = await Funcionario.create({ nome, cargo, salario });
        res.status(201).json(novoFunc);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar funcionário' });
    }
});

// --- INICIALIZAÇÃO ---

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
        console.log('✅ Banco de dados sincronizado!');
    });
}).catch(error => {
    console.error('❌ Erro ao conectar:', error);
});
import transactionService from '../services/index.js';

const createTransaction = async (req, res) => {
    const transactionData = req.body;
    try {
        const newTransaction = await transactionService.createTransaction(transactionData);
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear transacción' });
    }
};

const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener transacciones' });
    }
};

const countTransactions = async (req, res) => {
    try {
        const count = await transactionService.countTransactions();
        res.status(200).json({ message: 'Cantidad de transacciones', transactions: count });
    } catch (error) {
        res.status(500).json({ error: 'Error al contar transacciones' });
    }
};


export default {
    createTransaction,
    getAllTransactions,
    countTransactions,
};

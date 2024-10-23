import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../transactions.txt');

let transactions = [
    { id: 1, tipo: 'retiro', monto: 10000, destinatario: 'Lucas Aupi' },
    { id: 2, tipo: 'depósito', monto: 100, destinatario: 'Daniel Lera' },
    { id: 3, tipo: 'retiro', monto: 500, destinatario: 'Juan Doe' }
];

const loadTransactions = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        transactions = data ? JSON.parse(data) : transactions;
    }
};

const saveTransactions = () => {
    fs.writeFileSync(filePath, JSON.stringify(transactions, null, 2));
};

const createTransaction = (transaction) => {
    const id = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
    const newTransaction = { id, ...transaction };
    transactions.push(newTransaction);
    saveTransactions();
    return newTransaction;
};

const getAllTransactions = () => {
    return transactions;
};

const countTransactions = () => {
    return transactions.length;
};

loadTransactions();

export default {
    createTransaction,
    getAllTransactions,
    countTransactions,
};

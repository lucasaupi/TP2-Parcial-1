import transactionModel from '../models/index.js';

const createTransaction = async (transactionData) => {
    return await transactionModel.createTransaction(transactionData);
};

const getAllTransactions = async () => {
    return await transactionModel.getAllTransactions();
};

const countTransactions = async () => {
    return await transactionModel.countTransactions();
};

export default {
    createTransaction,
    getAllTransactions,
    countTransactions,
};

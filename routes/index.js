import express from 'express';
import transactionController from '../controllers/index.js';

const router = express.Router();

router.post('/transactions', transactionController.createTransaction);
router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/count', transactionController.countTransactions);

export default router;

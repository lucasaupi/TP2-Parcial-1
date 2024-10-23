import express from 'express';
import transactionRoutes from './routes/index.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/api', transactionRoutes);

app.listen(PORT, () => console.log(`Server MVC running...`))
app.on("Error", (error) => console.log("Error ", error))

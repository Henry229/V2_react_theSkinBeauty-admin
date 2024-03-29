import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoute from './routes/customer-route.js';
import categoryRoute from './routes/category-route.js';
import serviceRoute from './routes/service-route.js';
import bookRoute from './routes/book-route.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.use(cors());
app.use(express.json());
app.use(customerRoute);
app.use(categoryRoute);
app.use(serviceRoute);
app.use(bookRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

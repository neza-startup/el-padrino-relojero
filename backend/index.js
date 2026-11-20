import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from "morgan";
import connectDB from './db.js';
import accessoryRoutes from './routes/accessories.js';
import watchRoutes from './routes/watches.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(async (_req, res, next) => {
  try {
    await connectDB();
    next();
  } catch {
    res.status(500).json({ error: "Error connecting to MongoDB" });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', watchRoutes);
app.use('/api', accessoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

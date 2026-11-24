/* global process */
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

app.get('/api/health', async (_req, res) => {
  try {
    await connectDB();
    res.status(200).json({ status: "ok", database: "connected" });
  } catch (error) {
    res.status(503).json({
      status: "error",
      database: "disconnected",
      error: error.message
    });
  }
});

app.use(async (_req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    res.status(503).json({
      error: "La base de datos no está disponible. Intenta de nuevo en unos segundos."
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', watchRoutes);
app.use('/api', accessoryRoutes);

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;

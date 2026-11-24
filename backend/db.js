/* global process */
import mongoose from "mongoose";

let connectionPromise;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "el-padrino",
        serverSelectionTimeoutMS: 10_000,
        connectTimeoutMS: 10_000,
        maxPoolSize: 10
      })
      .then((conn) => {
        console.log(`MongoDB Connected: ${conn.connection.name}`);
        return conn;
      })
      .catch((error) => {
        connectionPromise = undefined;
        console.error(`Error connecting to MongoDB: ${error.message}`);
        throw error;
      });
  }

  return connectionPromise;
};

export default connectDB;

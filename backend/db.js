import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, { dbName: "el-padrino" });
    console.log(`MongoDB Connected: ${conn.connection.name}`);

    /* const connect = await mongoose.connect(
      process.env.MONGODB_URI, { dbName: "Neza" });

    console.log(`MongoDB Connected: ${connect.connection.name}`); */
  } catch (error) {
    res.status(500).json({ error: "Error connecting to MongoDB", message: error.message });
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

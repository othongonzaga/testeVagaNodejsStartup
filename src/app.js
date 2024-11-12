require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const catalogRoutes = require("./routes/catalogRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/catalogs", catalogRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor em execução na porta ${PORT}`));

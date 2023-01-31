const express = require("express");

const mongoose = require("mongoose");
const connectDB = require("./config/db");
var cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:3000" }));

connectDB();

app.use(express.json({ extended: false }));
app.use("/api/insurances", require("./routes/api/insurance"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api", require("./routes/api/getJsonData"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

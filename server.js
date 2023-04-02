const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/config");
require("colors");
dotenv.config();
//dbconfig
connectDb();
//rest obj
const app = express();

//middlware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoutes"));
//port
const PORT = process.env.PORT || 8081;
//listen

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.bgCyan.white);
});

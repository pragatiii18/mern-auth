const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const { MONGODB_URL, PORT } = process.env || 8001;
const app = express();

connectDb();

// mongoose
//   .connect(MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is  connected successfully"))
//   .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
    cors({
      origin: ["http://localhost:8000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );


  app.use(cookieParser());

  app.use(express.json());
  
  app.use("/", authRoute);
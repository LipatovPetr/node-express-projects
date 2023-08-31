require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

//

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3030;

const start = async () => {
  try {
    app.listen(port, console.log(`Sever is listening in port ${port}`));
  } catch (err) {}
};

start();

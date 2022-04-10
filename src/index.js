require('dotenv').config()
const express = require('express')
const serverless = require("serverless-http");

// const app = express()
// const PORT = process.env.PORT || 3000

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(PORT, () => { console.log(`App is running on PORT: ${PORT}`) })

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
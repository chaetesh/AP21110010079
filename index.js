const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

// to deal requests in json format
app.use(express.json());

const port = 5000;

// Available routes
app.use("/categories", require("./routes/products"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

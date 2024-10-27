let express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require("./Security/Router");
routes(app);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

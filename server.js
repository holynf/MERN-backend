const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./src/routes");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(cors());
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

require('./startup/config')(server,express);
require("./startup/db")();
require("./startup/log")();

server.use("/api", apiRoutes);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening on port ${port}`));

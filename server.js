const express = require("express")
const server = express()

const middleware = require("./middleware")

server.use(express.json());
server.use(middleware.Authenticate)


module.exports = server
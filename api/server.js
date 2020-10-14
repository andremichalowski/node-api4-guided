const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.status(200).json({
        hello: "node 34 from the web",
        environment: process.env.NODE_ENV,
    });
});

module.exports = server;

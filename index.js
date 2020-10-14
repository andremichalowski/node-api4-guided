const server = require("./api/server.js");

// 1: make the port dynamic
const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server running..."));

// 2: add a start script to package.json -> "start": "node index.js"
// node index.js
// heroku will run "npm start" to execute the server <- "start" is a script in package.json

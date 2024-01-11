const jsonServer = require("json-server");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(cors());
server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.use("/api", router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});

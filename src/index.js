const express = require("express");
const { computeSalary } = require("./util");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/api", (req, res) => {
  res.json("Hello World!");
});

app.post("/api", (req, res) => {
  const jugadores = req.body;
  const updatedJugadores = computeSalary(jugadores);
  res.json(updatedJugadores);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { server, app };

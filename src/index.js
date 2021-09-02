const express = require("express");
const { computeSalary } = require("./util");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api", (req, res) => {
  const Listajugadores = req.body;
  const updatedListaJugadores = computeSalary(Listajugadores);
  res.json(updatedListaJugadores);
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = { server, app };

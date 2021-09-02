const request = require("supertest");
const { app, server } = require("./index");

const jugadores = {
  jugadores: [
    {
      nombre: "Juan Perez",
      nivel: "C",
      goles: 10,
      sueldo: 50000,
      bono: 25000,
      sueldo_completo: null,
      equipo: "rojo",
    },
    {
      nombre: "EL Cuauh",
      nivel: "Cuauh",
      goles: 30,
      sueldo: 100000,
      bono: 30000,
      sueldo_completo: null,
      equipo: "azul",
    },
    {
      nombre: "Cosme Fulanito",
      nivel: "A",
      goles: 7,
      sueldo: 20000,
      bono: 10000,
      sueldo_completo: null,
      equipo: "azul",
    },
    {
      nombre: "El Rulo",
      nivel: "B",
      goles: 9,
      sueldo: 30000,
      bono: 15000,
      sueldo_completo: null,
      equipo: "rojo",
    },
  ],
};

test("response should be json", async () => {
  await request(app)
    .post("/api")
    .send(jugadores)
    .expect(200)
    .expect("content-type", /application\/json/);
});

test("response should update sueldo_completo", async () => {
  const response = await request(app).post("/api").send(jugadores);
  expect(response.body.jugadores[3].sueldo_completo).toBe(14250);
});

const nuevosJugadores = {
  jugadores: [
    {
      nombre: "Carlos Perez",
      nivel: "B",
      goles: 2,
      sueldo: 30_000,
      bono: 20_000,
      sueldo_completo: null,
      equipo: "rojo",
    },
    {
      nombre: "EL Cuauh 2.0",
      nivel: "Cuauh",
      goles: 35,
      sueldo: 200_000,
      bono: 30_000,
      sueldo_completo: null,
      equipo: "azul",
    },
    {
      nombre: "Cosme Notfulanito",
      nivel: "C",
      goles: 6,
      sueldo: 10_000,
      bono: 10_000,
      sueldo_completo: null,
      equipo: "azul",
    },
    {
      nombre: "El Rulo 2 (pero sin rulos)",
      nivel: "A",
      goles: 2,
      sueldo: 40_000,
      bono: 25_000,
      sueldo_completo: null,
      equipo: "rojo",
    },
  ],
};
// goles por equipo:    45
// goles mínimos:       50
// total equipo:        45/50 = 0.9

// total goles Rulo 2:  2/5        
// bono de El Rulo 2:   12_500 * 0.9 + 12_500 * 0.4 = 16_250


test("response should work with other team", async () => {
  const response = await request(app).post("/api").send(nuevosJugadores);
  expect(response.body.jugadores[3].sueldo_completo).toBe(16_250);
});

afterAll(() => {
  server.close();
});

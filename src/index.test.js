const request = require("supertest");
const { app, server } = require("./index");

test("hello world", async () => {
  const response = await request(app).get("/api");
  expect(response.body).toBe("Hello World!");
});

const jugadores = {
  "jugadores" : [  
     {  
        "nombre":"Juan Perez",
        "nivel":"C",
        "goles":10,
        "sueldo":50000,
        "bono":25000,
        "sueldo_completo":null,
        "equipo":"rojo"
     },
     {  
        "nombre":"EL Cuauh",
        "nivel":"Cuauh",
        "goles":30,
        "sueldo":100000,
        "bono":30000,
        "sueldo_completo":null,
        "equipo":"azul"
     },
     {  
        "nombre":"Cosme Fulanito",
        "nivel":"A",
        "goles":7,
        "sueldo":20000,
        "bono":10000,
        "sueldo_completo":null,
        "equipo":"azul"

     },
     {  
        "nombre":"El Rulo",
        "nivel":"B",
        "goles":9,
        "sueldo":30000,
        "bono":15000,
        "sueldo_completo":null,
        "equipo":"rojo"

     }
  ]
}

test("Response should be json", async () => {
  await request(app)
    .post("/api")
    .send(jugadores)
    .expect(200)
    .expect("content-type", /application\/json/)
});

afterAll(() => {
  server.close();
});

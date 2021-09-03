# Resuelve-fc ⚽
> Answer to the [backend test](https://github.com/resuelve/prueba-ing-backend) of Resuelve

Use this to compute the `sueldo_completo` from a object of football players like,
```javascript
{
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
```
| The response should be a the same object but with the `sueldo_completo` updated.


## How to test it
- You can check [here](https://reqbin.com/nij600cj) to see the response to a POST with the JSON above and change it if you want
> The API endpoint runs on Heroku

- Or you can build it 
  1. clone the repo
  2. `cd resuelve-fc`
  3. `npm i`
  4. `npm start`
  It will run on http://localhost:3000/api and you can use someting like [postman](https://www.postman.com/) and make a POST with the JSON 
  
## Tecnologies
Node.js - Express - Jest - Supertest - Heroku


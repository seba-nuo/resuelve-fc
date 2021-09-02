const computeSalary = (jugadoresObj) => {

  const niveles = {
    A: 5,
    B: 10,
    C: 15,
    Cuauh: 20,
  };

  const { jugadores } = jugadoresObj;

  const sumReducer = (accumulator, current) => accumulator + current;
  const golesAnotadosEquipo = jugadores
    .map((jugador) => jugador.goles)
    .reduce(sumReducer);

  const nivelReducer = (accumulator, current) => niveles[current] + accumulator;
  const golesMinimosEquipo = jugadores
    .map((jugador) => jugador.nivel)
    .reduce(nivelReducer, 0);

  jugadores.forEach((jugador) => {
    const golesMinJugador = niveles[jugador.nivel];
    const golesJugador = jugador.goles;

    // si cumplen o superan la cantidad mínima de goles no reciben sobre el 100%
    const cumplimientoGoles = (goles, golesMin) =>
      goles >= golesMin ? 1 : goles / golesMin;
    const bonoPersonal =
      (jugador.bono / 2) * cumplimientoGoles(golesJugador, golesMinJugador);

    const bonoEquipo =
      (jugador.bono / 2) *
      cumplimientoGoles(golesAnotadosEquipo, golesMinimosEquipo);
    const sueldo_completo = bonoPersonal + bonoEquipo;

    jugador.sueldo_completo = Math.round(sueldo_completo);
  });

  return jugadoresObj;
};

module.exports = { computeSalary };

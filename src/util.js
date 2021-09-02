const computeSalary = (jugadoresObj) => {
  const niveles = {
    A: 5,
    B: 10,
    C: 15,
    Cuauh: 20,
  };

  const { jugadores } = jugadoresObj;

  // para sumar todos los goles del equipo
  const sumReducer = (accumulator, current) => accumulator + current;
  const golesAnotadosEquipo = jugadores
    .map((jugador) => jugador.goles)
    .reduce(sumReducer);

  // para sumar el mínimo de goles que debe hacer el equipo según su nivel
  const nivelReducer = (accumulator, current) => niveles[current] + accumulator;
  const golesMinimosEquipo = jugadores
    .map((jugador) => jugador.nivel)
    .reduce(nivelReducer, 0);

  // si cumplen o superan la cantidad mínima de goles no reciben sobre el 100%
  const cumplimientoGoles = (goles, golesMin) =>
    goles >= golesMin ? 1 : goles / golesMin;

  jugadores.forEach((jugador) => {
    const golesMinJugador = niveles[jugador.nivel];
    const golesJugador = jugador.goles;
    const mitadBono = jugador.bono / 2; // 50% depende del jugador y 50% del equipo

    const bonoPersonal =
      mitadBono * cumplimientoGoles(golesJugador, golesMinJugador);

    const bonoEquipo =
      mitadBono * cumplimientoGoles(golesAnotadosEquipo, golesMinimosEquipo);
    const sueldo_completo = bonoPersonal + bonoEquipo;

    jugador.sueldo_completo = Math.round(sueldo_completo);
  });

  return jugadoresObj;
};

module.exports = { computeSalary };

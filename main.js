// Datos del problema

const entrenadores = [
    { name: 'A', reputation: 4.5, placesAvailable: 1 },
    { name: 'B', reputation: 3.2, placesAvailable: 4 },
    { name: 'C', reputation: 1.2, placesAvailable: 3 },
    { name: 'D', reputation: 3.4, placesAvailable: 2 }
  ];
  
  const clientes = [
    { name: 'q', importanceReputation: 2.6 },
    { name: 'r', importanceReputation: 3.7 },
    { name: 's', importanceReputation: 8.5 },
    { name: 't', importanceReputation: 9.7 },
    { name: 'u', importanceReputation: 2.6 },
    { name: 'v', importanceReputation: 4.7 },
    { name: 'w', importanceReputation: 5.6 },
    { name: 'x', importanceReputation: 3.7 },
    { name: 'y', importanceReputation: 8.1 },
    { name: 'z', importanceReputation: 2.5 }
  ];

  
  
  function resolveAssignment() {
    // Ordenar entrenadores por reputación de mayor a menor
    entrenadores.sort((a, b) => b.reputation - a.reputation);

    // Ordenar clientes por importanceReputation de mayor a menor
    clientes.sort((a, b) => b.importanceReputation - a.importanceReputation);

    // Iterar sobre los entrenadores
    for (let i = 0; i < entrenadores.length; i++) {
        const entrenador = entrenadores[i];

        // Asignar clientes al entrenador hasta completar placesAvailable
        while (entrenador.placesAvailable > 0 && clientes.length > 0) {
            const clientAssigned = clientes.shift(); // Tomar el cliente con mayor importanceReputation
            entrenador.placesAvailable--; // Reducir la cantidad de plazas disponibles
            document.getElementById('output').innerHTML += `Cliente: ${clientAssigned.name}, entrenador asignado: ${entrenador.name}<br>`;
        }
    }
    document.getElementById('output').style.display = 'block';
    // Mostrar resultado en la página
    mostrarResultados();

}


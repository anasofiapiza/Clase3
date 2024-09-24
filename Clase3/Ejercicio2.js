function calcularPromedio() {
  // Obtener todos los elementos de entrada de notas
  const notas = document.querySelectorAll('.periodo input');

  // Obtener los pesos de cada periodo (puedes personalizarlos)
  const pesos = [0.3, 0.3, 0.4];

  let sumaPonderada = 0;
  for (let i = 0; i < notas.length; i++) {
      sumaPonderada += parseFloat(notas[i].value) * pesos[Math.floor(i / 5)];
  }

  const promedioPonderado = sumaPonderada / notas.length;

  // Mostrar el resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = `El promedio es: ${promedioPonderado.toFixed(2)}.`;

  // Agregar la calificación final (puedes personalizar los mensajes)
  if (promedioPonderado >= 3 && promedioPonderado < 4) {
      resultadoDiv.textContent += ' Aprobo con desempeño basico.';
  } else if (promedioPonderado >= 4 && promedioPonderado < 5) {
      resultadoDiv.textContent += ' Aprobo con desempeño superior.';
  } else if (promedioPonderado === 5) {
      resultadoDiv.textContent += ' ¡Aprobo con desempeño excelente! Eres un genio.';
  } else {
      resultadoDiv.textContent += ' Reprobo.';
  }
}
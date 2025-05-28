// Función para actualizar el contador
function actualizarContador() {
  // Fecha y hora del evento (19 de julio a las 21:30)
  var fechaEvento = new Date("Julio 19, 2025 21:30:00").getTime();

  // Obtener la fecha y hora actual
  var ahora = new Date().getTime();

  // Calcular la diferencia de tiempo
  var distancia = fechaEvento - ahora;

  // Calcular días, horas, minutos y segundos
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Mostrar el contador en el HTML
  document.getElementById("tiempo").innerHTML =
    dias + " : " + horas + " : " + minutos + " : " + segundos;

  // Si el evento ha pasado, mostrar un mensaje
  if (distancia < 0) {
    document.getElementById("tiempo").innerHTML = "¡La fiesta comenzo!";
  }
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

///////////////////////////////////////////////

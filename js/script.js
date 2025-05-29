let personas = [];

function esEmailValido(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function agregarPersona() {
  const nombre = document.getElementById("input-nombre").value.trim();
  const edad = document.getElementById("input-edad").value.trim();
  const email = document.getElementById("input-email").value.trim();

  let esValido = true;

  if (nombre === "") {
    document.getElementById("msg-error-nombre").textContent = "Debe ingresar un nombre";
    esValido = false;
  } else {
    document.getElementById("msg-error-nombre").textContent = "";
  }

  if (edad === "") {
    document.getElementById("msg-error-edad").textContent = "Debe ingresar una edad";
    esValido = false;
  } else {
    document.getElementById("msg-error-edad").textContent = "";
  }

  if (email === "") {
    document.getElementById("msg-error-email").textContent = "Debe ingresar un email";
    esValido = false;
  } else if (!esEmailValido(email)) {
    document.getElementById("msg-error-email").textContent = "El email ingresado no es válido";
    esValido = false;
  } else {
    document.getElementById("msg-error-email").textContent = "";
  }

  if (!esValido) return;

  personas.push({ nombre, edad, email });
  actualizarLista();

  document.getElementById("input-nombre").value = "";
  document.getElementById("input-edad").value = "";
  document.getElementById("input-email").value = "";
}

function eliminarPersona(index) {
  personas.splice(index, 1);
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("lista-nombres");
  lista.innerHTML = "";

  if (personas.length === 0) {
    lista.innerHTML = "<tr><td colspan='4'>No hay nombres registrados</td></tr>";
    return;
  }

  personas.forEach((persona, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><button class="btn-delete" onclick="eliminarPersona(${index})">Eliminar</button></td>
      <td>${persona.nombre}</td>
      <td>${persona.edad}</td>
      <td>${persona.email}</td>
    `;
    lista.appendChild(fila);
  });
}

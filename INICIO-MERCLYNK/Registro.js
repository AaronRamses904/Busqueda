// Mostrar / ocultar contraseña
function togglePass() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

let tipo = "cliente";

// Cambiar entre Cliente / Proveedor
function setTipo(seleccion) {
  tipo = seleccion;

  const titulo = document.getElementById("tituloRegistro");
  const camposProveedor = document.getElementById("camposProveedor");
  const botones = document.querySelectorAll(".btn-select");

  botones.forEach(b => b.classList.remove("activo"));
  event.target.classList.add("activo");

  if (tipo === "cliente") {
    titulo.textContent = "Registro de Cliente";
    camposProveedor.style.display = "none";
  } else {
    titulo.textContent = "Registro de Proveedor";
    camposProveedor.style.display = "block";
  }
}

// Envío del formulario
document.getElementById("formRegistro").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`¡Registro enviado como ${tipo.toUpperCase()}!`);

  // 🔥 REDIRECCIÓN DESPUÉS DE REGISTRAR
  window.location.href = "../index.html";  
  // ⬆️ Cambia esto si tu archivo está en otra ruta
});


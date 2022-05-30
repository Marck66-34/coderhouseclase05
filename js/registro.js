const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
localStorage.setItem("nombre", nombre );
localStorage.setItem("email", email);

let usario = localStorage.getItem("nombre");
let correo = localStorage.getItem("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (pass.value.length < 8) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Te registraste con exito",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location="loguin.html"
  }

});

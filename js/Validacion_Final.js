let formulario = document.getElementsByName("formulario")[0]; //[0] Primer elemento, el formulario en si mismo.
let boton = document.getElementById("b1"); // El botón

// --------------------------------------------------------
// Validamos Nombre
// --------------------------------------------------------
let validarNombre = function (e) {
  if (formulario.nombre.value == 0) {
    // Si el campo id="nombre" del form está vacio...
    alert("Completa el campo nombre");
    e.preventDefault(); // Evita el comportamiento por defecto
  }
};
// --------------------------------------------------------
// Validamos Apellido
// --------------------------------------------------------
let validarApellido = function (e) {
  if (formulario.apellido.value == 0) {
    // Si el campo id="nombre" del form está vacio...
    alert("Completa el campo apellido");
    e.preventDefault(); // Evita el comportamiento por defecto
  }
};
// --------------------------------------------------------
// Validamos Email
// --------------------------------------------------------
let validarEmail = function (e) {
  if (formulario.email.value == 0) {
    // Si el campo id="nombre" del form está vacio...
    alert("Completa el campo email");
    e.preventDefault(); // Evita el comportamiento por defecto
  }
};
// --------------------------------------------------------
// Validamos Radio
// --------------------------------------------------------
let validarRadio = function (e) {
  if (formulario.so[0].checked == true || formulario.so[1].checked == true) {
  } else {
    //Si al menos uno de los Radio no está marcado....
    alert("Selecciona una ciudad de origen");
    e.preventDefault();
  }
};
// --------------------------------------------------------
// Validamos Select
// --------------------------------------------------------
let validarSelect = function (e) {
  if (document.formulario.interes.selectedIndex == 0) {
    alert("Selecciona el paquete de tu interés.");
    document.formulario.interes.focus();
    return 0;
  }
};

// --------------------------------------------------------
// Validamos TextArea
// --------------------------------------------------------
let validarTextarea = function (e) {
  if (formulario.textarea.value == 0) {
    // Si el campo id="nombre" del form está vacio...
    alert("Completa el campo con tu consulta");
    e.preventDefault(); // Evita el comportamiento por defecto
  }
};

// --------------------------------------------------------
// Validamos Términos y Condiciones
// --------------------------------------------------------
let validarCheckbox = function (e) {
  if (formulario.terminos.checked == false) {
    alert("Acepta los términos y condiciones");
    e.preventDefault();
  }
};

// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las tres validaciones
// --------------------------------------------------------
let validar = function (e) {
  validarNombre(e);
  validarApellido(e);
  validarEmail(e);
  validarRadio(e);
  validarSelect(e);
  validarTextarea(e);
  validarCheckbox(e);
};

// --------------------------------------------------------
// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM, no del botón!
formulario.addEventListener("submit", validar);

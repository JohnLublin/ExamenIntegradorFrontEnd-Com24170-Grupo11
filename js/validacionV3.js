document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
        email: /^\d{7,8}$/ 
    };

    const campos = {
        nombre: false,
        apellido: false,
        email: false
    };

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "apellido":
                validarCampo(expresiones.apellido, e.target, 'apellido');
                break;
            case "email":
                validarCampo(expresiones.email, e.target, 'email');
                break;
        }
    };

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.querySelector(`.${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`.${campo} .formulario__validacion-estado`).classList.add('nombre-correcto');
            document.querySelector(`.${campo} .formulario__validacion-estado`).classList.remove('nombre-incorrecto');
            campos[campo] = true;
        } else {
            document.querySelector(`.${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`.${campo} .formulario__validacion-estado`).classList.add('nombre-incorrecto');
            document.querySelector(`.${campo} .formulario__validacion-estado`).classList.remove('nombre-correcto');
            campos[campo] = false;
        }
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (campos.nombre && campos.apellido && campos.DNI) {
            document.querySelector('.formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            document.querySelector('.formulario__mensaje').classList.remove('formulario__mensaje-active');
            setTimeout(() => {
                document.querySelector('.formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.formulario__validacion-estado').forEach((icono) => {
                icono.classList.remove('nombre-correcto');
            });

            formulario.reset();
        } else {
            document.querySelector('.formulario__mensaje').classList.add('formulario__mensaje-active');
        }
    });
});
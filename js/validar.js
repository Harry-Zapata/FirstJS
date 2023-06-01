/* JS DEL FORMULARIO */
const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');
const listSelect = document.querySelectorAll('#formulario select')
const expresiones = {
	apellido: /[a-zA-ZÀ-ÿ\s]{2,14}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,14}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cargo: /[a-zA-ZÀ-ÿ\s]{2,14}$/,
}

const campos = {
	apellido: false,
	nombre: false,
	correo: false,
	cargo: false
}
let codigo = 1;
class Empleado {
	constructor(nombre, apellido, correo, cargo) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.cargo = cargo;
	}
}

const validarFormulario = (e) => {
	switch (e.target.name) { //Es una referencia al objeto en el cual se lanzo el evento.
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "cargo":
			validarCampo(expresiones.cargo, e.target, 'cargo');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {//El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle'); //Devuelve el primer elemento del documento
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //Dejar de presionar tecla
	input.addEventListener('blur', validarFormulario);//Cuando sacamos el cursor empieza la validacion
});
//canvio
listSelect.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //Dejar de presionar tecla
	input.addEventListener('blur', validarFormulario);//Cuando sacamos el cursor empieza la validacion
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); //Evitar refrescarse

	const terminos = document.getElementById('terminos');
	if (campos.apellido && campos.nombre && campos.correo && campos.cargo && terminos.checked) {
		/**Aqui puse enviar por que no embie los datos sin validar -- Harry*/
		enviar()
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
	}
});
/* FIN JS DEL FORMULARIO */



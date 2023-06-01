/** Array que funciona como Base de Datos */
users=[]

//condicion para que local storage no devuelva null
let list = JSON.parse(localStorage.getItem("listUsers")) 
if(list==null){
	users=[]
}else{
	users=list
}
//fin de condicional

/** Fin de Array que funciona como base de datos */
/**Crear nuevo Usuario*/
function enviar() {
	
	let v_nombre = document.getElementById("nombre").value;
	let v_apellido = document.getElementById("apellido").value;
	let v_correo = document.getElementById("correo").value;
	let v_cargo = document.getElementById("cargo").value;
	let usuario = { id: users.length , nombre: v_nombre, apellido: v_apellido, correo: v_correo, cargo: v_cargo }

	/** Ver que no se repita el correo */
	var cor = []
	for (const index in users) {
		if (Object.hasOwnProperty.call(users, index)) {
			const element = users[index];
			cor.push(element.correo)
		}
	}
	if (cor.includes(v_correo)) {
		document.getElementById("validacion_correo").textContent = "El Correo ingresado ya existe porfavor intente con otro";
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById("validacion_correo").textContent = "Por favor rellena el formulario correctamente.";
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000)
		return users
	} else {
		users.push(usuario);
		localStorage.setItem("listUsers",JSON.stringify(users));
		return users
	}
}



/**Fin crear nuevo usuario */

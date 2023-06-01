let list = JSON.parse(localStorage.getItem("listUsers"))

let table = document.getElementById("tabla");
let UsersProperty = Object.keys(list[0])
let arriba = "fas fa-arrow-up"
let abajo = "fa-solid fa-arrow-down"

function cabecera() {
	/**Creamos la cabecera */
	let tr1 = document.createElement('tr');
	table.append(tr1)
	for (const i in UsersProperty) {
		let th = document.createElement('th')
		let iconoArriba = document.createElement('i');
		let iconoAbajo = document.createElement('i');
		if (Object.hasOwnProperty.call(UsersProperty, i)) {
			const element = UsersProperty[i];
			th.textContent = element
			th.append(iconoAbajo)
			iconoAbajo.className = abajo
			iconoAbajo.id = "abajo"
			th.append(iconoArriba)
			iconoArriba.className = arriba
			iconoArriba.id = "arriba"
			th.id = element
			tr1.append(th)
		}

	}
	let Tdata = document.createElement('th')
	tr1.append(Tdata)
	Tdata.textContent = "Data de los empleados"

	/**Fin de la cabecera */
}
cabecera()


/**cuerpo */
let usuarioEditado = JSON.parse(localStorage.getItem('usuarioEditado'))
console.log(usuarioEditado);
if (usuarioEditado == null) {
	list = list
} else {
	let idUsuarioEditado = parseInt(usuarioEditado.id)
	list[idUsuarioEditado] = usuarioEditado
}
localStorage.setItem('listUsers',JSON.stringify(list))

function cuerpo() {
	for (const index in list) {
		if (Object.hasOwnProperty.call(list, index)) {
			const e = list[index];
			const tr = document.createElement("tr");
			for (let i = 0; i < UsersProperty.length; i++) {
				let td = document.createElement("td");
				UsersProperty.forEach((key) => {
					key = UsersProperty[i]
					td.textContent = e[key]
				})
				tr.append(td)
				table.append(tr)
			}
		}

	}

	/**Data de los empleados */
	let trs = document.querySelectorAll('table tr');
	let arrTrs = []
	for (let i = 0; trs.length > i; i++) {
		let element = trs[i];
		arrTrs.push(element)
	}


	for (let i = 1; arrTrs.length > i; i++) {
		let tdEmpleado = document.createElement('td')
		let element = arrTrs[i];
		element.append(tdEmpleado)
		let link = document.createElement('a')
		tdEmpleado.append(link)
		link.id = "id_" + (i - 1)
		link.href = ""
		link.text = "data Empleado"

	}
	/**Fin data de los empleados */


	let id = document.getElementById('id');
	let nombre = document.getElementById('nombre');
	let apellido = document.getElementById('apellido');
	let correo = document.getElementById('correo');
	let cargo = document.getElementById('cargo');

	id.addEventListener('click', () => {
		ordenar('id')
		eliminarCuerpo()
		cuerpo()
	})

	nombre.addEventListener('click', () => {
		ordenar('nombre')
		eliminarCuerpo()
		cuerpo()

	})


	apellido.addEventListener('click', () => {
		ordenar('apellido')
		eliminarCuerpo()
		cuerpo()

	})


	cargo.addEventListener('click', () => {
		ordenar('cargo')
		eliminarCuerpo()
		cuerpo()

	})

	correo.addEventListener('click', () => {
		ordenar('correo')
		eliminarCuerpo()
		cuerpo()

	})
}
function eliminarCuerpo() {
	table.innerHTML = ""
	cabecera()
}
cuerpo()
/**Fin del cuerpo */



/**prueva */
var activador = 0
function ordenar(argument) {
	if (activador != 0) {
		if (argument == 'id') {
			list.sort((a, b) => a[argument] - b[argument])
			activador = 0
			return list
		} else {
			list.sort((a, b) => a[argument].localeCompare(b[argument]))
			activador = 0
			return list
		}
	} else {
		if (argument == 'id') {
			list.sort((a, b) => b[argument] - a[argument])
			activador = 1
			return list
		} else {
			list.sort((a, b) => b[argument].localeCompare(a[argument]))
			activador = 1
			return list
		}
	}

}


/**Data de los empleados links */
/**Locale storage */

let Eusers = []
let Elist = JSON.parse(localStorage.getItem("listUsers"))
if (Elist == null) {
	Eusers = []
} else {
	Eusers = Elist
}
console.log(Eusers);


let ArraysID = []
for (let i = 0; Eusers.length > i; i++) {
	let suId = 'id_' + i
	let Sid = document.getElementById(suId)
	ArraysID.push(Sid)
}


let etiquetas = document.querySelectorAll('td a');
let Nlinks = [];
for (let i = 0; etiquetas.length > i; i++) {
	let e = etiquetas[i]
	e.href = "./data.html"
	Nlinks.push(e)
}

Nlinks.forEach(element => {
	element.addEventListener('click', () => {
		let idElement = element.id
		let Element_1d = idElement.split('_')
		Element_1d.shift(Element_1d[0])
		localStorage.setItem('numeroId', Element_1d)
	})
})



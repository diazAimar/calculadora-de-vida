'use strict';

/* Selectores */
const form = document.getElementById('form');
const divAlerta = document.getElementById('alerta');

const chequearInputs = () => {
	let proceda = false;
	let clase = document.getElementById('clase').value;
	let raza = document.getElementById('raza').value;
	let nivel = Number(document.getElementById('nivel').value);
	let vida = Number(document.getElementById('vida').value);
	if (
		clase !== 'Elegí una clase' &&
		raza !== 'Elegí una raza' &&
		nivel > 0 &&
		vida > 0
	) {
		proceda = true;
	}
	return {proceda, clase, raza, nivel, vida};
};

const calcularVida = (clase, raza, nivel, vida) => {
	// console.log('hi');
	let vidaInicial = informacion[raza].vidaInicial;
	let vidaPromedio =
		(nivel - 1) * informacion[raza].promedio[clase] + vidaInicial;

	vida > vidaPromedio
		? crearAlerta(
				'Felicitaciones 🎉! Tu personaje esta +' + (vida - vidaPromedio) + '.',
				'success'
		  )
		: vida == vidaPromedio
		? crearAlerta('Tu vida esta en el promedio.', 'warning')
		: crearAlerta(
				'Tu vida está por debajo del promedio, ' + (vida - vidaPromedio) + '.',
				'error'
		  );
	console.log(
		`El promedio de vida de un ${clase} ${raza} nivel ${nivel} es de ${vidaPromedio}`
	);
};

const crearAlerta = (msg, tipo) => {
	if (divAlerta.hasChildNodes()) {
		let alertaActual = document.querySelector('.alerta-actual');
		divAlerta.removeChild(alertaActual);
	}
	let alerta = document.createElement('div');
	alerta.classList.add(
		'alert',
		`alert-${tipo}`,
		'shadow-lg',
		'alerta-actual',
		'mt-5',
		'text-center'
	);
	let texto = document.createTextNode(msg);
	alerta.appendChild(texto);
	divAlerta.appendChild(alerta);
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	/* Llamar a chequearInputs */
	let {proceda, clase, raza, nivel, vida} = chequearInputs();
	/* true ? calcularVida : alerta */
	if (proceda) {
		calcularVida(clase, raza, nivel, vida);
	} else {
		// console.log('bye');
	}
});

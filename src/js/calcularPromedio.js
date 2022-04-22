'use strict';

/* Selectores */
const form = document.getElementById('form');

const chequearInputs = () => {
	let proceda = false;
	let clase = document.getElementById('clase').value;
	let raza = document.getElementById('raza').value;
	let nivel = document.getElementById('nivel').value;
	let vida = document.getElementById('vida').value;
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

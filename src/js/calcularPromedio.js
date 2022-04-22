'use strict';

/* Selectores */
const btnCalcularVida = document.getElementById('calcularVida');
const inputClaseValue = document.getElementById('clase').value;
const inputRazaValue = document.getElementById('raza').value;
const inputNivel = document.getElementById('nivel').value;
const inputVida = document.getElementById('vida').value;

const chequearSelects = () => {
	if (
		inputClaseValue !== 'Elegí una clase' &&
		inputRazaValue !== 'Elegí una raza'
	) {
		console.log('HOLA');
		// calcularVida(inputClaseValue, inputRazaValue);
		/* btnCalcularVida.classList.remove('btn-disabled') */
	}
};

const calcularVida = (clase, raza) => {};

btnCalcularVida.addEventListener('click', () => {
	chequearSelects();
});

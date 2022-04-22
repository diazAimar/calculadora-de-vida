'use strict';

/* Selectors */
let changeThemeButton = document.getElementById('changeTheme');
let html = document.documentElement;

changeThemeButton.addEventListener('click', () => {
	html.getAttribute('data-theme') == 'dark'
		? html.setAttribute('data-theme', 'light')
		: html.setAttribute('data-theme', 'dark');
});

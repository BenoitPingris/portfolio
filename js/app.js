// import {
// 	Scene
// } from './balls.js';

const signature = `

888888b.                              d8b 888
888  "88b                             Y8P 888
888  .88P                                 888
8888888K.   .d88b.  88888b.   .d88b.  888 888888
888  "Y88b d8P  Y8b 888 "88b d88""88b 888 888
888    888 88888888 888  888 888  888 888 888
888   d88P Y8b.     888  888 Y88..88P 888 Y88b.
8888888P"   "Y8888  888  888  "Y88P"  888  "Y888



8888888b. 8888888 888b    888  .d8888b.  8888888b.  8888888 .d8888b.
888   Y88b  888   8888b   888 d88P  Y88b 888   Y88b   888  d88P  Y88b
888    888  888   88888b  888 888    888 888    888   888  Y88b.
888   d88P  888   888Y88b 888 888        888   d88P   888   "Y888b.
8888888P"   888   888 Y88b888 888  88888 8888888P"    888      "Y88b.
888         888   888  Y88888 888    888 888 T88b     888        "888
888         888   888   Y8888 Y88b  d88P 888  T88b    888  Y88b  d88P
888       8888888 888    Y888  "Y8888P88 888   T88b 8888888 "Y8888P"



`;


document.addEventListener('DOMContentLoaded', () => {
	console.log(signature);
	const scene = new Scene();
	scene.setup();
	scene.display();

	const modals = document.getElementsByClassName('active-modal');
	for (const modal of modals) {
		modal.addEventListener('click', () => {
			document.getElementById('modal-id').classList.toggle('active');
		});
	}

	let lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0;
	const friction = 1 / 10;

	function move_background() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		const translate = `calc(50% + ${x}px) calc(50% + ${y}px)`;

		const element = document.getElementsByClassName('header')[0];
		element.style.backgroundPosition = translate;

		window.requestAnimationFrame(move_background);
	}

	document.getElementsByClassName('header')[0].addEventListener('mousemove', (event) => {
		const scl = 100;
		const lMouseX = Math.max(-scl, Math.min(scl, window.outerWidth / 2 - event.clientX));
		const lMouseY = Math.max(-scl, Math.min(scl, window.outerHeight / 2 - event.clientY));
		lFollowX = (20 * lMouseX) / scl; // scl : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / scl;

	});

	move_background();
}, false);

window.onload = () => {
	const body = document.getElementById('body');

	document.getElementById('loader').style.display = 'none';
	body.style.display = 'block';
	body.style.opacity = 1;
	body.style.overflow = 'unset';
	body.style.height = 'unset';
};
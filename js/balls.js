class Balls {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.radius = Math.floor(Math.random() * 3) + 1;
		this.force = {
			x: Math.random(),
			y: Math.random()
		};
		const colors = ['#322126', '#191308', '#FFFFFF'];
		this.color = colors[Math.floor(Math.random() * colors.length)];
	}

	display(context) {
		context.globalAlpha = 0.5;
		context.beginPath();
		context.fillStyle = this.color;
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		context.fill();
	}

	update() {
		this.x += this.force.x;
		this.y += this.force.y;

		if (this.x > this.width)
			this.x = 0;
		else if (this.x < 0)
			this.x = this.width;
		else if (this.y > this.height)
			this.y = 0;
		else if (this.y < 0)
			this.y = this.height;
	}
}

export class Scene {
	constructor(element) {
		this.element = document.querySelector(element);
	}

	setup() {
		const header = document.querySelector('header');
		const dim = {
			width: header.offsetWidth,
			height: header.offsetHeight
		};

		this.max_balls = Math.floor(dim.width / 40);
		this.balls = new Array(this.max_balls);
		this.canvas = document.getElementById('scene');
		this.context = this.canvas.getContext('2d');

		this.canvas.width = dim.width;
		this.canvas.height = dim.height;
		this.canvas.style.position = 'absolute';
		this.canvas.style.left = 0;
		this.canvas.style.top = 0;
		for (let i = 0; i < this.max_balls; i++)
			this.balls[i] = new Balls(dim.width, dim.height);
	}

	display() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].display(this.context);
			this.balls[i].update();
		}
		requestAnimationFrame(() => this.display());
	}
}
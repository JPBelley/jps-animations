export default function animationPlayer() {
	const element = document.querySelector("h1.JPs-anim");
	const animations = ["ramp-down", "slide-in-left", "slide-out-left", "ramp-up"];
	let key = 0;

	element.querySelector("span:last-child").addEventListener("animationend", () => {
		const { length } = animations;
		setTimeout(() => {			
			element.dataset.jps = animations[key];
			(length - 1) == key ? key = 0 : key++;
		}, 1000);
	});
}
import * as THREE from 'three';
// import mapper1 from './mapper1';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//object name
let cube;

//object functions
function addBox() {
	let geometry = new THREE.BoxGeometry(1, 1, 1);
	let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	cube = new THREE.Mesh(geometry, material);
	cube.position.y = 1;
	scene.add(cube);
}

function animate() {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
}

//movement function

/*

*/
function moveUp() {
	cube.position.y += 1;
}
function moveDown() {
	cube.position.y -= 1;
}
function moveLeft() {
	cube.position.y -= 1;
}
function moveRight() {
	cube.position.y -= 1;
}

document.addEventListener('keydown', onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
	var key = event.which;
	// switch(key){
	//     case 87: moveUp();
	// }
}

function mymap() {
	var s = new THREE.Group();
	let step1;
	// step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,step12;
	let geometry = new THREE.BoxGeometry(1, 1, 1);
    let edges = new THREE.EdgesGeometry( geometry );
	let material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	let arr = [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 1, 0, 1],
		[1, 1, 1, 1],
	];
	let step = [[], [], [], [], []];
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 4; j++) {
			if (arr[i][j]) {
				step[i][j] = new THREE.Mesh(geometry, material);
				step[i][j].position.z = i;
				step[i][j].position.x = j;
                step[i][j].add(new THREE.LineSegments(
                    new THREE.EdgesGeometry( step[i][j].geometry ),
                    new THREE.LineBasicMaterial( {color: 'black'} )
                  ))
				s.add(step[i][j]);
			}
		}
	}
	//add
	s.add(step1);

	//scene add
	scene.add(s);
}

//main function
function main() {
	camera.position.z = 7;
	camera.position.y = 3;
	camera.rotation.x = -0.5;
	mymap();
	addBox();
	animate();
}

//moveable camera

main();

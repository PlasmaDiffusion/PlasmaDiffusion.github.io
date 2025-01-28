import * as THREE from "../node_modules/three/build/three.module.js";

import WebGL from "../node_modules/three/examples/jsm/capabilities/WebGL.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000aa });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);
const cube3 = new THREE.Mesh(geometry, material);

scene.add(cube, cube2, cube3);

camera.position.z = 5;

setRowOfCubes();

// Make sure WebGL works
if (WebGL.isWebGL2Available()) {
  animate();
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("body").appendChild(warning);
}


// Animation functions
function setRowOfCubes() {
  cube2.position.x += 2;
  cube3.position.x -= 2;
}

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

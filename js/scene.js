import * as THREE from "../node_modules/three/build/three.module.js";

import WebGL from "../node_modules/three/examples/jsm/capabilities/WebGL.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let canvReference = document.getElementById("3dView");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvReference,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const materialDefaultBlue = new THREE.MeshBasicMaterial({ color: 0x000055 });
const materialSelectedBlue = new THREE.MeshBasicMaterial({ color: 0x0000bb });
const cube = new THREE.Mesh(geometry, materialDefaultBlue);
const cube2 = new THREE.Mesh(geometry, materialDefaultBlue);
const cube3 = new THREE.Mesh(geometry, materialDefaultBlue);

scene.add(cube, cube2, cube3);

camera.position.z = 5;

const cubes = [cube, cube2, cube3];
setRowOfCubes();

// Animation functions
function setRowOfCubes() {
  cube2.position.x += 2;
  cube3.position.x -= 2;
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

renderer.setAnimationLoop(render);

function onPointerMove(event) {
  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function render() {
  // update the picking ray with the camera and pointer position
  raycaster.setFromCamera(pointer, camera);

  //Animate a cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(cubes);
  let selectedCubeXPos = -100;

  for (let i = 0; i < intersects.length; i++) {
    //If position matches then highlight the cube colour
    intersects[i].object.material = materialSelectedBlue;
    selectedCubeXPos = intersects[i].object.position.x;
  }

  //If the cube is not selected, reset the colour
  for (let i = 0; i < cubes.length; i++) {
    if (cubes[i].position.x !== selectedCubeXPos) {
      cubes[i].material = materialDefaultBlue;
    }
  }

  renderer.render(scene, camera);
}

// Make sure WebGL works
if (WebGL.isWebGL2Available()) {
  render();
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("body").appendChild(warning);
}

window.addEventListener("pointermove", onPointerMove);

window.requestAnimationFrame(render);

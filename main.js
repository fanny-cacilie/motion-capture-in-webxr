import * as THREE from 'three';
import { ARButton } from 'https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js';

// #1 Create the scene
// Documentation: https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
const scene = new THREE.Scene();

// #2 Create the camera
// Documentation: https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 40);

// #3 Pick a three.js renderer
// Documentation: https://threejs.org/docs/#api/en/renderers/WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);


// #4 Add a box geometry to the scene (optional)
// Documentation: https://threejs.org/docs/?q=boxgeo#api/en/geometries/BoxGeometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: new THREE.Color("rgb(226,35,213)") });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

mesh.position.z = -3;

const button = ARButton.createButton(renderer);
document.body.appendChild(button);

function animate() {
    // Setup an animation loop for the renderer.
    // Render all 3D components in the scene and how they will get shown on screen.
    // The animation loop runs about 60 times/frames per second (default).
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
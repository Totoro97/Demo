// Prepare.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add Points
var geometry = new THREE.SphereGeometry( 1, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
console.log(sphere.position);
scene.add(sphere);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;

camera.lookAt(sphere.position);

var animate = function () {
    requestAnimationFrame( animate );

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();
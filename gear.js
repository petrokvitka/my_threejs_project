var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.center = new THREE.Vector3();

var loader = new THREE.STLLoader();
loader.load('gear.STL', function (geometry) {
  var material = new THREE.MeshPhongMaterial({ color: 'skyblue'});
  var mesh = new THREE.Mesh(geometry, material);
  console.log(mesh);
  scene.add(mesh);
});

camera.position.z = 5;

var animate = function() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

function init() {

    //Initialize Renderer
    renderer = new THREE.WebGLRenderer({antialias:false});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);
    
    //Initialize Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, .1, 500);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 5;
    camera.position.y = 5;
    camera.position.z = 5;

    //Initialize Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    //Initialize Control
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Initialize Lights
    load_light();

    //Initialize Objects    
    var loader = new THREE.GLTFLoader();
    loader.load("object/Scene.gltf", load_obj);
    
    //Initialize Listeners

    resize();
    select();

    console.log(scene_objects);
}
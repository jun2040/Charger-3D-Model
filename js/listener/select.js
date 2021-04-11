function select() {
    
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2;

    document.addEventListener('pointerdown', function(event) {
        event.preventDefault();

        mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
        mouse.y = - (event.clientY / renderer.domElement.height) * 2 + 1

        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObjects(scene_objects);
        var color = (Math.random() * 0xffffff);

        if (intersects.length > 0) {
            console.log(intersects[0].object.id);
        }

    }, false);
}
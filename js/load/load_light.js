function load_light() {
    hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    spotLight1 = new THREE.SpotLight(0xffa95c, 1);
    spotLight1.position.set(10, 10, 10);
    spotLight1.castShadow = true;
    scene.add(spotLight1);

    spotLight2 = new THREE.SpotLight(0xffa95c, 1);
    spotLight2.position.set(10, -10, 10);
    spotLight2.castShadow = true;
    scene.add(spotLight2);

    spotLight3 = new THREE.SpotLight(0xffa95c, 1);
    spotLight3.position.set(10, 10, -10);
    spotLight3.castShadow = true;
    scene.add(spotLight3);
    
    spotLight4 = new THREE.SpotLight(0xffa95c, 1);
    spotLight4.position.set(10, -10, -10);
    spotLight4.castShadow = true;
    scene.add(spotLight4);

    spotLight5 = new THREE.SpotLight(0xffa95c, 1);
    spotLight5.position.set(-10, 10, 10);
    spotLight5.castShadow = true;
    scene.add(spotLight5);

    spotLight6 = new THREE.SpotLight(0xffa95c, 1);
    spotLight6.position.set(-10, -10, 10);
    spotLight6.castShadow = true;
    scene.add(spotLight6);

    spotLight7 = new THREE.SpotLight(0xffa95c, 1);
    spotLight7.position.set(-10, 10, -10);
    spotLight7.castShadow = true;
    scene.add(spotLight7);

    spotLight8 = new THREE.SpotLight(0xffa95c, 1);
    spotLight8.position.set(-10, -10, -10);
    spotLight8.castShadow = true;
    scene.add(spotLight8);
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    chassis_base_m.rotation.y += Math.PI/1024/4;

    load_translate();

    if (disassemble == false) {
        if (tick < 12) {
            state = 0;
            tick++;
        } else if (tick >= 12) {
            state = 2;
        }
    } else if (disassemble == true) {
        if (tick > 0) {
            state = 1;
            tick--;
        } else if (tick <= 0) {
            state = 2;
        }
    }
}
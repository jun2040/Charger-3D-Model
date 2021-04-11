function change() {
    controls.addEventListener('change', () => {
        mesh.position.copy(controls.target.clone());
    });
}
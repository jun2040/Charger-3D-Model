function toggle() {
    if (disassemble == true) {
        disassemble = false;
        button.textContent = "Assemble";
    } else if (disassemble == false) {
        disassemble = true;
        button.textContent = "Disassemble";
    }
}
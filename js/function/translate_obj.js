function translate_obj(model, distance_x=0, distance_y=0, distance_z=0) {
    var anim_length = 12;
    delta_x = distance_x/anim_length;
    delta_y = distance_y/anim_length;
    delta_z = distance_z/anim_length;

    if (state == 0) {
        model.position.x += delta_x;
        model.position.y += delta_y;
        model.position.z += delta_z;
    } else if (state == 1) {
        model.position.x -= delta_x;
        model.position.y -= delta_y;
        model.position.z -= delta_z;
    } else {
        
    }
}
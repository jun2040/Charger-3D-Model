function load_translate() {
    translate_obj(chassis_base_l, 0, 0, 1);
    translate_obj(chassis_plate_l, 0, 0, 2);
    translate_obj(chassis_base_r, 0, 0, -1);
    translate_obj(chassis_plate_r, 0, 0, -2);

    translate_obj(turret_base, 0, 1, 0);
    translate_obj(turret_middle_base, -1, 0, 0);
    translate_obj(turret_core, 2, 1, 0);

    translate_obj(turret_base_l, 0, 0, 2);
    translate_obj(turret_middle_panel_l, 0, 0, 2);
    translate_obj(turret_side_plate_l, -2, 0, 2);
    translate_obj(turret_front_corner_l, -2, 0, 0);
    translate_obj(turret_back_corner_l, 2, 0, 0);

    translate_obj(turret_base_r, 0, 0, -2);
    translate_obj(turret_middle_panel_r, 0, 0, -2);
    translate_obj(turret_side_plate_r, -2, 0, -2);
    translate_obj(turret_front_corner_r, -2, 0, 0);
    translate_obj(turret_back_corner_r, 2, 0, 0);

    translate_obj(turret_hinge_back, 1, 1, 0);
    translate_obj(turret_hinge_front, -1, 0, 0);
    translate_obj(barrel, -1, 0, 0);

    translate_obj(track_l, 0, -2, -1);
    translate_obj(wheel_outer_l, 0, 0, 2);
    translate_obj(wheel_inner_l, 0, 0, -4);
    translate_obj(track_r, 0, -2, 1);
    translate_obj(wheel_outer_r, 0, 0, -2);
    translate_obj(wheel_inner_r, 0, 0, 4);
}

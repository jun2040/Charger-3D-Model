function load_obj(gltf) {

    //Get Obj

    //Chassis
    chassis_base_m = gltf.scene.getObjectByName("chassis_base_m");
    chassis_base_l = gltf.scene.getObjectByName("chassis_base_l");
    chassis_plate_l = gltf.scene.getObjectByName("chassis_plate_l");
    chassis_base_r = gltf.scene.getObjectByName("chassis_base_r");
    chassis_plate_r = gltf.scene.getObjectByName("chassis_plate_r");

    //Turret
    turret_base = gltf.scene.getObjectByName("turret_base");
    turret_middle_base = gltf.scene.getObjectByName("turret_middle_base");
    turret_core = gltf.scene.getObjectByName("turret_core");

    turret_base_l = gltf.scene.getObjectByName("turret_base_l");
    turret_middle_panel_l = gltf.scene.getObjectByName("turret_middle_panel_l");
    turret_side_plate_l = gltf.scene.getObjectByName("turret_side_plate_l");
    turret_front_corner_l = gltf.scene.getObjectByName("turret_front_corner_l");
    turret_back_corner_l = gltf.scene.getObjectByName("turret_back_corner_l");

    turret_base_r = gltf.scene.getObjectByName("turret_base_r");
    turret_middle_panel_r = gltf.scene.getObjectByName("turret_middle_panel_r");
    turret_side_plate_r = gltf.scene.getObjectByName("turret_side_plate_r");
    turret_front_corner_r = gltf.scene.getObjectByName("turret_front_corner_r");
    turret_back_corner_r = gltf.scene.getObjectByName("turret_back_corner_r");

    //Turret Hinge
    turret_hinge_back = gltf.scene.getObjectByName("turret_hinge_back");
    turret_hinge_front = gltf.scene.getObjectByName("turret_hinge_front");
    barrel = gltf.scene.getObjectByName("barrel");

    //Track
    track_l = gltf.scene.getObjectByName("track_l");
    wheel_outer_l = gltf.scene.getObjectByName("wheel_outer_l");
    wheel_inner_l = gltf.scene.getObjectByName("wheel_inner_l");
    track_r = gltf.scene.getObjectByName("track_r");
    wheel_outer_r = gltf.scene.getObjectByName("wheel_outer_r");
    wheel_inner_r = gltf.scene.getObjectByName("wheel_inner_r");

    
    //Add Obj

    //Chassis
    scene.add(chassis_base_m);
    scene.add(chassis_base_l);
    scene.add(chassis_plate_l);
    scene.add(chassis_base_r);
    scene.add(chassis_plate_r);

    //Turret
    scene.add(turret_base);
    scene.add(turret_middle_base);
    scene.add(turret_core);

    scene.add(turret_base_l);
    scene.add(turret_middle_panel_l);
    scene.add(turret_side_plate_l);
    scene.add(turret_front_corner_l);
    scene.add(turret_back_corner_l);

    scene.add(turret_base_r);
    scene.add(turret_middle_panel_r);
    scene.add(turret_side_plate_r);
    scene.add(turret_front_corner_r);
    scene.add(turret_back_corner_r);

    //Turret Hinge
    scene.add(turret_hinge_back);
    scene.add(turret_hinge_front);
    scene.add(barrel);

    //Track
    scene.add(track_l);
    scene.add(wheel_outer_l);
    scene.add(wheel_outer_r);
    scene.add(track_r);
    scene.add(wheel_inner_l);
    scene.add(wheel_inner_r);


    //Parent Obj

    //Chassis
    chassis_base_l.parent = chassis_base_m;
    chassis_plate_l.parent = chassis_base_l;
    chassis_base_r.parent = chassis_base_m;
    chassis_plate_r.parent = chassis_base_r;

    //Turret
    turret_base.parent = chassis_base_m;
    turret_middle_base.parent = turret_base;
    turret_core.parent = turret_base;

    turret_base_l.parent = turret_middle_base;
    turret_middle_panel_l.parent = turret_core;
    turret_side_plate_l.parent = turret_middle_panel_l;
    turret_front_corner_l.parent = turret_side_plate_l;
    turret_back_corner_l.parent = turret_side_plate_l;
    
    turret_base_r.parent = turret_middle_base;
    turret_middle_panel_r.parent = turret_core;
    turret_side_plate_r.parent = turret_middle_panel_r;
    turret_front_corner_r.parent = turret_side_plate_r;
    turret_back_corner_r.parent = turret_side_plate_r;

    //Turret Hinge
    turret_hinge_back.parent = turret_middle_base;
    turret_hinge_front.parent = turret_hinge_back;
    barrel.parent = turret_hinge_front;

    //Wheel
    track_l.parent = chassis_plate_l;
    wheel_outer_l.parent = track_l;
    wheel_inner_l.parent = wheel_outer_l;
    track_r.parent = chassis_plate_r;
    wheel_outer_r.parent = track_r;
    wheel_inner_r.parent = wheel_outer_r;


    //Setup Obj

    //Chassis
    chassis_base_m.position.set(0, 0, 0);
    chassis_base_l.position.set(3.4, 0.6, 1);
    chassis_plate_l.position.set(0, 0, 0.6);
    chassis_base_r.position.set(3.4, 0.6, -1);
    chassis_plate_r.position.set(0, 0, -0.6);

    //Turret
    turret_base.position.set(0, 1, 0)
    turret_middle_base.position.set(0, 0, 0);
    turret_core.position.set(-1, 0.2, 0);

    turret_base_l.position.set(0, 0, 0.4);
    turret_middle_panel_l.position.set(2.9, 0, 0.4);
    turret_side_plate_l.position.set(-2.7, 0, 0.2);
    turret_front_corner_l.position.set(0, 0, 0);
    turret_back_corner_l.position.set(2.3, 0, 0);

    turret_base_r.position.set(0, 0, -0.4);
    turret_middle_panel_r.position.set(2.9, 0, -0.4);
    turret_side_plate_r.position.set(-2.7, 0, -0.2);
    turret_front_corner_r.position.set(0, 0, 0);
    turret_back_corner_r.position.set(2.3, 0, 0);

    //Turret Hinge
    turret_hinge_back.position.set(-1.15, 0.25, 0);
    turret_hinge_front.position.set(-0.15, 0, 0);
    barrel.position.set(-0.5, 0, 0);

    //Track
    track_l.position.set(-3.5, -0.9, -0.3);
    wheel_outer_l.position.set(0, 0, 0.15);
    wheel_inner_l.position.set(0, 0, -0.3);
    track_r.position.set(-3.5, -0.9, 0.3);
    wheel_outer_r.position.set(0, 0, -0.15);
    wheel_inner_r.position.set(0, 0, 0.3);


    //Align
    chassis_base_m.rotation.y = Math.PI;

    //Traverse
    scene.traverse(function(children) {
        scene_objects.push(children);
    });

    animate();
}